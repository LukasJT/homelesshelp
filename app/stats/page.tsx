import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";

export const metadata = {
  title: "Homelessness statistics — US & Canada figures with primary sources",
  description:
    "Citable homelessness statistics for student projects and research: how many people are homeless in the US and Canada, by population (youth, veterans, families, chronic), by region, with links to the primary HUD AHAR, PIT count, and Canadian Reaching Home sources.",
  alternates: { canonical: "/stats" },
};

interface Stat {
  number: string;
  label: string;
  source: { name: string; url: string };
  note?: string;
}

const HEADLINE: Stat[] = [
  {
    number: "~653,100",
    label: "People experiencing homelessness on a single night in the US (Jan 2023 Point-in-Time count)",
    source: { name: "HUD AHAR Part 1, 2023", url: "https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" },
    note: "Up ~12% from 2022; the largest annual increase since AHAR reporting began.",
  },
  {
    number: "~235,000",
    label: "People experiencing homelessness in Canada in a year (national prevalence estimate)",
    source: { name: "State of Homelessness in Canada (Canadian Observatory on Homelessness)", url: "https://homelesshub.ca/sohc2016/" },
    note: "Point-in-time counts capture only a fraction; the annual prevalence is several times the single-night count.",
  },
  {
    number: "~35,500",
    label: "US veterans experiencing homelessness on a single night (2023)",
    source: { name: "HUD AHAR, 2023", url: "https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" },
    note: "Down from over 75,000 in 2009 — the largest sustained reduction in any subpopulation.",
  },
];

const POPULATION: Stat[] = [
  {
    number: "~35%",
    label: "Share of the US homeless population that is families with children (2023)",
    source: { name: "HUD AHAR, 2023", url: "https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" },
  },
  {
    number: "~30%",
    label: "Share of US homeless adults experiencing chronic homelessness (year+ or 4+ episodes with disabling condition)",
    source: { name: "HUD AHAR, 2023", url: "https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" },
    note: "Despite being a minority, chronic cases consume an outsized share of emergency services costs.",
  },
  {
    number: "~28%",
    label: "Share of unsheltered adults reporting a serious mental illness (multi-study average)",
    source: { name: "SAMHSA / national reviews", url: "https://www.samhsa.gov/homelessness-programs-resources/hpr-resources" },
    note: "Most homelessness is not driven by mental illness — but it is meaningfully overrepresented vs. the general population (~5%).",
  },
  {
    number: "~30%",
    label: "Share of homeless population in Canada that is Indigenous (vs. ~5% of the general population)",
    source: { name: "Canadian Observatory on Homelessness — State of Homelessness", url: "https://homelesshub.ca/" },
  },
  {
    number: "~40%",
    label: "Estimated share of homeless youth (under 25) who identify as LGBTQ+",
    source: { name: "Voices of Youth Count — Chapin Hall, University of Chicago", url: "https://voicesofyouthcount.org/brief/lgbtq-young-adults-homelessness/" },
    note: "Compared to ~7% of all under-25s. Family rejection after coming out is the largest single cause.",
  },
  {
    number: "~50%",
    label: "Share of US homeless adults now over age 50 (versus ~11% in 1990)",
    source: { name: "Multiple HUD AHAR + Kushel et al. studies", url: "https://www.benioffhomelessness.ucsf.edu/" },
    note: "The 'graying' of the homeless population is the most dramatic demographic shift of the last 30 years.",
  },
];

const HOUSING_AND_COSTS: Stat[] = [
  {
    number: "0",
    label: "US states where a full-time minimum-wage worker can afford a 1-bedroom apartment at fair-market rent",
    source: { name: "NLIHC Out of Reach 2024", url: "https://nlihc.org/oor" },
    note: "The single most important structural driver of homelessness is the gap between wages and housing costs.",
  },
  {
    number: "~7M",
    label: "US shortfall of homes affordable and available to extremely low-income renters",
    source: { name: "NLIHC The Gap, 2024", url: "https://nlihc.org/gap" },
  },
  {
    number: "80–90%",
    label: "12-month housing retention rate in Housing First programs",
    source: { name: "Tsemberis et al.; multiple meta-analyses", url: "https://pubmed.ncbi.nlm.nih.gov/15117004/" },
    note: "Versus 30–50% in treatment-first / staircase programs.",
  },
  {
    number: "75%",
    label: "Share of follow-up time spent housed by chronically homeless mentally ill participants in Canada's At Home/Chez Soi Housing First trial",
    source: { name: "At Home/Chez Soi Final Report, Mental Health Commission of Canada", url: "https://mentalhealthcommission.ca/resource/at-home-chez-soi-project-final-report/" },
    note: "Compared to ~40% in treatment-as-usual. Five-city RCT, n=2,148.",
  },
];

const OUTCOMES: Stat[] = [
  {
    number: ">50%",
    label: "Reduction in US veteran homelessness between 2009 and 2022",
    source: { name: "HUD AHAR + HUD-VASH program data", url: "https://www.va.gov/homeless/hud-vash.asp" },
    note: "Funded scale-up of Housing First through HUD-VASH vouchers.",
  },
  {
    number: "~60%",
    label: "Reduction in unsheltered homelessness in Houston, 2011–2022, via coordinated Housing First system",
    source: { name: "Coalition for the Homeless Houston", url: "https://www.homelesshouston.org/" },
    note: "Houston is the largest U.S. metro to have achieved sustained reductions through Built-for-Zero methodology.",
  },
  {
    number: "<50",
    label: "Chronically homeless population in Helsinki, Finland (metro pop. ~1.5M)",
    source: { name: "Y-Foundation, A Home of Your Own", url: "https://ysaatio.fi/en/asunto-ensin/housing-first" },
    note: "Finland is the only EU country where homelessness has consistently fallen. Universal Housing First plus substantial public investment in low-rent units.",
  },
];

export default function StatsPage() {
  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Research · Statistics
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          Homelessness statistics — US & Canada
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          Citable numbers for school projects, papers, and research, each with a link to the
          primary source. Always cite the primary source in your bibliography — this page is a
          starting index, not a replacement for HUD AHAR, PIT counts, or peer-reviewed work.
        </p>

        <nav className="mt-6 flex flex-wrap gap-2 text-sm">
          <a href="#headline" className="rounded-md bg-brand px-3 py-1.5 font-semibold text-white">Headline figures</a>
          <a href="#populations" className="rounded-md bg-ink px-3 py-1.5 font-semibold text-white">By population</a>
          <a href="#housing" className="rounded-md bg-accent px-3 py-1.5 font-semibold text-ink">Housing & costs</a>
          <a href="#outcomes" className="rounded-md border border-brand px-3 py-1.5 font-semibold text-brand">Program outcomes</a>
        </nav>

        <Section id="headline" title="Headline figures" stats={HEADLINE} />
        <Section id="populations" title="By population" stats={POPULATION} />
        <Section id="housing" title="Housing supply and costs" stats={HOUSING_AND_COSTS} />
        <Section id="outcomes" title="Program outcomes — what works at scale" stats={OUTCOMES} />

        <section className="mt-12 rounded-xl bg-paper p-6">
          <h2 className="text-xl font-semibold text-ink">A note on uncertainty</h2>
          <p className="mt-3 text-ink-soft">
            Most figures on this page are <em>point-in-time</em> counts — a single-night snapshot.
            They systematically undercount:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-ink-soft list-disc pl-6">
            <li>People sleeping in cars, RVs, and on private land</li>
            <li>People couch-surfing or doubled up with friends/family</li>
            <li>People in domestic-violence shelters (often counted separately)</li>
            <li>Rural homelessness, which is hard to enumerate</li>
            <li>Youth-specific homelessness, much of which is hidden</li>
          </ul>
          <p className="mt-3 text-sm text-ink-soft">
            Researchers typically estimate the <em>annual prevalence</em> of homelessness as 2–4
            times the single-night count. When citing figures, name whether they are
            <strong> point-in-time </strong> or <strong>annual prevalence</strong> — they are very
            different numbers and conflating them is the most common error in student work.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Primary sources to cite</h2>
          <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm">
            <SourceLink name="HUD AHAR — Annual Homeless Assessment Report" url="https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" />
            <SourceLink name="HUD HDX (Homelessness Data Exchange)" url="https://www.hudexchange.info/programs/hdx/" />
            <SourceLink name="NLIHC Out of Reach (US housing-wage gap)" url="https://nlihc.org/oor" />
            <SourceLink name="National Alliance to End Homelessness — State of Homelessness" url="https://endhomelessness.org/homelessness-in-america/" />
            <SourceLink name="Canadian Observatory on Homelessness — Homeless Hub" url="https://homelesshub.ca/" />
            <SourceLink name="Statistics Canada — Homelessness Data Tables" url="https://www.statcan.gc.ca/" />
            <SourceLink name="At Home/Chez Soi Final Report" url="https://mentalhealthcommission.ca/resource/at-home-chez-soi-project-final-report/" />
            <SourceLink name="VA Homeless Programs & HUD-VASH" url="https://www.va.gov/homeless/" />
            <SourceLink name="Voices of Youth Count (Chapin Hall, U Chicago)" url="https://voicesofyouthcount.org/" />
            <SourceLink name="Benioff Homelessness & Housing Initiative (UCSF, Kushel et al.)" url="https://www.benioffhomelessness.ucsf.edu/" />
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Use the data directly</h2>
          <p className="mt-2 text-ink-soft">
            You can download our shelter and resource dataset (CSV or JSON) for analysis or
            visualizations in your school project. See <Link href="/data" className="text-brand underline">/data</Link>{" "}
            for the files and a CC-BY-4.0 license.
          </p>
        </section>

        <CitationBox
          title="Homelessness statistics — US & Canada"
          url="https://homelesshelp.net/stats"
        />
      </article>
    </RailedLayout>
  );
}

function Section({
  id,
  title,
  stats,
}: {
  id: string;
  title: string;
  stats: Stat[];
}) {
  return (
    <section id={id} className="mt-12">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {stats.map((s) => (
          <li key={s.label} className="rounded-lg border border-brand-light/60 bg-white p-4">
            <p className="text-3xl font-bold text-brand">{s.number}</p>
            <p className="mt-2 text-sm text-ink">{s.label}</p>
            {s.note && <p className="mt-2 text-xs italic text-ink-muted">{s.note}</p>}
            <p className="mt-3 text-xs">
              <a
                className="text-brand underline"
                href={s.source.url}
                target="_blank"
                rel="noreferrer"
              >
                Source: {s.source.name} ↗
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SourceLink({ name, url }: { name: string; url: string }) {
  return (
    <li className="rounded-md border border-brand-light/40 bg-white p-3">
      <a className="text-brand hover:underline" href={url} target="_blank" rel="noreferrer">
        {name} ↗
      </a>
    </li>
  );
}
