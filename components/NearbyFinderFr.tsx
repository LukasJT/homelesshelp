"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  distanceKm,
  kmToMiles,
  POPULATION_LABEL,
  SERVICE_LABEL,
  type Service,
  type Shelter,
} from "@/lib/shelters";

type Origin = { lat: number; lng: number; label: string };

const SERVICE_LABEL_FR: Partial<Record<Service, string>> = {
  "emergency-shelter": "Refuge d'urgence",
  "transitional-housing": "Logement de transition",
  "permanent-housing": "Logement permanent",
  "supportive-housing": "Logement avec soutien",
  meals: "Repas",
  "food-pantry": "Banque alimentaire",
  "day-services": "Services de jour",
  showers: "Douches",
  laundry: "Buanderie",
  mail: "Courrier",
  clothing: "Vêtements",
  "case-management": "Suivi psychosocial",
  "addiction-recovery": "Rétablissement des dépendances",
  "harm-reduction": "Réduction des méfaits",
  "mental-health": "Santé mentale",
  medical: "Soins médicaux",
  healthcare: "Soins de santé",
  legal: "Aide juridique",
  education: "Éducation",
  "job-training": "Formation à l'emploi",
  ESL: "Cours d'anglais",
  childcare: "Garderie",
  outreach: "Intervention de rue",
};

const POPULATION_LABEL_FR: Record<string, string> = {
  all: "Tous les adultes",
  men: "Hommes",
  women: "Femmes",
  youth: "Jeunes (moins de 25 ans)",
  children: "Enfants",
  families: "Familles",
  veterans: "Vétérans",
  lgbtq: "LGBTQ+",
  immigrants: "Immigrants",
  indigenous: "Autochtones",
};

const HELP_PRIORITY: Service[] = [
  "emergency-shelter",
  "day-services",
  "meals",
  "food-pantry",
  "medical",
  "harm-reduction",
];

const VOLUNTEER_HINTS_FR: Partial<Record<Service, string>> = {
  meals: "Servir un repas",
  "food-pantry": "Trier et distribuer la nourriture",
  "day-services": "Tenir le centre de jour",
  "emergency-shelter": "Quart de nuit à l'accueil",
  outreach: "Rejoindre une équipe d'intervention de rue",
  "case-management": "Accompagner un participant",
  education: "Tutorat ou enseignement",
  "job-training": "Entrevues simulées / aide au CV",
  childcare: "Garder les enfants pendant les réunions",
};

function volunteerActions(s: Shelter): string[] {
  const out: string[] = [];
  for (const sv of s.services) {
    const hint = VOLUNTEER_HINTS_FR[sv];
    if (hint && !out.includes(hint)) out.push(hint);
  }
  return out.length > 0 ? out : ["Demander ce dont ils ont besoin cette semaine"];
}

export default function NearbyFinderFr({
  shelters,
  mode,
}: {
  shelters: Shelter[];
  mode: "help" | "volunteer";
}) {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [origin, setOrigin] = useState<Origin | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [radius, setRadius] = useState<25 | 50 | 100>(mode === "help" ? 25 : 50);

  function useMyLocation() {
    setError(null);
    if (!navigator.geolocation) {
      setError("Ce navigateur ne prend pas en charge la géolocalisation. Saisissez votre ville.");
      return;
    }
    setSearching(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&zoom=10`;
          const r = await fetch(url, { headers: { Accept: "application/json" } });
          const j = await r.json();
          setOrigin({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            label: j.display_name?.split(",").slice(0, 2).join(",").trim() || "votre position",
          });
        } catch {
          setOrigin({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            label: "votre position",
          });
        } finally {
          setSearching(false);
        }
      },
      (err) => {
        setSearching(false);
        if (err.code === err.PERMISSION_DENIED) {
          setError("Permission de localisation refusée. Saisissez votre ville ou code postal.");
        } else {
          setError("Impossible de lire votre position. Saisissez votre ville ou code postal.");
        }
      },
      { timeout: 8000, maximumAge: 60_000 },
    );
  }

  async function searchByText(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setError(null);
    setSearching(true);
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
        query + ", USA OR Canada",
      )}`;
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      const json = (await res.json()) as Array<{ lat: string; lon: string; display_name: string }>;
      if (json[0]) {
        setOrigin({
          lat: parseFloat(json[0].lat),
          lng: parseFloat(json[0].lon),
          label: json[0].display_name.split(",").slice(0, 2).join(",").trim(),
        });
      } else {
        setError("Lieu introuvable. Essayez ville + province/état, ou un code postal.");
      }
    } catch {
      setError("Échec de la recherche. Vérifiez votre connexion.");
    } finally {
      setSearching(false);
    }
  }

  const ranked = useMemo(() => {
    if (!origin) return [] as Array<{ s: Shelter; km: number }>;
    let pool = shelters;
    if (mode === "help") {
      pool = pool.filter((s) => s.services.some((sv) => HELP_PRIORITY.includes(sv)));
    }
    return pool
      .map((s) => ({ s, km: distanceKm(origin, s) }))
      .filter((x) => x.km <= radius * 1.60934)
      .sort((a, b) => a.km - b.km)
      .slice(0, 30);
  }, [origin, shelters, radius, mode]);

  return (
    <>
      <div className="mt-6 rounded-xl border border-brand-light/60 bg-white p-5">
        <form onSubmit={searchByText} className="flex flex-wrap gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ville, province ou code postal — ex. Montréal, QC ou H2X 1Y4"
            className="min-w-[260px] flex-1 rounded-md border border-ink-muted/30 px-3 py-2 text-sm focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            disabled={searching}
            className={
              "rounded-md px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 " +
              (mode === "help" ? "bg-danger" : "bg-brand")
            }
          >
            {searching ? "Recherche…" : mode === "help" ? "Trouver de l'aide" : "Trouver des lieux"}
          </button>
          <button
            type="button"
            onClick={useMyLocation}
            disabled={searching}
            className={
              "rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 " +
              (mode === "help" ? "border-danger text-danger" : "border-brand text-brand")
            }
          >
            Utiliser ma position
          </button>
        </form>

        <div className="mt-3 flex items-center gap-3 text-xs text-ink-muted">
          <span>Dans un rayon de :</span>
          {[25, 50, 100].map((r) => (
            <button
              key={r}
              onClick={() => setRadius(r as 25 | 50 | 100)}
              className={
                "rounded-full border px-2.5 py-0.5 transition " +
                (radius === r
                  ? "border-brand bg-brand text-white"
                  : "border-ink-muted/30 hover:border-brand")
              }
            >
              {r} mi
            </button>
          ))}
        </div>

        {error && <p className="mt-3 text-sm text-danger">{error}</p>}
      </div>

      {origin && (
        <p className="mt-6 text-sm text-ink-muted">
          Affichage de {ranked.length} ressources dans un rayon de {radius} mi de{" "}
          <span className="font-medium text-ink">{origin.label}</span>.
        </p>
      )}

      {origin && ranked.length === 0 && !searching && (
        <div className="mt-4 rounded-lg border border-brand-light/60 bg-white p-6">
          <p className="font-medium text-ink">Aucune ressource dans un rayon de {radius} mi.</p>
          <p className="mt-2 text-sm text-ink-soft">
            {mode === "help"
              ? "Essayez d'élargir le rayon. En cas de besoin immédiat, composez le 211 — ils ont les données en direct (service bilingue dans la plupart des régions canadiennes)."
              : "Essayez d'élargir le rayon, ou contactez une organisation nationale directement."}
          </p>
        </div>
      )}

      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {ranked.map(({ s, km }) => {
          const phoneDigits = s.phone?.replace(/[^0-9+]/g, "");
          const actions = mode === "volunteer" ? volunteerActions(s) : null;
          return (
            <li key={s.id}>
              <article className="h-full rounded-lg border border-brand-light/60 bg-white p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-lg font-semibold text-ink">{s.name}</h2>
                  <span className="shrink-0 text-xs text-ink-muted">
                    {kmToMiles(km).toFixed(1)} mi
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">
                  {s.address}, {s.city}, {s.region}
                </p>
                {s.hours && <p className="mt-1 text-xs text-ink-muted">{s.hours}</p>}

                {mode === "help" && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {s.services
                      .filter((sv) => HELP_PRIORITY.includes(sv))
                      .slice(0, 4)
                      .map((sv) => (
                        <span
                          key={sv}
                          className="rounded bg-brand-light/40 px-1.5 py-0.5 text-[11px] font-medium text-brand-dark"
                        >
                          {SERVICE_LABEL_FR[sv] ?? SERVICE_LABEL[sv]}
                        </span>
                      ))}
                  </div>
                )}

                {mode === "volunteer" && actions && (
                  <div className="mt-4 rounded-md bg-accent/10 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
                      Comment vous pourriez aider
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-ink-soft">
                      {actions.slice(0, 4).map((a) => (
                        <li key={a}>• {a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1">
                  {s.populationsServed.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="rounded bg-paper px-1.5 py-0.5 text-[10px] text-ink-muted"
                    >
                      {POPULATION_LABEL_FR[p] ?? POPULATION_LABEL[p]}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {phoneDigits && (
                    <a
                      href={`tel:${phoneDigits}`}
                      className={
                        "rounded-md px-3 py-2 text-xs font-semibold text-white " +
                        (mode === "help" ? "bg-danger" : "bg-brand")
                      }
                    >
                      {mode === "help" ? `Appeler ${s.phone}` : `Appeler : ${s.phone}`}
                    </a>
                  )}
                  {s.website && (
                    <a
                      href={s.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-brand px-3 py-2 text-xs font-semibold text-brand"
                    >
                      Site web ↗
                    </a>
                  )}
                  <Link
                    href={`/resource/${s.id}`}
                    className="rounded-md border border-ink-muted/30 px-3 py-2 text-xs font-semibold text-ink"
                  >
                    Détails complets
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
