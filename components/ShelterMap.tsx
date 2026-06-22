"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import {
  POPULATION_LABEL,
  SERVICE_LABEL,
  type Population,
  type Shelter,
  distanceKm,
  kmToMiles,
} from "@/lib/shelters";

const defaultIcon = L.divIcon({
  className: "hh-pin",
  html: '<span class="hh-pin__dot"></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 22],
  popupAnchor: [0, -20],
});

function FlyTo({ target }: { target: { lat: number; lng: number; zoom?: number } | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], target.zoom ?? 13, { duration: 1.0 });
  }, [target, map]);
  return null;
}

type Filter = Population | "any";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "any", label: "All" },
  { key: "men", label: POPULATION_LABEL.men },
  { key: "women", label: POPULATION_LABEL.women },
  { key: "families", label: POPULATION_LABEL.families },
  { key: "youth", label: POPULATION_LABEL.youth },
  { key: "veterans", label: POPULATION_LABEL.veterans },
  { key: "lgbtq", label: POPULATION_LABEL.lgbtq },
  { key: "indigenous", label: POPULATION_LABEL.indigenous },
];

export default function ShelterMap({ shelters }: { shelters: Shelter[] }) {
  const [query, setQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [origin, setOrigin] = useState<{ lat: number; lng: number; label: string } | null>(null);
  const [filter, setFilter] = useState<Filter>("any");
  const [target, setTarget] = useState<{ lat: number; lng: number; zoom?: number } | null>(null);
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

  const filtered = useMemo(() => {
    let list = shelters;
    if (filter !== "any") {
      list = list.filter(
        (s) => s.populationsServed.includes(filter) || s.populationsServed.includes("all"),
      );
    }
    if (nameQuery.trim()) {
      const q = nameQuery.trim().toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q),
      );
    }
    return list;
  }, [shelters, filter, nameQuery]);

  const ranked = useMemo(() => {
    if (!origin) return filtered;
    return [...filtered]
      .map((s) => ({ s, km: distanceKm(origin, s) }))
      .sort((a, b) => a.km - b.km)
      .map(({ s }) => s);
  }, [filtered, origin]);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
        query + ", USA OR Canada",
      )}`;
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      const json = (await res.json()) as Array<{ lat: string; lon: string; display_name: string }>;
      if (json[0]) {
        const lat = parseFloat(json[0].lat);
        const lng = parseFloat(json[0].lon);
        setOrigin({ lat, lng, label: json[0].display_name });
        setTarget({ lat, lng, zoom: 11 });
      }
    } finally {
      setSearching(false);
    }
  }

  function focusShelter(s: Shelter) {
    setTarget({ lat: s.lat, lng: s.lng, zoom: 15 });
    const marker = markerRefs.current[s.id];
    if (marker) setTimeout(() => marker.openPopup(), 700);
  }

  return (
    <div className="grid gap-4 md:grid-cols-[360px_1fr]">
      <aside className="rounded-lg border border-brand-light/60 bg-white p-4 max-h-[80vh] overflow-y-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, zip, or address"
            className="w-full rounded-md border border-ink-muted/30 px-3 py-2 text-sm focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            disabled={searching}
            className="rounded-md bg-brand px-3 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {searching ? "…" : "Search"}
          </button>
        </form>

        <div className="mt-2">
          <input
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Filter by resource name (e.g. Covenant House)"
            className="w-full rounded-md border border-ink-muted/30 px-3 py-2 text-sm focus:border-brand focus:outline-none"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={
                "rounded-full border px-3 py-1 text-xs transition " +
                (filter === f.key
                  ? "border-brand bg-brand text-white"
                  : "border-ink-muted/30 bg-paper text-ink-soft hover:border-brand")
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {origin && (
          <p className="mt-3 text-xs text-ink-muted">
            Showing distance from <span className="font-medium text-ink">{origin.label}</span>
          </p>
        )}

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {ranked.length} resources
        </p>

        <ul className="mt-2 divide-y divide-ink-muted/20">
          {ranked.map((s) => {
            const km = origin ? distanceKm(origin, s) : null;
            return (
              <li key={s.id}>
                <button
                  onClick={() => focusShelter(s)}
                  className="w-full text-left py-3 hover:bg-paper"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-ink">{s.name}</span>
                    {km !== null && (
                      <span className="text-xs text-ink-muted shrink-0">
                        {kmToMiles(km).toFixed(1)} mi
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-ink-muted">
                    {s.city}, {s.region}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {s.populationsServed.slice(0, 3).map((p) => (
                      <span key={p} className="rounded bg-brand-light/40 px-1.5 py-0.5 text-[10px] text-brand-dark">
                        {POPULATION_LABEL[p]}
                      </span>
                    ))}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="h-[80vh] overflow-hidden rounded-lg border border-brand-light/60">
        <MapContainer
          center={[44.5, -95]}
          zoom={4}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FlyTo target={target} />
          <MarkerClusterGroup chunkedLoading>
            {filtered.map((s) => (
              <Marker
                key={s.id}
                position={[s.lat, s.lng]}
                icon={defaultIcon}
                ref={(m) => {
                  markerRefs.current[s.id] = m;
                }}
              >
                <Popup>
                  <div className="max-w-[260px] text-sm">
                    <p className="text-base font-semibold text-ink">{s.name}</p>
                    <p className="text-ink-muted">
                      {s.address}
                      <br />
                      {s.city}, {s.region}
                    </p>
                    {s.phone && (
                      <p className="mt-2">
                        <a className="text-brand font-medium" href={`tel:${s.phone}`}>
                          {s.phone}
                        </a>
                      </p>
                    )}
                    {s.hours && <p className="mt-1 text-xs text-ink-muted">{s.hours}</p>}
                    {s.notes && <p className="mt-2 text-xs">{s.notes}</p>}
                    <p className="mt-2 flex flex-wrap gap-1">
                      {s.populationsServed.map((p) => (
                        <span key={p} className="rounded bg-brand-light/40 px-1.5 py-0.5 text-[10px] text-brand-dark">
                          {POPULATION_LABEL[p]}
                        </span>
                      ))}
                    </p>
                    <p className="mt-1 flex flex-wrap gap-1">
                      {s.services.slice(0, 4).map((sv) => (
                        <span key={sv} className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] text-amber-900">
                          {SERVICE_LABEL[sv]}
                        </span>
                      ))}
                    </p>
                    <p className="mt-2 flex flex-wrap gap-2 text-xs">
                      <Link href={`/resource/${s.id}`} className="font-semibold text-brand underline">
                        Full details →
                      </Link>
                      {s.website && (
                        <a className="text-brand underline" href={s.website} target="_blank" rel="noreferrer">
                          Website ↗
                        </a>
                      )}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
}
