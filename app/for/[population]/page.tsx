import Link from "next/link";
import { notFound } from "next/navigation";
import NearbyFinder from "@/components/NearbyFinder";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllShelters } from "@/lib/shelters";
import { getAllPopulationProfiles, getPopulationProfile } from "@/lib/populations";

interface Params {
  params: { population: string };
}

export function generateStaticParams() {
  return getAllPopulationProfiles().map((p) => ({ population: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const p = getPopulationProfile(params.population);
  if (!p) return {};
  return {
    title: p.title,
    description: p.hero,
    alternates: { canonical: `/for/${p.slug}` },
  };
}

export default function ForPopulationPage({ params }: Params) {
  const profile = getPopulationProfile(params.population);
  if (!profile) notFound();

  // Filter shelters to those serving this population specifically (and not just 'all').
  const matching = getAllShelters().filter((s) =>
    s.populationsServed.includes(profile.population),
  );

  // Pick top cities by count for browsing.
  const cityCounts = new Map<string, { city: string; region: string; count: number; slug: string }>();
  for (const s of matching) {
    const key = `${s.city}|${s.region}`;
    const slug = (s.city + "-" + s.region).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const e = cityCounts.get(key);
    if (e) e.count += 1;
    else cityCounts.set(key, { city: s.city, region: s.region, count: 1, slug });
  }
  const topCities = Array.from(cityCounts.values())
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city))
    .slice(0, 16);

  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">For {profile.shortTitle.toLowerCase()}</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">{profile.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">{profile.hero}</p>

        <div className="mt-6 rounded-xl bg-paper p-5 text-ink-soft">{profile.intro}</div>

        {/* Hotlines */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Crisis lines and quick contacts</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {profile.hotlines.map((h) => (
              <a
                key={h.label + h.number}
                href={h.number.startsWith("1") || h.number === "211" || h.number === "988"
                  ? `tel:${h.number.replace(/[^0-9+]/g, "")}`
                  : undefined}
                className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-semibold text-ink">{h.label}</p>
                  <span className="rounded bg-paper px-1.5 py-0.5 text-[10px] text-ink-muted">
                    {h.country === "BOTH" ? "US & CA" : h.country}
                  </span>
                </div>
                <p className="mt-1 text-lg font-semibold text-brand">{h.number}</p>
                <p className="mt-1 text-sm text-ink-soft">{h.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Location finder */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">
            Find {profile.shortTitle.toLowerCase()}-specific resources near you
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Showing {matching.length} resources that specifically serve {profile.shortTitle.toLowerCase()}.
            Type your city or share your location to rank them by distance.
          </p>
          <NearbyFinder shelters={matching} mode="help" />
        </section>

        {/* Top cities */}
        {topCities.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Top cities for {profile.shortTitle.toLowerCase()} resources</h2>
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

        {/* National charities */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">National & regional charities</h2>
          <p className="mt-1 text-sm text-ink-muted">
            Effective organizations for donating, volunteering, or finding help. We don't take a
            cut — every link goes directly to the charity.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {profile.charities.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
              >
                <p className="font-semibold text-ink">{c.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.description}</p>
                <p className="mt-2 text-xs text-brand">Visit {new URL(c.url).hostname.replace(/^www\./, "")} ↗</p>
              </a>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mt-12 rounded-xl border border-brand-light/60 bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">What to know</h2>
          <ul className="mt-3 space-y-2 text-ink-soft">
            {profile.tips.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </section>

        {/* Related articles */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Related reading</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {profile.relatedArticles.map((a) => (
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
