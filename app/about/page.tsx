import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "About HomelessHelp.net",
  description:
    "HomelessHelp.net is a free, independent directory of homeless services across the US and Canada. We don't accept donations, take fees, or process money.",
};

export default function AboutPage() {
  const shelters = getAllShelters();
  const cities = new Set(shelters.map((s) => `${s.city}, ${s.region}`)).size;
  const regions = new Set(shelters.map((s) => `${s.region}/${s.country}`)).size;

  return (
    <RailedLayout>
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">About HomelessHelp.net</h1>

        <p className="mt-4 text-ink-soft">
          HomelessHelp.net is a free, independent directory of homeless services across the
          United States and Canada — paired with plain-language guides on what causes
          homelessness and what actually works to reduce it. We exist to help three audiences:
          people who need a bed tonight, people who want to volunteer or donate effectively,
          and people who want to understand the issue.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-paper p-5 text-center">
          <Stat value={shelters.length.toString() + "+"} label="Resources" />
          <Stat value={cities.toString()} label="Cities" />
          <Stat value={regions.toString()} label="States/provinces" />
        </div>

        <h2 className="mt-10 text-xl font-semibold text-ink">What we are not</h2>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>
            <strong className="text-ink">Not a charity that takes donations.</strong>{" "}
            HomelessHelp.net does not accept donations, take a cut of donations made through
            the site, or process any payments. Every charity we link to receives donations
            directly through its own page. If you want to give money, give it to a listed
            charity — not to us.
          </li>
          <li>
            <strong className="text-ink">Not a shelter or service provider.</strong> We do not
            run shelters or offer direct services. We point you to the organizations that do.
          </li>
          <li>
            <strong className="text-ink">Not a government agency.</strong> We are not
            affiliated with HUD, the VA, the Salvation Army, the Continuum of Care system, or
            any government body in the US or Canada.
          </li>
          <li>
            <strong className="text-ink">Not a real-time bed-availability service.</strong>{" "}
            Bed counts change hourly. Always call ahead. The phone number on every resource
            page is the source of truth.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-ink">What we are</h2>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>
            <strong className="text-ink">A free public directory.</strong> Every page on this
            site is free to view. There are no ads (currently), no paywalls, no email-gated
            content, and no user accounts.
          </li>
          <li>
            <strong className="text-ink">Crowdsourced and reviewed.</strong> We start with a
            seed dataset of verified shelters in major cities. Anyone can{" "}
            <Link href="/submit" className="text-brand underline">submit a resource</Link> —
            we review every submission before it appears on the map.
          </li>
          <li>
            <strong className="text-ink">Open-source.</strong> The code that runs this site is
            on{" "}
            <a className="text-brand underline" href="https://github.com/LukasJT/homelesshelp" target="_blank" rel="noreferrer">
              GitHub
            </a>
            . The shelter data is in a single JSON file — anyone can audit it or contribute.
          </li>
          <li>
            <strong className="text-ink">Evidence-driven.</strong> Our{" "}
            <Link href="/learn" className="text-brand underline">Learn</Link> articles cite
            the underlying research — At Home/Chez Soi, HUD AHAR, Houston's Built for Zero,
            Helsinki's Housing First scale-up — and call out common misconceptions.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-ink">A note on accuracy</h2>
        <p className="mt-3 text-ink-soft">
          Shelter information goes out of date constantly — hours change, organizations move,
          phone numbers get reassigned. We refresh listings when readers flag issues. If you
          see something wrong, please use{" "}
          <Link href="/submit" className="text-brand underline">/submit</Link> to tell us — it
          takes one minute and it helps everyone after you.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Contact</h2>
        <p className="mt-3 text-ink-soft">
          To report inaccurate data, request a takedown, or otherwise reach the maintainers:
          open an issue at{" "}
          <a className="text-brand underline" href="https://github.com/LukasJT/homelesshelp/issues" target="_blank" rel="noreferrer">
            github.com/LukasJT/homelesshelp/issues
          </a>
          .
        </p>
      </section>
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
