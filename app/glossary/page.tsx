import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";

export const metadata = {
  title: "Glossary of homelessness terms — for students and researchers",
  description:
    "Plain-English definitions of homelessness terminology: AHAR, Continuum of Care (CoC), Point-in-Time count, Housing First, HUD-VASH, McKinney-Vento, Section 8, FQHC, SRO, and more.",
  alternates: { canonical: "/glossary" },
};

interface Term {
  term: string;
  short?: string;
  body: string;
}

const TERMS: Term[] = [
  {
    term: "AHAR",
    short: "Annual Homeless Assessment Report",
    body: "The US Department of Housing and Urban Development (HUD)'s annual report to Congress on homelessness. AHAR Part 1 covers the January Point-in-Time count and is the most-cited US national source. Part 2 covers annual prevalence (people who used a shelter at any point during the year), released later.",
  },
  {
    term: "Chronic homelessness",
    body: "HUD's technical definition: a person who has been homeless for a year or longer, or has had four or more episodes of homelessness in three years totaling at least 12 months, and has a disabling condition. About 30% of the US homeless population fits this definition — but it's the population most visible to the public.",
  },
  {
    term: "Continuum of Care (CoC)",
    body: "The regional planning body that coordinates homeless services in a given area in the US. Every US region has one. CoCs are required by HUD, run coordinated entry, and apply jointly for federal funding. There are about 380 CoCs in the US.",
  },
  {
    term: "Coordinated Entry (CE)",
    body: "The standardized intake and assessment process used by CoCs to match people to housing programs. Everyone seeking shelter beds, rapid rehousing, or supportive housing in a region should go through CE first.",
  },
  {
    term: "FQHC",
    short: "Federally Qualified Health Center",
    body: "A community-based US health center that receives federal funding to provide primary care to underserved populations. FQHCs use a sliding-scale fee structure and cannot turn patients away for inability to pay. Many embed within homeless services.",
  },
  {
    term: "HCH",
    short: "Health Care for the Homeless",
    body: "A specific HUD-Bureau of Primary Health Care program funding clinics that focus on serving people experiencing homelessness. Boston HCH is the largest and oldest.",
  },
  {
    term: "HUD",
    short: "U.S. Department of Housing and Urban Development",
    body: "The US federal agency that administers most federal homelessness funding (Continuum of Care grants, ESG, HUD-VASH). Equivalent in Canada is CMHC + provincial housing ministries.",
  },
  {
    term: "HUD-VASH",
    short: "HUD-Veterans Affairs Supportive Housing",
    body: "A joint program providing HUD housing vouchers paired with VA case management for homeless veterans. The signature Housing First veteran program; responsible for the >50% reduction in US veteran homelessness since 2009.",
  },
  {
    term: "Housing First",
    body: "The model of providing housing immediately and without prerequisites (no required sobriety, treatment compliance, or employment), then offering voluntary supportive services. Strongly evidence-based; 80-90% housing retention versus 30-50% for treatment-first programs.",
  },
  {
    term: "Homeless Hub",
    body: "The flagship Canadian homelessness research portal, run by the Canadian Observatory on Homelessness at York University. Equivalent role to HUD AHAR for Canadian data.",
  },
  {
    term: "ICH",
    short: "United States Interagency Council on Homelessness",
    body: "Federal interagency body that coordinates the US response to homelessness across 19 federal agencies. Publishes Opening Doors and similar strategic frameworks.",
  },
  {
    term: "McKinney-Vento Act",
    body: "1987 US federal law guaranteeing certain rights to children experiencing homelessness — including the right to stay enrolled in their school of origin and receive transportation, regardless of where they're temporarily sleeping. Every US school district has a homeless liaison.",
  },
  {
    term: "PIT count",
    short: "Point-in-Time count",
    body: "A required single-night census of sheltered and unsheltered homeless people conducted by every US CoC in late January. The PIT count is HUD's primary national homelessness measure but systematically undercounts hidden, doubled-up, and rural homelessness.",
  },
  {
    term: "PSH",
    short: "Permanent Supportive Housing",
    body: "Long-term housing paired with intensive, voluntary case-management services. The most evidence-backed intervention for chronic homelessness. Cost-neutral or cost-positive in most cities once emergency-services savings are accounted for.",
  },
  {
    term: "Rapid Rehousing (RRH)",
    body: "A short-term rental subsidy (typically 3-12 months) plus housing navigation, intended to quickly return people in transitional homelessness to permanent housing. The intervention with the strongest case for the majority of homeless cases.",
  },
  {
    term: "Reaching Home",
    body: "The Canadian federal homelessness strategy (2019–), administered by Infrastructure Canada. Funds community plans across designated communities and provides distinct streams for Indigenous, rural, and territorial homelessness.",
  },
  {
    term: "Section 8 / Housing Choice Voucher",
    body: "The largest US federal rental-assistance program. Tenants pay 30% of income; the voucher covers the rest up to a Fair Market Rent. Federally funded but locally administered through public housing authorities. Wait lists are typically multi-year.",
  },
  {
    term: "SRO",
    short: "Single-Room Occupancy",
    body: "A residential building where tenants rent a single room (often with shared bathroom and kitchen). SROs were once the dominant low-cost urban housing stock and were systematically demolished or converted from the 1970s onward — a major contributor to the rise of US homelessness.",
  },
  {
    term: "SSVF",
    short: "Supportive Services for Veteran Families",
    body: "A VA-funded program providing rapid rehousing, security deposits, utility-arrears help, and case management to homeless or at-risk veteran families. Often the fastest emergency intervention for a veteran in a housing crisis.",
  },
  {
    term: "Sheltered vs. unsheltered",
    body: "HUD divides the homeless count into sheltered (in an emergency shelter, transitional housing, or safe haven) and unsheltered (in places not meant for habitation — streets, cars, abandoned buildings). The unsheltered count tends to attract more public attention; the sheltered count is usually larger.",
  },
  {
    term: "Transitional housing",
    body: "Structured short-to-medium-term housing (3-24 months) with attached services. Once dominant, it has been increasingly replaced by Rapid Rehousing and PSH, which the evidence supports more strongly. Still important for specific populations (e.g., domestic-violence survivors, recently released from incarceration).",
  },
  {
    term: "Doubled up",
    body: "Living temporarily with friends or relatives due to economic hardship or housing loss. Considered homelessness under the McKinney-Vento education definition but NOT under the HUD definition for adult services. A major source of measurement disagreement.",
  },
  {
    term: "Couch surfing",
    body: "Synonym for doubled up, often used in the youth-homelessness context. Much of youth homelessness is invisible and lives in couches and floors.",
  },
  {
    term: "Chronically homeless individual / chronically homeless household",
    body: "HUD distinguishes individuals (one chronically homeless adult) from chronically homeless households (a family with at least one chronically homeless adult). Different programs prioritize differently.",
  },
  {
    term: "Built for Zero",
    body: "A coalition of cities working toward 'functional zero' homelessness (rare, brief, and one-time) using data-driven Housing First methods. Houston, Bergen County NJ, and a handful of others have achieved functional zero for veterans or chronic populations under this model.",
  },
  {
    term: "Functional zero",
    body: "A state where, for a given population, the number of people experiencing homelessness at any time is less than the average monthly housing placement rate — meaning the system can rehouse new entries faster than new entries occur. Not 'zero homeless people forever' but a stable, low equilibrium.",
  },
];

export default function GlossaryPage() {
  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Research · Glossary
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Glossary of homelessness terms</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Plain-English definitions for student papers, journalism, and policy work. Each term is
          used in our articles and on the{" "}
          <Link href="/stats" className="text-brand underline">
            statistics page
          </Link>
          .
        </p>

        <dl className="mt-10 space-y-6">
          {TERMS.map((t) => (
            <div
              key={t.term}
              id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="rounded-lg border border-brand-light/60 bg-white p-5"
            >
              <dt>
                <span className="text-xl font-semibold text-ink">{t.term}</span>
                {t.short && <span className="ml-2 text-sm text-ink-muted">— {t.short}</span>}
              </dt>
              <dd className="mt-2 text-ink-soft">{t.body}</dd>
            </div>
          ))}
        </dl>

        <CitationBox
          title="Glossary of homelessness terms"
          url="https://homelesshelp.net/glossary"
        />
      </article>
    </RailedLayout>
  );
}
