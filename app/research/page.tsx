import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";
import { getAllArticleMeta } from "@/lib/articles";

export const metadata = {
  title: "Research hub — homelessness data and reading for students",
  description:
    "Resources for students and researchers writing about homelessness: citable statistics, primary-source links, glossary, recommended academic reading, a downloadable dataset, and citation formats.",
  alternates: { canonical: "/research" },
};

interface Book {
  title: string;
  author: string;
  year: number;
  why: string;
  url?: string;
}

const BOOKS: Book[] = [
  {
    title: "Evicted: Poverty and Profit in the American City",
    author: "Matthew Desmond",
    year: 2016,
    why: "Pulitzer-winning ethnographic study of eviction in Milwaukee. The definitive popular work on how housing instability becomes homelessness.",
    url: "https://www.evictedbook.com/",
  },
  {
    title: "Helping America's Homeless",
    author: "Martha R. Burt et al.",
    year: 2001,
    why: "Earlier but still-influential overview of US homeless services and program effectiveness.",
  },
  {
    title: "Housing First: Ending Homelessness, Transforming Systems, and Changing Lives",
    author: "Sam Tsemberis",
    year: 2010,
    why: "By the originator of the Housing First model. Direct primary source for the intervention.",
    url: "https://www.pathwayshousingfirst.org/",
  },
  {
    title: "Down and Out, on the Road: The Homeless in American History",
    author: "Kenneth L. Kusmer",
    year: 2002,
    why: "Historical perspective on US homelessness from the late 1800s through the 1980s rise of mass homelessness.",
  },
  {
    title: "Skid Row in American Imagination",
    author: "Christopher G. Hudson",
    year: 1998,
    why: "How the cultural image of homelessness diverges from the actual demographics.",
  },
  {
    title: "Tent City Urbanism",
    author: "Andrew Heben",
    year: 2014,
    why: "Architectural and policy perspective on tent cities and tiny-home villages.",
    url: "https://andrewheben.com/",
  },
  {
    title: "The Homelessness Industry: A Critique of US Social Policy",
    author: "Erin O'Sullivan Oliphant",
    year: 2018,
    why: "Critical analysis of how 'homeless services' as a sector can perpetuate the problem it aims to solve.",
  },
  {
    title: "Toxic Inequality",
    author: "Thomas Shapiro",
    year: 2017,
    why: "Broader context on US wealth and racial inequality, with a chapter on housing precarity.",
  },
];

interface Paper {
  title: string;
  authors: string;
  venue: string;
  url: string;
  takeaway: string;
}

const PAPERS: Paper[] = [
  {
    title: "Housing First, Consumer Choice, and Harm Reduction for Homeless Individuals With a Dual Diagnosis",
    authors: "Tsemberis, S., Gulcur, L., & Nakae, M.",
    venue: "American Journal of Public Health, 2004",
    url: "https://pubmed.ncbi.nlm.nih.gov/15117004/",
    takeaway: "Foundational Pathways Housing First RCT. Demonstrated housing stability without sobriety preconditions.",
  },
  {
    title: "At Home/Chez Soi Project Final Report",
    authors: "Mental Health Commission of Canada (Goering et al.)",
    venue: "Mental Health Commission of Canada, 2014",
    url: "https://mentalhealthcommission.ca/resource/at-home-chez-soi-project-final-report/",
    takeaway: "Largest Housing First RCT (n=2,148) across five Canadian cities. Persistent positive effects on housing tenure.",
  },
  {
    title: "Effectiveness of Critical Time Intervention for Abating Subsequent Homelessness in Patients With Mental Illness",
    authors: "Susser, E. et al.",
    venue: "American Journal of Public Health, 1997",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1380959/",
    takeaway: "Demonstrated effectiveness of intensive, time-limited transition support.",
  },
  {
    title: "Aging and Homelessness",
    authors: "Margot Kushel et al.",
    venue: "UCSF Benioff Homelessness & Housing Initiative (ongoing)",
    url: "https://www.benioffhomelessness.ucsf.edu/",
    takeaway: "Ongoing longitudinal research on the aging US homeless population — most-cited work on senior homelessness.",
  },
  {
    title: "Voices of Youth Count — National Estimate",
    authors: "Morton, M.H. et al.",
    venue: "Chapin Hall at the University of Chicago, 2018",
    url: "https://voicesofyouthcount.org/brief/national-estimates-of-youth-homelessness/",
    takeaway: "Most cited US source for youth homelessness prevalence and characteristics.",
  },
  {
    title: "The Cost of Homelessness: A Systematic Review",
    authors: "Various; see Built for Zero working papers",
    venue: "Community Solutions / multiple",
    url: "https://community.solutions/",
    takeaway: "Aggregates cost studies showing housing is cheaper than letting chronic homelessness persist.",
  },
];

export default function ResearchPage() {
  const articles = getAllArticleMeta();

  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">For students & researchers</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Research hub</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Writing a paper, a thesis, or a class assignment on homelessness? Start here. We have
          citable statistics, primary-source links, a glossary, recommended academic reading, and
          a downloadable dataset you can analyze for your project.
        </p>

        <nav className="mt-6 flex flex-wrap gap-2 text-sm">
          <Link href="/stats" className="rounded-md bg-brand px-3 py-1.5 font-semibold text-white">
            Statistics →
          </Link>
          <Link href="/states" className="rounded-md bg-brand px-3 py-1.5 font-semibold text-white">
            By state/province →
          </Link>
          <Link href="/timeline" className="rounded-md bg-ink px-3 py-1.5 font-semibold text-white">
            Timeline →
          </Link>
          <Link href="/glossary" className="rounded-md bg-ink px-3 py-1.5 font-semibold text-white">
            Glossary →
          </Link>
          <Link href="/data" className="rounded-md bg-accent px-3 py-1.5 font-semibold text-ink">
            Download dataset →
          </Link>
          <a href="#sources" className="rounded-md border border-brand px-3 py-1.5 font-semibold text-brand">
            Primary sources
          </a>
          <a href="#reading" className="rounded-md border border-brand px-3 py-1.5 font-semibold text-brand">
            Recommended reading
          </a>
        </nav>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">How to use this site for a school project</h2>
          <ol className="mt-3 space-y-3 list-decimal pl-6 text-ink-soft">
            <li>
              <strong className="text-ink">Read the relevant background article</strong> in our{" "}
              <Link href="/learn" className="text-brand underline">Learn section</Link>. Each
              article is plain-language but evidence-based and links to the primary research it
              draws on.
            </li>
            <li>
              <strong className="text-ink">Pull citable numbers from the{" "}
                <Link href="/stats" className="text-brand underline">statistics page</Link></strong>,
              and cite the original source listed there (HUD AHAR, PIT count, NLIHC, At Home/Chez
              Soi, etc.) — not us. Citing primary sources is best practice.
            </li>
            <li>
              <strong className="text-ink">Use the{" "}
                <Link href="/glossary" className="text-brand underline">glossary</Link></strong>{" "}
              to make sure you're using terms correctly. Mixing up "chronic" and "unsheltered"
              homelessness in a paper is the most common student error.
            </li>
            <li>
              <strong className="text-ink">Download the dataset</strong> if you want to do a maps
              or analysis project — <Link href="/data" className="text-brand underline">/data</Link>{" "}
              has the full directory in CSV and JSON formats under a CC-BY-4.0 license.
            </li>
            <li>
              <strong className="text-ink">Cite this site</strong> when you use our content
              directly (an article's framing, our analysis, the dataset). Each article has a "How
              to cite this page" widget with APA, MLA, and Chicago formats. Click to copy.
            </li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Featured articles for student research</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${a.slug}`}
                  className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                    {a.category}
                  </p>
                  <p className="mt-1 font-semibold text-ink">{a.title}</p>
                  <p className="mt-1 text-xs text-ink-muted">{a.readMinutes} min read</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="sources" className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Primary sources to cite</h2>
          <p className="mt-2 text-ink-soft">
            The bedrock data and policy sources. Use these directly in your bibliography wherever
            possible.
          </p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2 text-sm">
            <Source name="HUD AHAR (Annual Homeless Assessment Report)" url="https://www.huduser.gov/portal/sites/default/files/pdf/2023-AHAR-Part-1.pdf" desc="US national homelessness data, annual." />
            <Source name="HUD HDX (Homelessness Data Exchange)" url="https://www.hudexchange.info/programs/hdx/" desc="Underlying CoC-level US data." />
            <Source name="NLIHC Out of Reach" url="https://nlihc.org/oor" desc="Housing-wage gap, annual, by state and metro." />
            <Source name="National Alliance to End Homelessness" url="https://endhomelessness.org/homelessness-in-america/" desc="State of Homelessness analyses with citable summaries." />
            <Source name="Homeless Hub (Canadian Observatory on Homelessness)" url="https://homelesshub.ca/" desc="Largest Canadian research portal; State of Homelessness reports." />
            <Source name="Statistics Canada — Homelessness" url="https://www.statcan.gc.ca/" desc="Federal Canadian homelessness statistics." />
            <Source name="VA Homeless Programs & HUD-VASH" url="https://www.va.gov/homeless/" desc="US veteran homelessness data and program documentation." />
            <Source name="Voices of Youth Count (Chapin Hall)" url="https://voicesofyouthcount.org/" desc="Most-cited US youth homelessness research." />
            <Source name="UCSF Benioff Homelessness & Housing Initiative" url="https://www.benioffhomelessness.ucsf.edu/" desc="Kushel et al. — leading aging-population research." />
            <Source name="At Home/Chez Soi Final Report" url="https://mentalhealthcommission.ca/resource/at-home-chez-soi-project-final-report/" desc="Largest Housing First randomized trial." />
            <Source name="Built for Zero (Community Solutions)" url="https://community.solutions/" desc="Coordinated data-driven Housing First scale-up methodology." />
            <Source name="National Coalition for Homeless Veterans" url="https://nchv.org/" desc="Veteran-specific advocacy and statistics." />
          </ul>
        </section>

        <section id="reading" className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Recommended books</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {BOOKS.map((b) => (
              <li key={b.title} className="rounded-lg border border-brand-light/60 bg-white p-4">
                <p className="font-semibold text-ink">{b.title}</p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  {b.author} · {b.year}
                </p>
                <p className="mt-2 text-sm text-ink-soft">{b.why}</p>
                {b.url && (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-brand underline"
                  >
                    Author / publisher site ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Foundational academic papers</h2>
          <p className="mt-2 text-ink-soft">
            Papers that shaped the field. Most are freely accessible.
          </p>
          <ul className="mt-4 space-y-3">
            {PAPERS.map((p) => (
              <li key={p.title} className="rounded-lg border border-brand-light/60 bg-white p-4">
                <p className="font-semibold text-ink">{p.title}</p>
                <p className="mt-1 text-xs text-ink-muted">
                  {p.authors} — <em>{p.venue}</em>
                </p>
                <p className="mt-2 text-sm text-ink-soft">{p.takeaway}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs text-brand underline"
                >
                  Read ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl bg-paper p-6">
          <h2 className="text-xl font-semibold text-ink">For educators</h2>
          <p className="mt-3 text-ink-soft">
            All content on this site is free to use in your classroom. If you'd like to:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft list-disc pl-6">
            <li>Assign articles as readings — link or print directly. The articles are CC-BY-4.0.</li>
            <li>Have students build a maps or data-analysis project — see <Link href="/data" className="text-brand underline">/data</Link> for the dataset.</li>
            <li>Set a service-learning component — students can work with their local Continuum of Care or a listed shelter. See <Link href="/volunteer" className="text-brand underline">/volunteer</Link>.</li>
            <li>Run a class discussion on the policy debate — start with <Link href="/learn/what-actually-works" className="text-brand underline">What actually works</Link> and <Link href="/learn/encampments-and-sweeps" className="text-brand underline">Encampments and sweeps</Link>.</li>
          </ul>
        </section>

        <CitationBox title="Research hub" url="https://homelesshelp.net/research" />
      </article>
    </RailedLayout>
  );
}

function Source({ name, url, desc }: { name: string; url: string; desc: string }) {
  return (
    <li className="rounded-md border border-brand-light/40 bg-white p-3">
      <a className="text-brand hover:underline" href={url} target="_blank" rel="noreferrer">
        {name} ↗
      </a>
      <p className="mt-1 text-xs text-ink-muted">{desc}</p>
    </li>
  );
}
