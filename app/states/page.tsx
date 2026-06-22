import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";
import { getAllShelters } from "@/lib/shelters";
import { getUsRegions, getCaRegions } from "@/lib/regions";

export const metadata = {
  title: "Homelessness by US state and Canadian province",
  description:
    "Approximate homeless population by US state and Canadian province (2023 point-in-time counts), with state-by-state pages and direct links to each region's HUD Continuum of Care.",
  alternates: { canonical: "/states" },
};

export default function StatesPage() {
  const shelters = getAllShelters();
  const regionCounts = new Map<string, number>();
  for (const s of shelters) {
    const key = `${s.region}/${s.country}`;
    regionCounts.set(key, (regionCounts.get(key) ?? 0) + 1);
  }

  const usSorted = [...getUsRegions()].sort(
    (a, b) => (b.pit2023 ?? 0) - (a.pit2023 ?? 0),
  );
  const ca = getCaRegions();

  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Research · By region
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          Homelessness by US state and Canadian province
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          Approximate single-night PIT counts (2023) for each US state, plus context for each
          Canadian province and territory. Click any state or province for a dedicated page with
          program notes and the local shelter directory.
        </p>

        <div className="mt-6 rounded-xl bg-paper p-5 text-sm text-ink-soft">
          <p>
            <strong className="text-ink">For citation:</strong> always cite the underlying source
            (HUD AHAR Part 1 for US figures; the relevant provincial/Reaching Home report for
            Canadian figures). This page is a navigation index, not the primary source.
          </p>
          <p className="mt-2">
            For methodology, see our{" "}
            <Link href="/glossary" className="text-brand underline">
              glossary
            </Link>
            .
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">US states (ranked by 2023 PIT count)</h2>
          <p className="mt-1 text-sm text-ink-muted">
            Source: HUD AHAR Part 1, 2023, rounded.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-brand-light/60">
            <table className="w-full text-sm">
              <thead className="bg-paper text-ink-muted">
                <tr>
                  <th className="px-3 py-2 text-left">Rank</th>
                  <th className="px-3 py-2 text-left">State</th>
                  <th className="px-3 py-2 text-right">2023 PIT count</th>
                  <th className="px-3 py-2 text-right">On HomelessHelp</th>
                  <th className="px-3 py-2 text-left">More</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-muted/20 bg-white">
                {usSorted.map((r, i) => {
                  const count = regionCounts.get(`${r.code}/US`) ?? 0;
                  return (
                    <tr key={r.code}>
                      <td className="px-3 py-2 text-ink-muted">{i + 1}</td>
                      <td className="px-3 py-2 font-medium">
                        <Link
                          href={`/states/${r.code.toLowerCase()}`}
                          className="text-brand hover:underline"
                        >
                          {r.name} ({r.code})
                        </Link>
                      </td>
                      <td className="px-3 py-2 text-right tabular-nums text-ink-soft">
                        {r.pit2023 ? r.pit2023.toLocaleString() : "—"}
                      </td>
                      <td className="px-3 py-2 text-right text-ink-soft">{count}</td>
                      <td className="px-3 py-2">
                        {r.hudCocLink && (
                          <a
                            className="text-xs text-brand underline"
                            href={r.hudCocLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            HUD CoC list ↗
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">
            Canadian provinces and territories
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Canadian PIT counts are conducted by individual communities (not nationally); methods
            vary by province.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {ca.map((r) => {
              const count = regionCounts.get(`${r.code}/CA`) ?? 0;
              return (
                <Link
                  key={r.code}
                  href={`/states/${r.code.toLowerCase()}`}
                  className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
                >
                  <p className="font-semibold text-ink">
                    {r.name} ({r.code})
                  </p>
                  {r.notes && <p className="mt-1 text-sm text-ink-soft">{r.notes}</p>}
                  <p className="mt-2 text-xs text-brand">
                    {count > 0 ? `${count} resources →` : "Open page →"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <CitationBox
          title="Homelessness by US state and Canadian province"
          url="https://homelesshelp.net/states"
        />
      </article>
    </RailedLayout>
  );
}
