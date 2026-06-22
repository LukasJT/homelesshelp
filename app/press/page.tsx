import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { CitationBox } from "@/components/CitationBox";
import { getAllShelters } from "@/lib/shelters";
import { getAllArticleMeta } from "@/lib/articles";

export const metadata = {
  title: "Press kit & media resources — HomelessHelp.net",
  description:
    "For journalists covering homelessness: site facts, dataset access, statistics index, available subject-matter context, brand assets, and how to interview HomelessHelp.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  const shelters = getAllShelters();
  const cities = new Set(shelters.map((s) => `${s.city}, ${s.region}`)).size;
  const regions = new Set(shelters.map((s) => `${s.region}/${s.country}`)).size;
  const articles = getAllArticleMeta();

  return (
    <RailedLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          For journalists & researchers
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Press & media kit</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Resources for reporters, editors, broadcasters, and researchers covering homelessness
          in the United States and Canada. Everything on this page is free to use with
          attribution.
        </p>

        <section className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat value={shelters.length.toString() + "+"} label="Resources mapped" />
          <Stat value={cities.toString()} label="Cities" />
          <Stat value={regions.toString()} label="States/provinces" />
          <Stat value={articles.length.toString()} label="Articles" />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">About HomelessHelp.net</h2>
          <p className="mt-3 text-ink-soft">
            HomelessHelp.net is a free, independent directory of homeless shelters and crisis
            services across the United States and Canada, plus plain-language guides on the
            causes of homelessness and what reduces it. We are not affiliated with any
            government agency, shelter, or charity, and we do not accept donations.
          </p>
          <p className="mt-3 text-ink-soft">
            The site launched in 2026 and currently lists {shelters.length}+ resources across{" "}
            {cities} cities. The content is open-source on{" "}
            <a
              className="text-brand underline"
              href="https://github.com/LukasJT/homelesshelp"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and the shelter dataset is published under CC-BY-4.0 at{" "}
            <Link href="/data" className="text-brand underline">/data</Link>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Datasets and citable statistics</h2>
          <p className="mt-3 text-ink-soft">
            For data journalism and stories that need a hook:
          </p>
          <ul className="mt-3 grid gap-3 md:grid-cols-2 text-sm">
            <ResLink href="/data" title="Full shelter dataset" desc="CSV + JSON, CC-BY-4.0. 424+ resources, 239+ cities." />
            <ResLink href="/stats" title="Statistics index" desc="National, by-population, housing-cost, and outcome figures with primary-source links." />
            <ResLink href="/states" title="By-state overview" desc="2023 PIT counts for all 50 US states and DC, plus Canadian-province context." />
            <ResLink href="/timeline" title="Historical timeline" desc="Modern history of US/Canada homelessness, 1955-present, with citable events." />
            <ResLink href="/glossary" title="Glossary of terms" desc="26 plain-English definitions (AHAR, CoC, Housing First, McKinney-Vento, etc.)." />
            <ResLink href="/research" title="Research hub" desc="Academic reading lists, primary-source index, and citation guidance." />
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Subject-matter context we can speak to</h2>
          <p className="mt-3 text-ink-soft">
            We can provide background on (and source quotes for) the following without putting a
            reporter on hold for weeks. For specific case quotes, defer to the listed primary
            sources or contact the organizations directly.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Topic title="Housing First evidence" body="Tsemberis, Goering, multiple meta-analyses; what works at scale vs at pilot stage." />
            <Topic title="Veteran homelessness 2009-2023 reduction" body="The HUD-VASH story, how it scaled, why it slowed in 2023." />
            <Topic title="Encampment policy" body="Sweep evidence, Grants Pass v. Johnson context, what 'works' (and what doesn't)." />
            <Topic title="Senior homelessness (50+)" body="Fastest-growing subpopulation; cohort vs structural drivers." />
            <Topic title="Youth & LGBTQ+ youth homelessness" body="Voices of Youth Count findings; family rejection dynamics." />
            <Topic title="Indigenous overrepresentation" body="Historical context; programs that work (Siloam, Na-Me-Res, NAC Phoenix)." />
            <Topic title="The 2023 12% YoY surge" body="What's driving the largest single-year increase since AHAR began." />
            <Topic title="Housing supply economics" body="Why the structural driver of homelessness is rent-vs-wage, not addiction." />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Brand assets</h2>
          <p className="mt-3 text-ink-soft">
            For use in articles, social posts, or B-roll referencing our site. All free to use
            with attribution.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Asset name="OG card" desc="1200×630 PNG" href="/opengraph-image" />
            <Asset name="App icon" desc="512×512 PNG" href="/icon" />
            <Asset name="Apple touch icon" desc="180×180 PNG" href="/apple-icon" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Embeddable map</h2>
          <p className="mt-3 text-ink-soft">
            We provide an iframe-friendly version of the map for partner organizations and news
            outlets that want to embed the directory on their own pages. See{" "}
            <Link href="/embed" className="text-brand underline">/embed</Link>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Contact</h2>
          <p className="mt-3 text-ink-soft">
            For interviews, data clarifications, or other media inquiries: open an issue at{" "}
            <a
              className="text-brand underline"
              href="https://github.com/LukasJT/homelesshelp/issues"
              target="_blank"
              rel="noreferrer"
            >
              github.com/LukasJT/homelesshelp/issues
            </a>
            . We reply faster to questions tied to a specific deadline.
          </p>
        </section>

        <section className="mt-12 rounded-xl bg-paper p-6">
          <h2 className="text-lg font-semibold text-ink">Style guidance</h2>
          <p className="mt-2 text-sm text-ink-soft">
            We follow current AP and major-paper style on homelessness coverage:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft list-disc pl-6">
            <li>Use "people experiencing homelessness" or "unhoused people" rather than "the homeless."</li>
            <li>Distinguish "unsheltered" (street, car, etc.) from "sheltered" (in a program).</li>
            <li>Distinguish "chronic homelessness" (HUD technical term) from "long-term homelessness."</li>
            <li>Distinguish "single-night point-in-time count" from "annual prevalence." Conflating these is the most common error in news coverage.</li>
            <li>If covering an encampment, contact the local outreach team before publishing identifying details — and consider whether identifying the encampment serves your story.</li>
          </ul>
        </section>

        <CitationBox title="Press kit" url="https://homelesshelp.net/press" />
      </article>
    </RailedLayout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-paper p-4 text-center">
      <p className="text-2xl font-bold text-brand">{value}</p>
      <p className="text-xs uppercase tracking-wider text-ink-muted">{label}</p>
    </div>
  );
}

function ResLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <li className="rounded-lg border border-brand-light/40 bg-white p-4">
      <Link href={href} className="font-semibold text-brand hover:underline">
        {title} →
      </Link>
      <p className="mt-1 text-xs text-ink-muted">{desc}</p>
    </li>
  );
}

function Topic({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-brand-light/60 bg-white p-4">
      <p className="font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-ink-soft">{body}</p>
    </div>
  );
}

function Asset({ name, desc, href }: { name: string; desc: string; href: string }) {
  return (
    <a
      href={href}
      className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
      target="_blank"
      rel="noreferrer"
    >
      <p className="font-semibold text-ink">{name}</p>
      <p className="mt-1 text-xs text-ink-muted">{desc}</p>
      <p className="mt-2 text-xs text-brand">Open ↗</p>
    </a>
  );
}
