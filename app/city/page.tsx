import Link from "next/link";
import { citySlug, getAllShelters } from "@/lib/shelters";
import { RailedLayout } from "@/components/RailedLayout";

export const metadata = {
  title: "Browse by city",
  description:
    "Find homeless shelters and resources by city, state, or province across the United States and Canada.",
};

export default function AllCities() {
  const all = getAllShelters();
  type City = { city: string; region: string; country: "US" | "CA"; slug: string; count: number };
  const map = new Map<string, City>();
  for (const s of all) {
    const slug = citySlug(s);
    const e = map.get(slug);
    if (e) e.count += 1;
    else map.set(slug, { city: s.city, region: s.region, country: s.country, slug, count: 1 });
  }
  const cities = Array.from(map.values()).sort((a, b) => b.count - a.count || a.city.localeCompare(b.city));

  // Group by region for outline
  const byRegion = new Map<string, City[]>();
  for (const c of cities) {
    const key = `${c.region} (${c.country})`;
    const arr = byRegion.get(key) ?? [];
    arr.push(c);
    byRegion.set(key, arr);
  }
  const regions = Array.from(byRegion.keys()).sort();

  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-bold text-ink">Browse resources by city</h1>
        <p className="mt-2 text-ink-soft">
          {cities.length} cities covered across {regions.length} states, provinces, and territories.
        </p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-ink">Largest cities</h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {cities.slice(0, 20).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/city/${c.slug}`}
                  className="rounded-full bg-brand px-3 py-1 font-medium text-white hover:bg-brand-dark"
                >
                  {c.city}, {c.region} · {c.count}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-ink">All cities by state/province</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r}>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{r}</p>
                <ul className="mt-1 space-y-0.5">
                  {byRegion.get(r)!.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/city/${c.slug}`} className="text-sm text-ink-soft hover:text-brand">
                        {c.city} <span className="text-ink-muted">· {c.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>
    </RailedLayout>
  );
}
