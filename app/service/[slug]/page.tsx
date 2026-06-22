import Link from "next/link";
import { notFound } from "next/navigation";
import NearbyFinder from "@/components/NearbyFinder";
import { RailedLayout } from "@/components/RailedLayout";
import { citySlug, getAllShelters } from "@/lib/shelters";
import { getAllServiceProfiles, getServiceProfile } from "@/lib/services";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllServiceProfiles().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const p = getServiceProfile(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.hero,
    alternates: { canonical: `/service/${p.slug}` },
  };
}

export default function ServicePage({ params }: Params) {
  const profile = getServiceProfile(params.slug);
  if (!profile) notFound();

  const matching = getAllShelters().filter((s) =>
    s.services.some((sv) => profile.matchServices.includes(sv)),
  );

  const cityCounts = new Map<string, { city: string; region: string; count: number; slug: string }>();
  for (const s of matching) {
    const key = `${s.city}|${s.region}`;
    const slug = citySlug(s);
    const e = cityCounts.get(key);
    if (e) e.count += 1;
    else cityCounts.set(key, { city: s.city, region: s.region, count: 1, slug });
  }
  const topCities = Array.from(cityCounts.values())
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city))
    .slice(0, 20);

  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {profile.shortTitle}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">{profile.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">{profile.hero}</p>

        <div className="mt-6 rounded-xl bg-paper p-5 text-ink-soft">{profile.intro}</div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Find {profile.shortTitle.toLowerCase()} near you</h2>
          <p className="mt-1 text-sm text-ink-muted">
            {matching.length} matching resources across the US and Canada.
          </p>
          <NearbyFinder shelters={matching} mode="help" />
        </section>

        {topCities.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Top cities</h2>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/city/${c.slug}`}
                    className="rounded-full border border-brand-light/60 bg-white px-3 py-1 hover:border-brand"
                  >
                    {c.city}, {c.region} <span className="text-ink-muted">· {c.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-xl border border-brand-light/60 bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">What to know</h2>
          <ul className="mt-3 space-y-2 text-ink-soft">
            {profile.tips.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Related reading</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {profile.related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${a.slug}`}
                  className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
                >
                  <p className="font-semibold text-ink">{a.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </RailedLayout>
  );
}
