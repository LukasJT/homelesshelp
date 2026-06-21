import Link from "next/link";
import { notFound } from "next/navigation";
import {
  citySlug,
  getAllShelters,
  getShelterById,
  POPULATION_LABEL,
  SERVICE_LABEL,
} from "@/lib/shelters";
import { RailedLayout } from "@/components/RailedLayout";

interface Params {
  params: { id: string };
}

export function generateStaticParams() {
  return getAllShelters().map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: Params) {
  const s = getShelterById(params.id);
  if (!s) return {};
  return {
    title: `${s.name} — ${s.city}, ${s.region}`,
    description: `${s.name} in ${s.city}, ${s.region}. ${s.services
      .map((sv) => SERVICE_LABEL[sv])
      .slice(0, 3)
      .join(", ")}. ${s.hours ?? ""}`.trim(),
    alternates: { canonical: `/resource/${s.id}` },
  };
}

export default function ResourcePage({ params }: Params) {
  const s = getShelterById(params.id);
  if (!s) notFound();

  // Nearby shelters in the same city (for cross-linking)
  const nearby = getAllShelters()
    .filter((x) => x.city === s.city && x.region === s.region && x.id !== s.id)
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://homelesshelp.net/resource/${s.id}`,
    name: s.name,
    description: s.notes,
    address: {
      "@type": "PostalAddress",
      streetAddress: s.address,
      addressLocality: s.city,
      addressRegion: s.region,
      addressCountry: s.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: s.lat,
      longitude: s.lng,
    },
    telephone: s.phone,
    url: s.website,
    openingHours: s.hours,
  };

  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          <Link href="/map" className="hover:text-brand">Map</Link>
          {" · "}
          <Link href={`/city/${citySlug(s)}`} className="hover:text-brand">
            {s.city}, {s.region}
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink">{s.name}</h1>
        <p className="mt-1 text-ink-soft">
          {s.address}, {s.city}, {s.region}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {s.phone && (
            <a
              href={`tel:${s.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-md bg-brand px-5 py-3 font-semibold text-white"
            >
              Call {s.phone}
            </a>
          )}
          {s.website && (
            <a
              href={s.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-brand px-5 py-3 font-semibold text-brand"
            >
              Visit website ↗
            </a>
          )}
          <a
            href={`https://www.openstreetmap.org/?mlat=${s.lat}&mlon=${s.lng}#map=17/${s.lat}/${s.lng}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink-muted/30 px-5 py-3 font-semibold text-ink"
          >
            Get directions ↗
          </a>
        </div>

        <div className="mt-6 rounded-lg bg-accent/10 border border-accent/40 p-4 text-sm">
          <p className="font-semibold text-amber-900">Want to volunteer here?</p>
          <p className="mt-1 text-ink-soft">
            Call ahead to ask what they need this week. Most shelters keep a volunteer
            coordinator — say "I'd like to volunteer" when you call.{" "}
            <Link href="/volunteer" className="text-brand underline">
              See more volunteer options near you
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {s.hours && (
            <Box label="Hours">
              <p>{s.hours}</p>
            </Box>
          )}
          {s.notes && (
            <Box label="Notes">
              <p>{s.notes}</p>
            </Box>
          )}
          <Box label="Who they serve">
            <ul className="flex flex-wrap gap-1.5">
              {s.populationsServed.map((p) => (
                <li
                  key={p}
                  className="rounded bg-brand-light/40 px-2 py-0.5 text-xs text-brand-dark"
                >
                  {POPULATION_LABEL[p]}
                </li>
              ))}
            </ul>
          </Box>
          <Box label="Services offered">
            <ul className="flex flex-wrap gap-1.5">
              {s.services.map((sv) => (
                <li key={sv} className="rounded bg-accent/20 px-2 py-0.5 text-xs text-amber-900">
                  {SERVICE_LABEL[sv]}
                </li>
              ))}
            </ul>
          </Box>
        </div>

        <div className="mt-10 rounded-lg bg-paper p-5 text-sm text-ink-soft">
          <p>
            <strong className="text-ink">Always call before traveling.</strong> Bed
            availability, hours, and intake policies change. The information here is provided
            as a public reference and may be out of date.
          </p>
          <p className="mt-2">
            Spot an error?{" "}
            <Link href="/submit" className="text-brand underline">
              Tell us
            </Link>{" "}
            and we'll fix it.
          </p>
        </div>

        {nearby.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">
              Other resources in {s.city}
            </h2>
            <ul className="mt-3 grid gap-3 md:grid-cols-2">
              {nearby.map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/resource/${n.id}`}
                    className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
                  >
                    <p className="font-semibold text-ink">{n.name}</p>
                    <p className="mt-1 text-sm text-ink-muted">
                      {n.address}
                    </p>
                    {n.phone && <p className="mt-1 text-sm text-brand">{n.phone}</p>}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link href={`/city/${citySlug(s)}`} className="text-brand underline">
                See all resources in {s.city}, {s.region} →
              </Link>
            </p>
          </section>
        )}
      </article>
    </RailedLayout>
  );
}

function Box({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-brand-light/60 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</p>
      <div className="mt-2 text-sm text-ink-soft">{children}</div>
    </div>
  );
}
