import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";

export const metadata = {
  title: "Case studies: places that have reduced homelessness",
  description:
    "Detailed studies of cities and countries that have substantially reduced homelessness — Houston, Helsinki, Bergen County NJ, US veterans, Finland nationally. What worked, what didn't, what generalized.",
  alternates: { canonical: "/case-studies" },
};

interface CaseStudy {
  id: string;
  place: string;
  scope: string;
  headline: string;
  outcome: string;
  approach: string;
  whatGeneralized: string[];
  whatDidnt: string[];
  sources: { name: string; url: string }[];
}

const CASES: CaseStudy[] = [
  {
    id: "houston",
    place: "Houston, Texas",
    scope: "Citywide chronic & general adult homelessness",
    headline: "~60% reduction in unsheltered homelessness, 2011–2022",
    outcome:
      "Approximately 25,000 people moved into permanent housing over the decade. Unsheltered count fell from over 8,500 (2011) to under 3,300 (2022). Maintained near-functional-zero for veterans for several years.",
    approach:
      "Houston unified the region's 100+ provider agencies under a single coordinated-entry system run by the Coalition for the Homeless. Adopted Housing First as the explicit citywide model. Built a coordinated 'common assessment' that placed people on a single priority list across all providers. Funded rapid rehousing aggressively for transitional cases and permanent supportive housing for chronic cases. Crucially, expanded the housing-placement pipeline to match the inflow — without this, coordinated entry just produces a longer queue.",
    whatGeneralized: [
      "Coordinated entry + a single by-names list is replicable in any large city",
      "Housing First works at metro scale, not just pilot",
      "Texas weather isn't a confound — many people thought it was; Houston's results are about the system, not the climate",
      "Public-private braided funding (HUD + city + private philanthropy + state Medicaid) is achievable",
    ],
    whatDidnt: [
      "The 'low housing-cost' starting point. Houston has more affordable rental supply than most US metros. Cities like SF or LA cannot replicate at the same pace without substantial new construction or vouchers",
      "Political continuity. Houston had remarkable cross-administration consensus that not every city has",
      "The 2023-24 increase nationally reached Houston too. Sustained progress requires sustained funding",
    ],
    sources: [
      { name: "Coalition for the Homeless of Houston", url: "https://www.homelesshouston.org/" },
      { name: "Community Solutions Built for Zero", url: "https://community.solutions/" },
      { name: "Texas State Network", url: "https://www.thn.org/" },
    ],
  },
  {
    id: "helsinki",
    place: "Helsinki, Finland",
    scope: "National chronic homelessness, replicated city-by-city",
    headline: "Chronic street homelessness functionally eliminated (~50 people in a metro of 1.5M)",
    outcome:
      "Long-term homelessness in Finland fell from over 3,000 in 2008 to under 700 by 2020. Helsinki specifically went from over 1,000 to under 50 long-term homeless people. Finland is the only EU country where homelessness has consistently fallen rather than risen over the same period.",
    approach:
      "The Y-Foundation (Y-Säätiö) bought and built apartments specifically for homeless people. Existing emergency-shelter beds were systematically converted to independent apartments. The country adopted Housing First as universal policy across cities. Healthcare, addiction, and mental-health services were attached to housing voluntarily. Crucially, the Finnish state funded the housing supply, not just service contracts — government bought roughly 7,000 apartments to put into the program.",
    whatGeneralized: [
      "Universal Housing First works at national scale, not just city scale",
      "Buying or building housing supply is the binding constraint — services don't substitute for it",
      "Outcomes hold over 15+ years, not just early-pilot years",
      "Cost-neutral or cost-positive at scale once emergency-services savings are counted",
    ],
    whatDidnt: [
      "Finland's homogeneous population, strong social safety net, and high tax base aren't easily replicated in US/Canadian contexts",
      "The starting scale was smaller than US metros — Finland's total long-term homeless count at peak was lower than LA County alone",
      "Universal housing-supply procurement at this scale is politically harder in US/Canada than it was in Finland",
    ],
    sources: [
      { name: "Y-Foundation — A Home of Your Own", url: "https://ysaatio.fi/en/asunto-ensin/housing-first" },
      { name: "Finnish Ministry of the Environment housing policy", url: "https://ym.fi/en/" },
    ],
  },
  {
    id: "bergen",
    place: "Bergen County, New Jersey",
    scope: "Chronic homelessness, then veteran homelessness",
    headline: "First US Continuum of Care to reach 'functional zero' for chronic homelessness (2017)",
    outcome:
      "Reduced chronic homelessness to a state where the number of people experiencing it at any time is below the average monthly placement rate. Has sustained the achievement through 2024. Veteran homelessness also at functional zero. Total unsheltered counts remain low.",
    approach:
      "Bergen joined the Community Solutions Built for Zero collaborative in 2015. Built a real-time by-names list of every person experiencing chronic homelessness in the county. Met biweekly to review the list and assign each person to a housing placement. Standardized intake across all county providers. Used existing federal vouchers (HUD-VASH, SHP, Section 8) more efficiently rather than relying on new funding.",
    whatGeneralized: [
      "By-names lists work — they convert 'the homelessness problem' into specific people with specific needs",
      "Operational discipline (biweekly review of every person) matters as much as funding",
      "A medium-size county (~900K population) can move fast in ways large cities cannot",
      "Existing federal voucher programs can carry significant load when administered efficiently",
    ],
    whatDidnt: [
      "Scale. Bergen has a population of ~900K and a relatively small homeless count to begin with. Larger metros have more sources of inflow",
      "Bergen has higher housing costs than many US counties but is wealthier than most — that combination is rare",
      "Functional-zero is not 'zero homelessness ever' — it's a stable equilibrium. New inflows are absorbed quickly, not prevented",
    ],
    sources: [
      { name: "Built for Zero (Community Solutions)", url: "https://community.solutions/" },
      { name: "Housing, Health and Human Services of Bergen County", url: "https://www.bergencountynj.gov/health-services/housing-health-and-human-services" },
    ],
  },
  {
    id: "us-veterans",
    place: "United States — veteran population",
    scope: "National veteran homelessness",
    headline: ">50% reduction in US veteran homelessness, 2009–2022 (~75,000 → ~33,000)",
    outcome:
      "The largest sustained reduction of any homeless subpopulation in modern US history. Approximately 14 individual cities reached functional zero for veteran homelessness during this period. Veteran homelessness ticked up slightly in 2023-24 but remains far below the 2009 baseline.",
    approach:
      "The VA committed publicly to ending veteran homelessness and matched the commitment with sustained funding for HUD-VASH (HUD voucher + VA case management) and SSVF (Supportive Services for Veteran Families). The model is explicitly Housing First: low barriers to entry, voluntary services. Veterans were prioritized for vouchers and given dedicated case management. The combination of a single primary payer (VA), a clear target population, and bipartisan political support made it the most-funded homelessness intervention in US history.",
    whatGeneralized: [
      "Housing First works at federal scale, not just city scale",
      "Sustained, predictable funding produces sustained, predictable results — the model didn't change, the appropriations did",
      "Dedicated case management paired with portable vouchers is replicable in any system that can fund both",
      "Bipartisan support is possible when the framing centers a sympathetic population (veterans). The same approach for general homelessness faces more political headwinds",
    ],
    whatDidnt: [
      "Generalizing the funding scale. The US spent roughly $1B-$2B/year on veteran-specific homelessness during the peak years. General homeless funding is a small fraction of that",
      "The single-payer simplicity. The VA owns its veterans' care; no other US population has that",
      "Political durability. The 2023-24 uptick coincided with reduced HUD-VASH issuance — sustained progress requires sustained funding",
    ],
    sources: [
      { name: "VA HUD-VASH Program", url: "https://www.va.gov/homeless/hud-vash.asp" },
      { name: "HUD AHAR Part 1, 2022/2023", url: "https://www.huduser.gov/portal/datasets/ahar.html" },
      { name: "National Coalition for Homeless Veterans", url: "https://nchv.org/" },
    ],
  },
  {
    id: "utah-mid-2010s",
    place: "Utah",
    scope: "Chronic homelessness",
    headline: "Widely reported ~90% reduction in chronic homelessness (2005–2015)",
    outcome:
      "Utah's reported chronic-homelessness count fell from ~2,000 to ~200 over a decade, becoming the most-cited US Housing First success story of the 2010s. Later analyses showed the reduction was real but partial — definitional changes accounted for some of the drop, and the gains were not sustained after funding shifted in the late 2010s. Chronic homelessness in Utah has risen substantially since 2018.",
    approach:
      "Utah used the HUD chronic-homelessness definition rigorously and prioritized this population for supportive housing. The Pamela Atkinson Trust and other private donors supplemented public funds. State leadership was unusually consistent. Lloyd Pendleton, the program's architect, became a national-circuit speaker on the model.",
    whatGeneralized: [
      "Housing First can produce dramatic single-decade reductions if funded and politically backed",
      "Private-public funding hybrids can move faster than purely public programs",
    ],
    whatDidnt: [
      "Sustainability. The reduction was reversed in the late 2010s when funding shifted and the housing-supply pipeline didn't keep up",
      "The headline number. Some of the drop was a definitional change (people moved from 'chronic' to other categories), not actual housing",
      "The narrative. Utah was often presented as having 'ended chronic homelessness' — it didn't, even at peak. The reduction was real but never quite reached the headline claim",
    ],
    sources: [
      { name: "Utah State Office of Homeless Services", url: "https://jobs.utah.gov/housing/homeless/" },
      { name: "Critical analysis: National Alliance to End Homelessness", url: "https://endhomelessness.org/" },
    ],
  },
  {
    id: "rockford",
    place: "Rockford, Illinois",
    scope: "Chronic and veteran homelessness",
    headline: "First US city to reach functional zero for both veteran and chronic homelessness (2017)",
    outcome:
      "Mid-size Illinois city reduced chronic homelessness to functional zero in 2017. Sustained for several years through coordinated entry, by-names list, and aggressive use of HUD-VASH and ESG funding.",
    approach:
      "Same Built for Zero methodology as Bergen County, applied to a mid-size midwestern city. Demonstrated the model works outside high-cost coastal metros.",
    whatGeneralized: [
      "The Built for Zero methodology is portable across geographies and city sizes",
      "Low-cost housing markets help, but not as much as people assume — the methodology is the active ingredient",
    ],
    whatDidnt: [
      "Pandemic-era pressures partially reversed the gains by 2022. Maintaining functional zero requires continuous operational discipline",
    ],
    sources: [
      { name: "Built for Zero", url: "https://community.solutions/" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Research · Case studies
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          Places that have reduced homelessness — and how
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          Six case studies of cities and countries that have substantially reduced homelessness
          over the last 15-20 years. Each is included because the reduction was real, measured,
          and sustained — or because the experience teaches a useful lesson about why
          sustainability is hard. Designed for student research, policy work, and journalism.
        </p>

        <nav className="mt-6 flex flex-wrap gap-2 text-sm">
          {CASES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-brand-light/60 bg-white px-3 py-1 hover:border-brand"
            >
              {c.place} →
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-12">
          {CASES.map((c) => (
            <section key={c.id} id={c.id} className="rounded-2xl border border-brand-light/60 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.scope}</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">{c.place}</h2>
              <p className="mt-2 text-lg font-semibold text-brand-dark">{c.headline}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Block label="Outcome" body={c.outcome} />
                <Block label="Approach" body={c.approach} />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <List label="What generalized" items={c.whatGeneralized} tone="brand" />
                <List label="What didn't" items={c.whatDidnt} tone="danger" />
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Sources
                </p>
                <ul className="mt-1 flex flex-wrap gap-3 text-sm">
                  {c.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        className="text-brand underline"
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {s.name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-xl bg-paper p-6">
          <h2 className="text-xl font-semibold text-ink">What the case studies have in common</h2>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li>
              <strong className="text-ink">Housing First, not treatment-first.</strong> Every
              place above adopted the Housing First model explicitly. None succeeded with a
              sobriety-required or treatment-required precondition for housing.
            </li>
            <li>
              <strong className="text-ink">A by-names list.</strong> Each system tracked specific
              individuals — not aggregate counts — and reviewed the list regularly.
            </li>
            <li>
              <strong className="text-ink">Coordinated entry.</strong> Every place above unified
              intake across all providers in the region.
            </li>
            <li>
              <strong className="text-ink">A real housing pipeline.</strong> The most consistent
              constraint is housing supply at the low end. Helsinki bought units. Houston used
              existing low-cost market plus vouchers. Utah's reversal happened when supply lagged.
            </li>
            <li>
              <strong className="text-ink">Sustained funding.</strong> Every reversal in the
              examples above tracks to a funding change. The model works when it's resourced.
            </li>
            <li>
              <strong className="text-ink">Political continuity.</strong> Cross-administration
              consensus is the unsexy ingredient. Programs that survive elections survive.
            </li>
          </ul>
        </section>

        <CitationBox
          title="Case studies: places that have reduced homelessness"
          url="https://homelesshelp.net/case-studies"
        />
      </article>
    </RailedLayout>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</p>
      <p className="mt-1 text-ink-soft">{body}</p>
    </div>
  );
}

function List({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "brand" | "danger";
}) {
  return (
    <div
      className={
        "rounded-lg p-4 " +
        (tone === "brand" ? "bg-brand-light/30" : "bg-danger/10")
      }
    >
      <p
        className={
          "text-xs font-semibold uppercase tracking-wider " +
          (tone === "brand" ? "text-brand-dark" : "text-danger")
        }
      >
        {label}
      </p>
      <ul className="mt-2 space-y-1 text-sm text-ink-soft">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
