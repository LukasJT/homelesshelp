import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";
import { citySlug, getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Homelessness by US state and Canadian province",
  description:
    "Approximate homeless population by US state and Canadian province (2023 point-in-time counts), with links to each region's HUD Continuum of Care or Reaching Home community plan and resources listed on HomelessHelp.",
  alternates: { canonical: "/states" },
};

interface Region {
  code: string;
  name: string;
  country: "US" | "CA";
  // Approximate single-night PIT count, rounded. Year noted in body.
  pit2023?: number;
  // Where to find more detailed state/province data
  hudCocLink?: string;
  notes?: string;
}

// 2023 HUD AHAR point-in-time figures, rounded. All numbers should be treated
// as approximate and verified against the primary source (HUD AHAR Part 1) when
// citing in academic work.
const US_STATES: Region[] = [
  { code: "CA", name: "California", country: "US", pit2023: 181400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=CA&program=CoC" },
  { code: "NY", name: "New York", country: "US", pit2023: 103200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NY&program=CoC" },
  { code: "FL", name: "Florida", country: "US", pit2023: 30800, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=FL&program=CoC" },
  { code: "WA", name: "Washington", country: "US", pit2023: 28000, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WA&program=CoC" },
  { code: "TX", name: "Texas", country: "US", pit2023: 27400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=TX&program=CoC" },
  { code: "OR", name: "Oregon", country: "US", pit2023: 20100, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=OR&program=CoC" },
  { code: "MA", name: "Massachusetts", country: "US", pit2023: 19100, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MA&program=CoC" },
  { code: "PA", name: "Pennsylvania", country: "US", pit2023: 14500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=PA&program=CoC" },
  { code: "CO", name: "Colorado", country: "US", pit2023: 14400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=CO&program=CoC" },
  { code: "AZ", name: "Arizona", country: "US", pit2023: 14200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AZ&program=CoC" },
  { code: "IL", name: "Illinois", country: "US", pit2023: 12000, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=IL&program=CoC" },
  { code: "GA", name: "Georgia", country: "US", pit2023: 10700, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=GA&program=CoC" },
  { code: "OH", name: "Ohio", country: "US", pit2023: 10700, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=OH&program=CoC" },
  { code: "NJ", name: "New Jersey", country: "US", pit2023: 10400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NJ&program=CoC" },
  { code: "NC", name: "North Carolina", country: "US", pit2023: 9200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NC&program=CoC" },
  { code: "TN", name: "Tennessee", country: "US", pit2023: 9200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=TN&program=CoC" },
  { code: "MI", name: "Michigan", country: "US", pit2023: 8200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MI&program=CoC" },
  { code: "NV", name: "Nevada", country: "US", pit2023: 7900, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NV&program=CoC" },
  { code: "HI", name: "Hawaii", country: "US", pit2023: 6200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=HI&program=CoC" },
  { code: "VA", name: "Virginia", country: "US", pit2023: 6200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=VA&program=CoC" },
  { code: "MN", name: "Minnesota", country: "US", pit2023: 8200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MN&program=CoC" },
  { code: "DC", name: "District of Columbia", country: "US", pit2023: 5100, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=DC&program=CoC" },
  { code: "MD", name: "Maryland", country: "US", pit2023: 5600, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MD&program=CoC" },
  { code: "LA", name: "Louisiana", country: "US", pit2023: 4500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=LA&program=CoC" },
  { code: "MO", name: "Missouri", country: "US", pit2023: 6300, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MO&program=CoC" },
  { code: "WI", name: "Wisconsin", country: "US", pit2023: 4800, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WI&program=CoC" },
  { code: "IN", name: "Indiana", country: "US", pit2023: 5400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=IN&program=CoC" },
  { code: "OK", name: "Oklahoma", country: "US", pit2023: 4400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=OK&program=CoC" },
  { code: "KY", name: "Kentucky", country: "US", pit2023: 4200, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=KY&program=CoC" },
  { code: "CT", name: "Connecticut", country: "US", pit2023: 3300, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=CT&program=CoC" },
  { code: "SC", name: "South Carolina", country: "US", pit2023: 3600, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=SC&program=CoC" },
  { code: "UT", name: "Utah", country: "US", pit2023: 3500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=UT&program=CoC" },
  { code: "AL", name: "Alabama", country: "US", pit2023: 3300, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AL&program=CoC" },
  { code: "NM", name: "New Mexico", country: "US", pit2023: 4000, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NM&program=CoC" },
  { code: "AK", name: "Alaska", country: "US", pit2023: 2100, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AK&program=CoC" },
  { code: "ME", name: "Maine", country: "US", pit2023: 4400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=ME&program=CoC" },
  { code: "AR", name: "Arkansas", country: "US", pit2023: 2500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=AR&program=CoC" },
  { code: "MS", name: "Mississippi", country: "US", pit2023: 1100, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MS&program=CoC" },
  { code: "KS", name: "Kansas", country: "US", pit2023: 2500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=KS&program=CoC" },
  { code: "IA", name: "Iowa", country: "US", pit2023: 2900, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=IA&program=CoC" },
  { code: "NH", name: "New Hampshire", country: "US", pit2023: 2400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NH&program=CoC" },
  { code: "VT", name: "Vermont", country: "US", pit2023: 3500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=VT&program=CoC" },
  { code: "RI", name: "Rhode Island", country: "US", pit2023: 1800, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=RI&program=CoC" },
  { code: "DE", name: "Delaware", country: "US", pit2023: 1300, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=DE&program=CoC" },
  { code: "MT", name: "Montana", country: "US", pit2023: 1800, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=MT&program=CoC" },
  { code: "ID", name: "Idaho", country: "US", pit2023: 2300, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=ID&program=CoC" },
  { code: "ND", name: "North Dakota", country: "US", pit2023: 700, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=ND&program=CoC" },
  { code: "SD", name: "South Dakota", country: "US", pit2023: 1300, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=SD&program=CoC" },
  { code: "NE", name: "Nebraska", country: "US", pit2023: 2400, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=NE&program=CoC" },
  { code: "WV", name: "West Virginia", country: "US", pit2023: 1500, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WV&program=CoC" },
  { code: "WY", name: "Wyoming", country: "US", pit2023: 600, hudCocLink: "https://www.hudexchange.info/grantees/find-a-grantee/?state=WY&program=CoC" },
];

// Canadian provinces — figures are approximate from various provincial PIT
// counts and federal Reaching Home data, not directly comparable across
// provinces because the data is collected differently.
const CA_PROVINCES: Region[] = [
  { code: "ON", name: "Ontario", country: "CA", notes: "Toronto alone reports ~10,500 single-night shelter use. Province-wide totals are not regularly published." },
  { code: "BC", name: "British Columbia", country: "CA", notes: "Greater Vancouver PIT count: ~4,800 (2023). Province conducts an integrated count every 3 years." },
  { code: "QC", name: "Quebec", country: "CA", notes: "Montreal PIT 2022: ~4,690. Province-wide enumeration is partial." },
  { code: "AB", name: "Alberta", country: "CA", notes: "Calgary PIT 2024: ~2,900. Edmonton: ~2,800." },
  { code: "MB", name: "Manitoba", country: "CA", notes: "Winnipeg PIT 2022: ~1,250 enumerated, with Indigenous people overrepresented." },
  { code: "NS", name: "Nova Scotia", country: "CA", notes: "Halifax actively maintains a By-Names List of >1,000 people." },
  { code: "SK", name: "Saskatchewan", country: "CA", notes: "Saskatoon PIT 2022: ~550." },
  { code: "NB", name: "New Brunswick", country: "CA" },
  { code: "NL", name: "Newfoundland and Labrador", country: "CA" },
  { code: "PE", name: "Prince Edward Island", country: "CA" },
  { code: "YT", name: "Yukon", country: "CA" },
  { code: "NT", name: "Northwest Territories", country: "CA" },
  { code: "NU", name: "Nunavut", country: "CA", notes: "Iqaluit is the only community with year-round emergency shelter. Hidden homelessness is extreme — many in overcrowded housing." },
];

export default function StatesPage() {
  const shelters = getAllShelters();
  const regionCounts = new Map<string, number>();
  for (const s of shelters) {
    const key = `${s.region}/${s.country}`;
    regionCounts.set(key, (regionCounts.get(key) ?? 0) + 1);
  }

  const usSorted = [...US_STATES].sort((a, b) => (b.pit2023 ?? 0) - (a.pit2023 ?? 0));

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
          Canadian province and territory. Numbers here are rounded — verify against the primary
          source for citation.
        </p>

        <div className="mt-6 rounded-xl bg-paper p-5 text-sm text-ink-soft">
          <p>
            <strong className="text-ink">For citation:</strong> always cite the underlying source
            (HUD AHAR Part 1 for US figures; the relevant provincial/Reaching Home report for
            Canadian figures). This page is a navigation index, not the primary source.
          </p>
          <p className="mt-2">
            For methodology and what "PIT count" means, see our{" "}
            <Link href="/glossary" className="text-brand underline">glossary</Link>.
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
                  <th className="px-3 py-2 text-left">CoCs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-muted/20 bg-white">
                {usSorted.map((r, i) => {
                  const count = regionCounts.get(`${r.code}/US`) ?? 0;
                  return (
                    <tr key={r.code}>
                      <td className="px-3 py-2 text-ink-muted">{i + 1}</td>
                      <td className="px-3 py-2 font-medium text-ink">
                        {r.name} ({r.code})
                      </td>
                      <td className="px-3 py-2 text-right tabular-nums text-ink-soft">
                        {r.pit2023 ? r.pit2023.toLocaleString() : "—"}
                      </td>
                      <td className="px-3 py-2 text-right">
                        {count > 0 ? (
                          <Link
                            href={`/city`}
                            className="text-brand underline"
                          >
                            {count} resources
                          </Link>
                        ) : (
                          <span className="text-ink-muted">—</span>
                        )}
                      </td>
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
            Canadian PIT counts are conducted by individual communities (not nationally), and
            methods vary across provinces. We surface what's known per region with a link to the
            federal Reaching Home strategy.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {CA_PROVINCES.map((r) => {
              const count = regionCounts.get(`${r.code}/CA`) ?? 0;
              return (
                <div
                  key={r.code}
                  className="rounded-lg border border-brand-light/60 bg-white p-4"
                >
                  <p className="font-semibold text-ink">
                    {r.name} ({r.code})
                  </p>
                  {r.notes && (
                    <p className="mt-1 text-sm text-ink-soft">{r.notes}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-3 text-xs">
                    {count > 0 && (
                      <Link href="/city" className="text-brand underline">
                        {count} resources on HomelessHelp →
                      </Link>
                    )}
                    <a
                      className="text-brand underline"
                      href="https://www.canada.ca/en/employment-social-development/programs/homelessness.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reaching Home ↗
                    </a>
                  </div>
                </div>
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
