import Link from "next/link";
import { getAllShelters } from "@/lib/shelters";
import { getAllArticleMeta } from "@/lib/articles";
import { RailedLayout } from "@/components/RailedLayout";

export default function LandingPage() {
  const shelterCount = getAllShelters().length;
  const articles = getAllArticleMeta();
  const cities = Array.from(new Set(getAllShelters().map((s) => `${s.city}, ${s.region}`))).length;

  return (
    <RailedLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-light/90">HomelessHelp.net</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-6xl">
            Find help.<br />
            Give help.<br />
            <span className="text-accent">Understand homelessness.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            A free, independent directory of shelters and crisis resources across the United States
            and Canada — paired with plain-language guides on what actually works.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/map" className="rounded-md bg-white px-5 py-3 font-semibold text-brand-dark hover:bg-paper">
              Find resources near you →
            </Link>
            <Link href="/get-help" className="rounded-md bg-danger px-5 py-3 font-semibold text-white hover:bg-red-700">
              Get help now
            </Link>
            <Link href="/learn" className="rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Learn about homelessness
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6 text-white">
            <Stat label="Resources mapped" value={shelterCount.toString() + "+"} />
            <Stat label="Cities covered" value={cities.toString()} />
            <Stat label="Crisis hotlines" value="13" />
          </div>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">Pick your path</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <PathCard
            href="/map"
            title="I need help"
            color="brand"
            body="Find the nearest shelter, day center, food program, or crisis line. Filter by who the resource serves. Always free."
          />
          <PathCard
            href="/help-out"
            title="I want to help"
            color="accent"
            body="Concrete, evidence-based ways to volunteer, donate, and act. Includes what shelters actually need (it's probably not used clothes)."
          />
          <PathCard
            href="/learn"
            title="I want to learn"
            color="ink"
            body="Plain-language guides on the causes of homelessness, what works to reduce it, and how to talk to someone on the street."
          />
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-ink">Start here</h2>
            <Link href="/learn" className="text-sm text-brand hover:underline">All articles →</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((a) => (
              <Link
                key={a.slug}
                href={`/learn/${a.slug}`}
                className="block rounded-lg border border-brand-light/60 bg-paper p-5 hover:border-brand"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">{a.category}</p>
                <p className="mt-1 text-lg font-semibold text-ink">{a.title}</p>
                <p className="mt-2 text-sm text-ink-muted">{a.summary}</p>
                <p className="mt-3 text-xs text-ink-muted">{a.readMinutes} min read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CRISIS STRIP */}
      <section className="bg-danger/10 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-danger">If you need help tonight</p>
          <p className="mt-2 text-2xl font-bold text-ink">Call 211 for shelter referrals. Call 988 if you're in crisis. Call 911 for emergencies.</p>
          <p className="mt-2 text-ink-soft">These are free, confidential, and answered 24/7 across the US and Canada.</p>
          <Link href="/get-help" className="mt-4 inline-block rounded-md bg-ink px-5 py-2.5 font-semibold text-white">
            See all crisis hotlines
          </Link>
        </div>
      </section>

      {/* SUBMIT INVITE */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-ink">Know a resource we're missing?</h2>
        <p className="mt-2 text-ink-soft">
          We're crowdsourcing the directory. Every shelter, day center, food program, and outreach
          group helps someone find help faster.
        </p>
        <Link href="/submit" className="mt-4 inline-block rounded-md bg-brand px-5 py-2.5 font-semibold text-white">
          Submit a resource
        </Link>
      </section>
    </RailedLayout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-xs uppercase tracking-wider text-white/70">{label}</p>
    </div>
  );
}

function PathCard({
  href,
  title,
  body,
  color,
}: {
  href: string;
  title: string;
  body: string;
  color: "brand" | "accent" | "ink";
}) {
  const ring = {
    brand: "from-brand to-brand-dark",
    accent: "from-accent to-amber-600",
    ink: "from-ink to-ink-soft",
  }[color];
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${ring} p-6 text-white transition hover:scale-[1.01]`}
    >
      <p className="text-xl font-bold">{title}</p>
      <p className="mt-2 text-sm text-white/90">{body}</p>
      <p className="mt-4 text-sm font-semibold">Go →</p>
    </Link>
  );
}
