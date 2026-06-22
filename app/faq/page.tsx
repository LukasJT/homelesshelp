import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";

export const metadata = {
  title: "FAQ — homelessness facts, citations, and how to use this site",
  description:
    "Answers to common questions about homelessness for students, journalists, volunteers, and people new to the topic — citation guidance, PIT vs annual prevalence, how to cite this site, and more.",
  alternates: { canonical: "/faq" },
};

interface QA {
  q: string;
  a: React.ReactNode;
}

const QAS: QA[] = [
  {
    q: "How many people are experiencing homelessness in the US right now?",
    a: (
      <>
        About <strong>653,100</strong> on a single night per the most recent HUD AHAR (January
        2023). The same year's annual prevalence is several times higher because people cycle
        through the system. The PIT count is the most-cited figure but it undercounts couch-
        surfing, doubled-up, hidden, and rural homelessness.{" "}
        <Link href="/stats" className="text-brand underline">See full stats</Link>.
      </>
    ),
  },
  {
    q: "How many people are experiencing homelessness in Canada?",
    a: (
      <>
        Annual prevalence in Canada is estimated at <strong>~235,000</strong> per the Canadian
        Observatory on Homelessness's State of Homelessness reports. Single-night counts are
        much lower but uneven across provinces because Canada doesn't conduct a coordinated
        national PIT the way HUD does in the US.
      </>
    ),
  },
  {
    q: "What's the difference between a Point-in-Time count and annual prevalence?",
    a: (
      <>
        A <strong>Point-in-Time (PIT) count</strong> is a single-night census of sheltered and
        unsheltered homeless people, conducted by every US CoC in January.{" "}
        <strong>Annual prevalence</strong> is the total number of people who experienced
        homelessness at any point during a full year. Annual prevalence is typically 2-4x the
        PIT figure. Mixing these up is the single most common error in news coverage and
        student papers.{" "}
        <Link href="/glossary#pit-count" className="text-brand underline">
          Glossary entry
        </Link>
        .
      </>
    ),
  },
  {
    q: "Why is homelessness rising in 2023-2024?",
    a: (
      <>
        Multiple factors. The largest are: (1) rent inflation outstripping wages — by 2023, rents
        had risen ~25% from 2019 levels while incomes lagged; (2) the end of pandemic-era
        emergency rental assistance and the eviction moratorium; (3) the structural housing-
        supply shortage at the low end of the market (NLIHC estimates the US is short ~7M units
        affordable to extremely low-income renters). Substance use and mental illness are
        contributing factors for some people but are not the macroscopic drivers.{" "}
        <Link href="/learn/causes-of-homelessness" className="text-brand underline">
          See: causes
        </Link>
        .
      </>
    ),
  },
  {
    q: "How do I cite this site in an academic paper?",
    a: (
      <>
        Every article has a "How to cite this page" box at the bottom with APA, MLA, and Chicago
        formats — click to copy. For statistics, please cite the underlying primary source (HUD
        AHAR, NLIHC, At Home/Chez Soi, etc.) rather than us — those are listed at each figure on
        the <Link href="/stats" className="text-brand underline">stats page</Link>. Citing
        primary sources is academic best practice. Citing us is appropriate for our analysis or
        framing, but rarely for raw numbers.
      </>
    ),
  },
  {
    q: "Can I use the shelter dataset for a school or research project?",
    a: (
      <>
        Yes. The dataset is released under{" "}
        <a
          className="text-brand underline"
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noreferrer"
        >
          CC-BY-4.0
        </a>
        . Download CSV or JSON from <Link href="/data" className="text-brand underline">/data</Link>.
        Suggested attribution: "HomelessHelp.net shelter dataset, CC-BY-4.0, retrieved from
        homelesshelp.net/data."
      </>
    ),
  },
  {
    q: "Why is the homeless population in [my state / city] so different from neighbors?",
    a: (
      <>
        Three main factors typically explain interstate variation: (1) housing-cost gap (the
        biggest by far), (2) climate (warm-weather cities have higher unsheltered counts), and
        (3) state/local policy (right-to-shelter states like NY and MA have higher sheltered
        counts because they're legally required to provide shelter). See our{" "}
        <Link href="/states" className="text-brand underline">by-state overview</Link> for
        ranked numbers and program notes.
      </>
    ),
  },
  {
    q: "Is most homelessness chronic? Are these the people I see on the street?",
    a: (
      <>
        No. About <strong>10% of homelessness is chronic</strong> — people who have been homeless
        a year or longer, or have had four episodes in three years and have a disabling
        condition. The other ~90% is transitional (one short episode, returns to housing) or
        episodic (cycling). The chronically homeless are the population most visible to the
        public — but they're a minority of total cases.{" "}
        <Link href="/learn/types-of-homelessness" className="text-brand underline">
          See: types of homelessness
        </Link>
        .
      </>
    ),
  },
  {
    q: "Is mental illness the main cause of homelessness?",
    a: (
      <>
        No. About 20-25% of homeless adults have a serious mental illness — higher than the
        general population but a minority overall. Many cases of mental illness in the
        homeless population are <em>made worse by</em> homelessness, not the cause of it. The
        structural drivers are housing costs and wages.{" "}
        <Link href="/learn/mental-illness-and-homelessness" className="text-brand underline">
          See: mental illness and homelessness
        </Link>
        .
      </>
    ),
  },
  {
    q: "What's Housing First and does it actually work?",
    a: (
      <>
        Housing First is the model of providing permanent housing immediately, without
        preconditions like sobriety or treatment compliance, then offering supportive services
        voluntarily. Multiple RCTs (Tsemberis 2004, At Home/Chez Soi 2014) and meta-analyses
        find 12-month housing retention of 80-90% in Housing First versus 30-50% in treatment-
        first programs.{" "}
        <Link href="/learn/what-actually-works" className="text-brand underline">
          See: what actually works
        </Link>
        .
      </>
    ),
  },
  {
    q: "Why did US veteran homelessness fall so much?",
    a: (
      <>
        The VA scaled up the HUD-VASH program (HUD housing voucher + VA case management) on a
        Housing First model starting around 2009. Veteran homelessness fell from ~75,000 to
        ~33,000 by 2022 — the largest sustained reduction in any homeless subpopulation in
        modern US history. The same approach works for the general population, but has not been
        funded at comparable scale.
      </>
    ),
  },
  {
    q: "Do encampment sweeps reduce homelessness?",
    a: (
      <>
        The aggregate evidence says no. Sweeps displace people but don't house them; multi-city
        studies find no measurable reduction in city homelessness rates, and 2023 research
        showed associations with increased mortality. They are politically popular and
        empirically ineffective. The cities that have actually reduced visible homelessness
        (Houston, Helsinki) did so via Housing First placements, not enforcement.{" "}
        <Link href="/learn/encampments-and-sweeps" className="text-brand underline">
          See: encampments and sweeps
        </Link>
        .
      </>
    ),
  },
  {
    q: "Does HomelessHelp accept donations?",
    a: (
      <>
        No. We don't accept donations, process payments, or take a cut of donations made to
        other charities. Every charity link on the site goes directly to that organization's
        own page.{" "}
        <Link href="/about" className="text-brand underline">More about who we are</Link>.
      </>
    ),
  },
  {
    q: "Is the information here current?",
    a: (
      <>
        It's best-effort, not real-time. Shelter information goes out of date constantly — hours
        change, organizations move. We update listings when readers flag issues. Always{" "}
        <strong>call ahead</strong> using the phone number on each listing before traveling to a
        shelter. For live bed availability, call <strong>211</strong>.
      </>
    ),
  },
  {
    q: "I'm a teacher / professor — can I use these articles in my class?",
    a: (
      <>
        Yes, free to use with attribution. Articles are CC-BY-4.0. The dataset is also CC-BY-4.0
        for student data projects. See the "For educators" section on the{" "}
        <Link href="/research" className="text-brand underline">
          research hub
        </Link>{" "}
        for suggested classroom uses.
      </>
    ),
  },
  {
    q: "How can I get involved beyond reading?",
    a: (
      <>
        Three best paths: (1) <Link href="/volunteer" className="text-brand underline">volunteer
        near you</Link> — type your city to find shelters that take volunteers; (2){" "}
        <Link href="/help-out#donate" className="text-brand underline">donate effectively</Link>{" "}
        to evidence-based organizations; (3) advocate at the local level for housing supply and
        Housing First funding. See our <Link href="/learn/homelessness-in-your-hometown" className="text-brand underline">DIY local research guide</Link>.
      </>
    ),
  },
  {
    q: "I found incorrect information — how do I report it?",
    a: (
      <>
        Open the resource page and click "Report it" in the bottom callout, or go directly to{" "}
        <Link href="/submit" className="text-brand underline">/submit</Link>. We process reports
        within about a week.
      </>
    ),
  },
];

export default function FAQPage() {
  // JSON-LD FAQ structured data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QAS.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: {
        "@type": "Answer",
        // Strip the rich React content for JSON-LD by approximating with the question
        // (Real answer text would require more conversion logic — but FAQ markup helps
        // Google understand the page is Q&A even with a brief answer.)
        text: "See the full answer at https://homelesshelp.net/faq",
      },
    })),
  };

  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Frequently asked questions
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          FAQ — homelessness, citations, and using this site
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          Common questions from students, journalists, volunteers, and people new to the topic.
          Each answer links to the article or source where you can dig deeper.
        </p>

        <dl className="mt-10 space-y-6">
          {QAS.map((qa, i) => (
            <div
              key={i}
              id={`q-${i + 1}`}
              className="rounded-xl border border-brand-light/60 bg-white p-5"
            >
              <dt className="text-lg font-semibold text-ink">{qa.q}</dt>
              <dd className="mt-2 text-ink-soft">{qa.a}</dd>
            </div>
          ))}
        </dl>

        <CitationBox title="FAQ — homelessness facts and citations" url="https://homelesshelp.net/faq" />
      </article>
    </RailedLayout>
  );
}
