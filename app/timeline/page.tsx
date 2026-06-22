import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";

export const metadata = {
  title: "Timeline of homelessness in North America (1980–present)",
  description:
    "A timeline of the modern history of homelessness in the US and Canada — from the rise of mass homelessness in the 1980s through Housing First, McKinney-Vento, and the present-day surge. Citable for student research.",
  alternates: { canonical: "/timeline" },
};

interface Event {
  year: string;
  title: string;
  body: string;
  source?: { name: string; url: string };
}

const EVENTS: Event[] = [
  {
    year: "1955–1980",
    title: "Deinstitutionalization of state psychiatric hospitals",
    body: "The US state-hospital census falls from ~559,000 patients in 1955 to under 130,000 by 1980. Community mental-health funding does not scale to replace the closed beds. Many people with severe mental illness end up unhoused over the following decades — though housing-cost increases turn out to be the larger driver of mass homelessness when it begins.",
  },
  {
    year: "1970s",
    title: "SRO hotels demolished or converted across US cities",
    body: "Roughly 1 million Single-Room Occupancy units — the bottom rung of the rental ladder — are lost in major US cities between 1970 and 1990 to urban renewal, conversion to condos, and code enforcement. This is the single largest documented destruction of low-cost housing in modern US history, and a primary driver of the visible homelessness that follows.",
  },
  {
    year: "1980–1983",
    title: "Federal housing assistance cut by ~60% under the Reagan administration",
    body: "HUD's budget authority is cut from $32B to about $13B in real terms over three years. The federal share of low-income housing development collapses. Mass street homelessness — virtually unknown since the Great Depression — appears in US cities for the first time.",
    source: { name: "Joint Center for Housing Studies (Harvard)", url: "https://www.jchs.harvard.edu/" },
  },
  {
    year: "1987",
    title: "Stewart B. McKinney Homeless Assistance Act signed",
    body: "First major US federal legislation specifically addressing homelessness. Establishes emergency food/shelter funding, school-stability protections for homeless children (later strengthened to McKinney-Vento), and a basic federal framework for homelessness services that persists today.",
    source: { name: "Title 42 — McKinney-Vento Act", url: "https://www.law.cornell.edu/uscode/text/42/chapter-119" },
  },
  {
    year: "1992",
    title: "Pathways Housing First founded in New York",
    body: "Sam Tsemberis founds Pathways to Housing in NYC, pioneering the Housing First model: permanent housing without preconditions, supportive services voluntary. The model later becomes the international gold standard.",
    source: { name: "Pathways Housing First", url: "https://www.pathwayshousingfirst.org/" },
  },
  {
    year: "1995–2005",
    title: "Continuum of Care framework formalized",
    body: "HUD requires regional 'Continuum of Care' planning bodies to coordinate homeless services and apply for federal funding. By the mid-2000s, every US region has one. This structure persists into the present.",
  },
  {
    year: "2007",
    title: "First HUD Annual Homeless Assessment Report (AHAR) to Congress",
    body: "HUD publishes its first AHAR with national point-in-time and annual-prevalence figures. This becomes the standard US national dataset and the most-cited US homelessness source.",
    source: { name: "HUD AHAR archive", url: "https://www.huduser.gov/portal/datasets/ahar.html" },
  },
  {
    year: "2008–2010",
    title: "Great Recession and ARRA homelessness response",
    body: "The 2008 financial crisis produces a wave of evictions and homelessness. The American Recovery and Reinvestment Act includes $1.5B for the Homelessness Prevention and Rapid Re-Housing Program, the first major US federal Rapid Rehousing investment.",
  },
  {
    year: "2009",
    title: "US veteran homelessness peaks at ~75,000",
    body: "The Obama administration commits to ending veteran homelessness. HUD-VASH (HUD voucher + VA case management) scales up rapidly. Veteran homelessness becomes the test case for Housing First at federal scale.",
    source: { name: "HUD AHAR + VA HUD-VASH program data", url: "https://www.va.gov/homeless/hud-vash.asp" },
  },
  {
    year: "2010",
    title: "Opening Doors federal strategic plan",
    body: "First-ever US federal strategic plan to end homelessness. Sets specific goals (end chronic and veteran homelessness by 2015; end youth and family homelessness by 2020). Goals are missed but the framework shapes policy through the 2010s.",
    source: { name: "USICH archive", url: "https://www.usich.gov/" },
  },
  {
    year: "2013",
    title: "Mental Health Commission of Canada publishes At Home/Chez Soi findings",
    body: "Five-city Canadian RCT with 2,148 chronically homeless people with mental illness. Housing First group spends ~75% of follow-up time housed vs ~40% in usual care. The single largest piece of Housing First evidence in the world. Reshapes Canadian federal policy.",
    source: { name: "At Home/Chez Soi Final Report", url: "https://mentalhealthcommission.ca/resource/at-home-chez-soi-project-final-report/" },
  },
  {
    year: "2015",
    title: "New Orleans declares end of veteran homelessness",
    body: "First US city to reach 'functional zero' for veteran homelessness under the Built for Zero methodology. Demonstrates the model can work at city scale.",
  },
  {
    year: "2019",
    title: "Canada's Reaching Home strategy launches",
    body: "Federal Canadian homelessness strategy with explicit Indigenous, rural, and territorial streams. Distributes funding through community entities (analogous to US CoCs) and adopts Built for Zero as a partner framework.",
    source: { name: "Reaching Home — Government of Canada", url: "https://www.canada.ca/en/employment-social-development/programs/homelessness.html" },
  },
  {
    year: "2020",
    title: "COVID-19 prompts emergency-shelter hotel programs",
    body: "Many US and Canadian cities move shelter beds into hotel rooms to enable distancing. The unintended natural experiment — private rooms with on-site services — produces unusually good housing-stability outcomes, accelerating interest in non-congregate sheltering.",
  },
  {
    year: "2022",
    title: "US veteran homelessness reaches lowest point on record (~33,000)",
    body: "More than 50% reduction from the 2009 peak — the largest sustained reduction in any homeless subpopulation in modern history. Demonstrates that Housing First works at scale when funded.",
    source: { name: "HUD AHAR, 2022", url: "https://www.huduser.gov/portal/datasets/ahar.html" },
  },
  {
    year: "2023",
    title: "US homelessness rises 12% in one year — largest increase since AHAR began",
    body: "PIT count reaches ~653,100. Rises across nearly every subpopulation except veterans. Researchers attribute the spike to rent inflation, end of pandemic-era assistance, and the structural housing-supply shortage.",
    source: { name: "HUD AHAR Part 1, 2023", url: "https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" },
  },
  {
    year: "2024",
    title: "Grants Pass v. Johnson — US Supreme Court allows criminalization of public sleeping",
    body: "The Court overturns prior precedent (Martin v. Boise) and rules that cities may criminalize sleeping outside even when no shelter is available. Encampment-sweep activity increases in many US cities; the policy effectiveness debate intensifies.",
    source: { name: "Grants Pass v. Johnson — SCOTUSblog", url: "https://www.scotusblog.com/" },
  },
  {
    year: "Today",
    title: "The choice ahead",
    body: "The evidence base for Housing First has not changed. The political question is whether US and Canadian governments will fund it at the scale required to bend the curve back down — as Finland, Houston, and the US Department of Veterans Affairs have demonstrated is possible. Or whether the next phase is more enforcement and a higher equilibrium. See our article on what actually works.",
    source: { name: "What actually works — HomelessHelp", url: "/learn/what-actually-works" },
  },
];

export default function TimelinePage() {
  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Research · Timeline
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          A timeline of homelessness in North America
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          The modern history of US and Canadian homelessness from 1980 to the present. Useful as
          background for student papers and policy work — each entry links to the primary source
          where one exists.
        </p>

        <ol className="mt-12 relative space-y-10 border-l-2 border-brand-light/60 pl-6">
          {EVENTS.map((e, i) => (
            <li key={e.year + e.title} className="relative">
              <span className="absolute -left-[35px] mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {e.year}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-ink">{e.title}</h2>
              <p className="mt-2 text-ink-soft">{e.body}</p>
              {e.source && (
                <p className="mt-2 text-xs">
                  {e.source.url.startsWith("/") ? (
                    <Link href={e.source.url} className="text-brand underline">
                      {e.source.name} →
                    </Link>
                  ) : (
                    <a
                      className="text-brand underline"
                      href={e.source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {e.source.name} ↗
                    </a>
                  )}
                </p>
              )}
            </li>
          ))}
        </ol>

        <CitationBox
          title="Timeline of homelessness in North America"
          url="https://homelesshelp.net/timeline"
        />
      </article>
    </RailedLayout>
  );
}
