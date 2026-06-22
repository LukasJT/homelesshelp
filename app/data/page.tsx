import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";
import { getAllShelters, POPULATION_LABEL, SERVICE_LABEL } from "@/lib/shelters";

export const metadata = {
  title: "Download the dataset — homeless services in US & Canada",
  description:
    "Download the full HomelessHelp dataset (CSV or JSON) for student projects, data visualization, or research. CC-BY-4.0 license. 424+ shelters across 239+ cities in US & Canada.",
  alternates: { canonical: "/data" },
};

export default function DataPage() {
  const shelters = getAllShelters();
  const cities = new Set(shelters.map((s) => `${s.city}, ${s.region}`)).size;
  const regions = new Set(shelters.map((s) => `${s.region}/${s.country}`)).size;

  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Research · Dataset
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Download the dataset</h1>
        <p className="mt-3 text-lg text-ink-soft">
          The full HomelessHelp directory in machine-readable formats. Use it for student
          projects, papers, maps, dashboards, or any other research purpose.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-paper p-5 text-center">
          <Stat value={shelters.length.toString()} label="Resources" />
          <Stat value={cities.toString()} label="Cities" />
          <Stat value={regions.toString()} label="States / provinces" />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Downloads</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <a
              href="/data/shelters.csv"
              download="homelesshelp-shelters.csv"
              className="block rounded-lg border border-brand-light/60 bg-white p-5 hover:border-brand"
            >
              <p className="text-lg font-semibold text-ink">CSV (Excel / Google Sheets)</p>
              <p className="mt-1 text-sm text-ink-muted">
                {shelters.length} rows. UTF-8, comma-separated, one row per resource. Multi-value
                fields (services, populations) use a pipe (<code>|</code>) separator.
              </p>
              <p className="mt-3 text-xs font-semibold text-brand">Download shelters.csv ↓</p>
            </a>
            <a
              href="/data/shelters.json"
              download="homelesshelp-shelters.json"
              className="block rounded-lg border border-brand-light/60 bg-white p-5 hover:border-brand"
            >
              <p className="text-lg font-semibold text-ink">JSON (developers, data viz)</p>
              <p className="mt-1 text-sm text-ink-muted">
                Same {shelters.length} entries with arrays for multi-value fields. UTF-8.
              </p>
              <p className="mt-3 text-xs font-semibold text-brand">Download shelters.json ↓</p>
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">License</h2>
          <p className="mt-2 text-ink-soft">
            The dataset is released under the{" "}
            <a
              className="text-brand underline"
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              Creative Commons Attribution 4.0 International (CC-BY-4.0)
            </a>{" "}
            license. You can use it for any purpose, including commercial, as long as you credit
            the source.
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            <strong className="text-ink">Suggested attribution:</strong>{" "}
            <em>HomelessHelp.net shelter dataset, CC-BY-4.0, retrieved from homelesshelp.net/data.</em>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Schema</h2>
          <p className="mt-2 text-ink-soft">Each row / object has the following fields:</p>

          <div className="mt-3 overflow-x-auto rounded-lg border border-brand-light/60">
            <table className="w-full text-sm">
              <thead className="bg-paper text-ink-muted">
                <tr>
                  <th className="px-3 py-2 text-left">Field</th>
                  <th className="px-3 py-2 text-left">Type</th>
                  <th className="px-3 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-muted/20 bg-white">
                <Row name="id" type="string" desc="Stable unique identifier" />
                <Row name="name" type="string" desc="Organization name" />
                <Row name="address" type="string" desc="Street address (or 'address confidential' for DV shelters)" />
                <Row name="city" type="string" desc="City name" />
                <Row name="region" type="string" desc="US state or Canadian province/territory code (e.g. 'CA', 'ON')" />
                <Row name="country" type="'US' | 'CA'" desc="ISO country code" />
                <Row name="lat" type="number" desc="Latitude (decimal degrees, WGS84)" />
                <Row name="lng" type="number" desc="Longitude (decimal degrees, WGS84)" />
                <Row name="phone" type="string (optional)" desc="E.164-format phone" />
                <Row name="website" type="string (optional)" desc="Organization URL" />
                <Row name="populationsServed" type="string[]" desc="One or more of: all, men, women, youth, children, families, veterans, lgbtq, immigrants, indigenous" />
                <Row name="services" type="string[]" desc="One or more of: emergency-shelter, transitional-housing, permanent-housing, supportive-housing, meals, food-pantry, day-services, showers, laundry, mail, clothing, case-management, addiction-recovery, harm-reduction, mental-health, medical, healthcare, legal, education, job-training, ESL, childcare, outreach" />
                <Row name="hours" type="string (optional)" desc="Hours of operation, free-text" />
                <Row name="notes" type="string (optional)" desc="Free-text contextual notes" />
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Caveats</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Not exhaustive.</strong> This dataset is curated for
              public usefulness. Major metro areas are well covered; smaller communities less so.
              Use the <Link href="/submit" className="text-brand underline">submit page</Link>{" "}
              to add gaps.
            </li>
            <li>
              <strong className="text-ink">Best-effort accuracy, not real-time.</strong> Phone
              numbers and hours change frequently in this sector. The data is updated when
              readers flag issues but is not a live feed.
            </li>
            <li>
              <strong className="text-ink">No bed-availability data.</strong> The dataset does
              not include bed counts or current capacity — that data isn't reliably available at
              scale. Use 211 for real-time availability.
            </li>
            <li>
              <strong className="text-ink">Geocoded by approximate site.</strong> For DV shelters
              with confidential addresses, we have approximate-city coordinates rather than the
              actual site.
            </li>
          </ul>
        </section>

        <CitationBox title="HomelessHelp shelter dataset" url="https://homelesshelp.net/data" />
      </article>
    </RailedLayout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-brand">{value}</p>
      <p className="text-xs uppercase tracking-wider text-ink-muted">{label}</p>
    </div>
  );
}

function Row({ name, type, desc }: { name: string; type: string; desc: string }) {
  return (
    <tr>
      <td className="px-3 py-2 font-mono text-xs text-ink">{name}</td>
      <td className="px-3 py-2 font-mono text-xs text-ink-muted">{type}</td>
      <td className="px-3 py-2 text-ink-soft">{desc}</td>
    </tr>
  );
}
