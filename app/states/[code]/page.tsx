import Link from "next/link";
import { notFound } from "next/navigation";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";
import { citySlug, getAllShelters } from "@/lib/shelters";
import { getAllRegions, getRegion, type Region } from "@/lib/regions";

interface Params {
  params: { code: string };
}

export function generateStaticParams() {
  // Generate one path per region, lowercased
  return getAllRegions().map((r) => ({ code: r.code.toLowerCase() }));
}

function resolveRegion(codeParam: string): Region | undefined {
  const code = codeParam.toUpperCase();
  // Prefer US match when both exist (rare since codes are mostly unique)
  return getRegion("US", code) ?? getRegion("CA", code);
}

export function generateMetadata({ params }: Params) {
  const r = resolveRegion(params.code);
  if (!r) return {};
  const where = r.country === "US" ? r.name : r.name + ", Canada";
  return {
    title: `Homelessness in ${where} — resources, statistics, and shelters`,
    description: `Resources, shelter directory, and citable statistics on homelessness in ${where}. ${
      r.pit2023 ? `Approximately ${r.pit2023.toLocaleString()} people in the 2023 PIT count.` : ""
    }`.trim(),
    alternates: { canonical: `/states/${r.code.toLowerCase()}` },
  };
}

export default function StatePage({ params }: Params) {
  const region = resolveRegion(params.code);
  if (!region) notFound();

  const shelters = getAllShelters().filter(
    (s) => s.region === region.code && s.country === region.country,
  );

  // City summary
  const cityCounts = new Map<string, { city: string; region: string; count: number; slug: string }>();
  for (const s of shelters) {
    const key = `${s.city}|${s.region}`;
    const slug = citySlug(s);
    const e = cityCounts.get(key);
    if (e) e.count += 1;
    else cityCounts.set(key, { city: s.city, region: s.region, count: 1, slug });
  }
  const cities = Array.from(cityCounts.values()).sort(
    (a, b) => b.count - a.count || a.city.localeCompare(b.city),
  );

  // Service breakdown
  const services = {
    emergency: shelters.filter((s) => s.services.includes("emergency-shelter")).length,
    food: shelters.filter((s) => s.services.includes("meals") || s.services.includes("food-pantry")).length,
    day: shelters.filter((s) => s.services.includes("day-services")).length,
    housing: shelters.filter(
      (s) =>
        s.services.includes("permanent-housing") ||
        s.services.includes("supportive-housing") ||
        s.services.includes("transitional-housing"),
    ).length,
    medical: shelters.filter((s) => s.services.includes("medical")).length,
    youth: shelters.filter((s) => s.populationsServed.includes("youth")).length,
    veterans: shelters.filter((s) => s.populationsServed.includes("veterans")).length,
    families: shelters.filter((s) => s.populationsServed.includes("families")).length,
    lgbtq: shelters.filter((s) => s.populationsServed.includes("lgbtq")).length,
    indigenous: shelters.filter((s) => s.populationsServed.includes("indigenous")).length,
  };

  const countryName = region.country === "US" ? "United States" : "Canada";

  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          <Link href="/states" className="hover:underline">
            By region
          </Link>{" "}
          · {countryName}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          Homelessness in {region.name}
        </h1>
        {region.pit2023 && (
          <p className="mt-3 text-lg text-ink-soft">
            Approximately <strong className="text-ink">{region.pit2023.toLocaleString()}</strong>{" "}
            people experiencing homelessness on a single night in {region.name}, per the 2023 HUD
            Point-in-Time count (rounded).
          </p>
        )}
        {region.notes && (
          <p className="mt-3 text-lg text-ink-soft">{region.notes}</p>
        )}

        {/* Quick stats */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat value={shelters.length.toString()} label="Resources on HomelessHelp" />
          <Stat value={cities.length.toString()} label="Cities covered" />
          {region.pit2023 && (
            <Stat value={region.pit2023.toLocaleString()} label="2023 PIT count" />
          )}
          <Stat
            value={
              region.country === "US"
                ? `Rank ${(region.pit2023 ?? 0) > 0 ? `#${rankUS(region) ?? "—"}` : "—"}`
                : "Canada"
            }
            label={region.country === "US" ? "US PIT rank" : "Country"}
          />
        </div>

        {region.programNote && (
          <section className="mt-10 rounded-xl bg-paper p-5">
            <h2 className="text-lg font-semibold text-ink">State context</h2>
            <p className="mt-2 text-ink-soft">{region.programNote}</p>
          </section>
        )}

        {/* Where to find help */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Where to find help</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Call 211</strong> from any phone in {region.name} for
              live shelter referrals. Operators know which beds are available tonight.
            </li>
            <li>
              <strong className="text-ink">Call 988</strong> if you are in mental-health crisis
              (US and Canada).
            </li>
            <li>
              Use our{" "}
              <Link href="/find-help" className="text-brand underline">
                find-help finder
              </Link>{" "}
              to see resources closest to your location.
            </li>
            {region.hudCocLink && (
              <li>
                <strong className="text-ink">HUD Continuum of Care list for {region.name}:</strong>{" "}
                <a
                  className="text-brand underline"
                  href={region.hudCocLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  view on HUD Exchange ↗
                </a>
                . These are the local agencies that coordinate housing programs.
              </li>
            )}
          </ul>
        </section>

        {/* Service breakdown */}
        {shelters.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">
              Resources in {region.name}
            </h2>
            <div className="mt-4 grid gap-2 md:grid-cols-2 text-sm">
              <ServiceRow label="Emergency shelters" count={services.emergency} />
              <ServiceRow label="Food (meals or pantries)" count={services.food} />
              <ServiceRow label="Day services" count={services.day} />
              <ServiceRow label="Housing programs" count={services.housing} />
              <ServiceRow label="Medical / clinics" count={services.medical} />
              <ServiceRow label="Youth-specific" count={services.youth} />
              <ServiceRow label="Veteran-specific" count={services.veterans} />
              <ServiceRow label="Family-specific" count={services.families} />
              <ServiceRow label="LGBTQ+ affirming" count={services.lgbtq} />
              <ServiceRow label="Indigenous-led / -focused" count={services.indigenous} />
            </div>
          </section>
        )}

        {/* Cities */}
        {cities.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">
              Cities in {region.name} on HomelessHelp
            </h2>
            <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/city/${c.slug}`}
                    className="block rounded-md border border-brand-light/40 bg-white px-3 py-2 hover:border-brand"
                  >
                    {c.city}{" "}
                    <span className="text-ink-muted">· {c.count} resources</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {cities.length === 0 && (
          <section className="mt-10 rounded-xl border border-brand-light/60 bg-white p-5">
            <h2 className="text-lg font-semibold text-ink">No resources listed yet</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We don't yet have shelters in {region.name} in our directory. If you know of one,
              please <Link href="/submit" className="text-brand underline">submit it here</Link>.
              In the meantime, 211 is the fastest live referral.
            </p>
          </section>
        )}

        {/* Cross-links */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Related</h2>
          <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm">
            <RelatedLink href="/stats" title="National statistics with primary sources" />
            <RelatedLink href="/states" title="All US states and Canadian provinces" />
            <RelatedLink href="/timeline" title="Modern history of homelessness" />
            <RelatedLink href="/learn/causes-of-homelessness" title="The actual causes of homelessness" />
            <RelatedLink href="/learn/what-actually-works" title="What actually works: Housing First" />
            <RelatedLink href="/glossary" title="Glossary of terms (PIT, CoC, HUD-VASH, etc.)" />
          </ul>
        </section>

        <CitationBox
          title={`Homelessness in ${region.name}`}
          url={`https://homelesshelp.net/states/${region.code.toLowerCase()}`}
        />
      </article>
    </RailedLayout>
  );
}

function rankUS(region: Region): number | null {
  if (region.country !== "US") return null;
  const sortedUs = getAllRegions()
    .filter((r) => r.country === "US")
    .sort((a, b) => (b.pit2023 ?? 0) - (a.pit2023 ?? 0));
  const i = sortedUs.findIndex((r) => r.code === region.code);
  return i >= 0 ? i + 1 : null;
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-paper p-4 text-center">
      <p className="text-xl font-bold text-brand">{value}</p>
      <p className="text-xs uppercase tracking-wider text-ink-muted">{label}</p>
    </div>
  );
}

function ServiceRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-brand-light/40 bg-white px-3 py-2">
      <span className="text-ink-soft">{label}</span>
      <span className="font-semibold text-ink">{count}</span>
    </div>
  );
}

function RelatedLink({ href, title }: { href: string; title: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-md border border-brand-light/40 bg-white px-3 py-2 text-brand hover:border-brand"
      >
        {title} →
      </Link>
    </li>
  );
}
