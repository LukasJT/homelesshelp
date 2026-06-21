import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";

export const metadata = {
  title: "Volunteer & donate — concrete ways to help",
  description:
    "How to volunteer at a shelter, what to donate (and what not to), which charities are effective by population served, and how to make political change. US & Canada.",
};

type Charity = {
  name: string;
  focus: string;
  scope: string;
  url: string;
  why: string;
  country: "US" | "CA" | "BOTH";
};

const CHARITIES: Record<string, Charity[]> = {
  Veterans: [
    {
      name: "National Coalition for Homeless Veterans",
      focus: "Veterans",
      scope: "US national",
      url: "https://nchv.org",
      why: "Umbrella organization coordinating local veteran homelessness providers; lobbies for HUD-VASH funding.",
      country: "US",
    },
    {
      name: "Veterans Inc.",
      focus: "Veterans",
      scope: "US Northeast",
      url: "https://www.veteransinc.org",
      why: "One of the largest providers of veteran-specific housing and employment services in the country.",
      country: "US",
    },
    {
      name: "VETS Canada",
      focus: "Veterans",
      scope: "Canada national",
      url: "https://vetscanada.org",
      why: "Volunteer-led; provides emergency assistance, outreach, and rehousing for homeless Canadian veterans.",
      country: "CA",
    },
  ],
  Youth: [
    {
      name: "Covenant House",
      focus: "Youth (16–24)",
      scope: "US & Canada",
      url: "https://www.covenanthouse.org",
      why: "Largest youth-serving homelessness charity in North America. LGBTQ+ affirming.",
      country: "BOTH",
    },
    {
      name: "Trevor Project",
      focus: "LGBTQ+ youth",
      scope: "US national (24/7 crisis line)",
      url: "https://www.thetrevorproject.org",
      why: "Crisis line, chat, and text for LGBTQ+ young people. Not housing, but often the first call.",
      country: "BOTH",
    },
    {
      name: "Ali Forney Center",
      focus: "LGBTQ+ youth",
      scope: "New York City",
      url: "https://www.aliforneycenter.org",
      why: "Largest LGBTQ+ youth housing provider in the US.",
      country: "US",
    },
    {
      name: "Eva's Initiatives for Homeless Youth",
      focus: "Youth (16–24)",
      scope: "Toronto",
      url: "https://www.evas.ca",
      why: "Three youth shelters and transitional housing in Toronto with strong outcomes.",
      country: "CA",
    },
  ],
  "Families & women": [
    {
      name: "St. Vincent de Paul Society",
      focus: "Families and individuals",
      scope: "US & Canada (network)",
      url: "https://www.svdpusa.org",
      why: "Decentralized network — money usually stays local. Strong eviction-prevention programs.",
      country: "BOTH",
    },
    {
      name: "National Network to End Domestic Violence",
      focus: "Women & families fleeing DV",
      scope: "US national",
      url: "https://nnedv.org",
      why: "Operates the national hotline and supports local DV shelters in every state.",
      country: "US",
    },
    {
      name: "Volunteers of America",
      focus: "Families, veterans, seniors",
      scope: "US national",
      url: "https://www.voa.org",
      why: "Operates housing, addiction recovery, and family shelters in 46 states.",
      country: "US",
    },
  ],
  "Chronic & general": [
    {
      name: "National Alliance to End Homelessness",
      focus: "Policy & research",
      scope: "US national",
      url: "https://endhomelessness.org",
      why: "Best policy and data shop in the field. Donate here if you want to fund evidence-based advocacy.",
      country: "US",
    },
    {
      name: "Community Solutions (Built for Zero)",
      focus: "Chronic & veteran homelessness",
      scope: "US & Canada",
      url: "https://community.solutions",
      why: "Coordinates 100+ cities running data-driven Housing First programs. Multiple cities have reached 'functional zero' under this model.",
      country: "BOTH",
    },
    {
      name: "Canadian Alliance to End Homelessness",
      focus: "Policy & research",
      scope: "Canada national",
      url: "https://caeh.ca",
      why: "Coordinates the Built for Zero Canada campaign and lobbies the federal government.",
      country: "CA",
    },
  ],
  Indigenous: [
    {
      name: "Siloam Mission",
      focus: "Indigenous-led shelter & housing",
      scope: "Winnipeg",
      url: "https://siloam.ca",
      why: "Largest provider in Manitoba; works closely with Indigenous communities disproportionately affected by homelessness.",
      country: "CA",
    },
    {
      name: "Native American Connections",
      focus: "Native American housing & recovery",
      scope: "Arizona",
      url: "https://www.nativeconnections.org",
      why: "Culturally specific recovery and housing for Native communities.",
      country: "US",
    },
  ],
};

export default function HelpOutPage() {
  return (
    <RailedLayout>
    <section className="mx-auto max-w-5xl px-4 py-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">For volunteers & donors</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">How to actually help</h1>
        <p className="mt-2 text-ink-soft">
          Most people who want to help don't know where to start, so they donate used clothes or
          hand out granola bars from their car. This page is opinionated about what has impact —
          based on the same research summarized in our{" "}
          <Link href="/learn" className="text-brand underline">Learn</Link> section.
        </p>
        <nav className="mt-5 flex flex-wrap gap-2 text-sm">
          <Link href="/volunteer" className="rounded-md bg-accent px-3 py-1.5 font-semibold text-ink">
            Find places near me →
          </Link>
          <a href="#volunteer" className="rounded-md bg-brand px-3 py-1.5 font-semibold text-white">How to volunteer</a>
          <a href="#donate" className="rounded-md bg-ink px-3 py-1.5 font-semibold text-white">How to donate</a>
          <a href="#charities" className="rounded-md border border-brand px-3 py-1.5 font-semibold text-brand">Effective charities</a>
          <a href="#political" className="rounded-md border border-brand px-3 py-1.5 font-semibold text-brand">Political action</a>
        </nav>
      </header>

      <section className="mt-8 rounded-xl bg-gradient-to-br from-accent/30 to-brand-light/30 border border-brand-light/60 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-900">Ready to act?</p>
        <h2 className="mt-1 text-xl font-bold text-ink">Find shelters near you that accept volunteers</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Type your city, zip, or postal code and we'll list nearby resources with phone numbers
          so you can ask about their current volunteer needs.
        </p>
        <Link
          href="/volunteer"
          className="mt-3 inline-block rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white"
        >
          Find places near me →
        </Link>
      </section>

      <section id="donate" className="mt-10 rounded-xl border border-brand-light/60 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">If you have $20 to give</h2>
        <p className="mt-2 text-ink-soft">
          Give cash to a local organization that provides housing — not stuff, not religious
          counseling, not "transitional" programs that gatekeep on sobriety. National charities are
          fine; small, local Housing First providers are often <em>more</em> effective dollar-for-dollar
          because they spend less on overhead and know their local landlords.
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          See <a className="text-brand underline" href="https://www.charitynavigator.org" target="_blank" rel="noreferrer">Charity Navigator</a> or
          {" "}<a className="text-brand underline" href="https://www.givewell.org" target="_blank" rel="noreferrer">GiveWell</a> to vet specific charities.
        </p>
      </section>

      <section id="volunteer" className="mt-10 rounded-xl border border-brand-light/60 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">If you have a few hours — volunteer</h2>
        <ul className="mt-3 space-y-3 text-ink-soft">
          <li>
            <strong className="text-ink">Serve a shift at a soup kitchen or shelter.</strong> Most need
            volunteers for meal prep and serving. Call ahead — they usually have a sign-up.
          </li>
          <li>
            <strong className="text-ink">Make hygiene kits.</strong> Gallon ziplocs filled with: travel
            toothbrush + toothpaste, deodorant, bar soap, washcloth, comb, lip balm, hand wipes, a
            granola bar, and a pair of new socks. Drop off at the nearest shelter, or carry a few in
            your car to hand out directly.
          </li>
          <li>
            <strong className="text-ink">Run a sock drive.</strong> Clean socks are the single most-requested item at almost every shelter. Easy to organize at a workplace, school, or church.
          </li>
          <li>
            <strong className="text-ink">Join a street-outreach team.</strong> Most cities have an
            organized outreach team — sometimes through the library, a Continuum of Care, or a
            volunteer-led group like Mary's Place or Operation Sack Lunch. They can pair you with
            experienced outreach workers.
          </li>
        </ul>
      </section>

      <section id="give" className="mt-10 rounded-xl border border-brand-light/60 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">What to donate (and what not to)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-brand">Most useful</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-soft">
              <li>• Cash (lets organizations buy exactly what's needed today)</li>
              <li>• New socks (the #1 requested item)</li>
              <li>• New underwear</li>
              <li>• Hygiene items (full size, not hotel)</li>
              <li>• Sleeping bags & tents (for outreach)</li>
              <li>• Sturdy backpacks</li>
              <li>• Reusable water bottles</li>
              <li>• Hand warmers (winter), sunscreen (summer)</li>
              <li>• Bus passes / transit cards</li>
              <li>• Pet food (many people have pets they won't leave)</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-danger">Least useful</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-soft">
              <li>• Used clothing (overwhelmingly oversupplied)</li>
              <li>• Stuffed animals, holiday decorations</li>
              <li>• Old electronics</li>
              <li>• Expired or perishable food in bulk</li>
              <li>• "Inspirational" books, religious tracts</li>
              <li>• Anything that requires storage shelters don't have</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          Rule of thumb: cash &gt; new items &gt; clean used items &gt; old used items. When in doubt, call
          the shelter and ask what they actually need this month.
        </p>
      </section>

      <section id="charities" className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Effective charities by population</h2>
        <p className="mt-2 text-ink-soft">
          A non-exhaustive starting list of organizations that work at scale and publish outcomes.
          Always do your own diligence on local groups — small effective ones often beat large famous ones.
        </p>

        <div className="mt-6 space-y-8">
          {Object.entries(CHARITIES).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">{group}</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {items.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-semibold text-ink">{c.name}</p>
                      <span className="text-[10px] rounded bg-paper px-1.5 py-0.5 text-ink-muted">
                        {c.country === "BOTH" ? "US & CA" : c.country}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-ink-muted">{c.focus} · {c.scope}</p>
                    <p className="mt-2 text-sm text-ink-soft">{c.why}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="political" className="mt-12 rounded-xl border border-brand-light/60 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">If you have political energy</h2>
        <p className="mt-2 text-ink-soft">
          The single largest lever on homelessness is the housing supply. Most of the variance between
          cities is explained by housing costs — and housing costs are set by zoning, permitting, and
          construction policy. Supporting more housing being built, of all kinds and especially at the
          low end, is the most consequential thing most voters can do.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-ink-soft">
          <li>• Show up to local zoning meetings.</li>
          <li>• Support YIMBY ("yes in my backyard") groups in your city.</li>
          <li>• Push your representatives to fund vouchers (Section 8 in the US; portable housing benefit in Canada).</li>
          <li>• Oppose encampment criminalization laws; support outreach-and-housing alternatives.</li>
        </ul>
      </section>
    </section>
    </RailedLayout>
  );
}
