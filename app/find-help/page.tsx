import Link from "next/link";
import NearbyFinder from "@/components/NearbyFinder";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Find help near you — shelters, food, and crisis services",
  description:
    "Enter your city or zip and find the nearest homeless shelters, day centers, food programs, and medical care. Free, no account, no judgment.",
};

export default function FindHelpPage() {
  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <header className="rounded-xl bg-danger/10 border border-danger/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-danger">Need help right now?</p>
          <p className="mt-2 text-ink-soft">
            Call <a href="tel:211" className="font-semibold text-danger underline">211</a> for shelter referrals
            (US & Canada). Call <a href="tel:988" className="font-semibold text-danger underline">988</a> if
            you're in mental health crisis. Call <a href="tel:911" className="font-semibold text-danger underline">911</a> for
            emergencies. All free and 24/7.
          </p>
        </header>

        <h1 className="mt-8 text-3xl font-bold text-ink">
          Find help near you
        </h1>
        <p className="mt-2 max-w-2xl text-ink-soft">
          Enter your city, zip, or postal code — or share your location — and we'll show the
          nearest shelters, day centers, food programs, and medical care. Always free. We don't
          store your location or require an account.
        </p>

        <NearbyFinder shelters={getAllShelters()} mode="help" />

        <div className="mt-8 rounded-lg bg-brand-light/30 border border-brand-light p-5">
          <h2 className="text-lg font-semibold text-ink">How to find a bed open <em>right now</em></h2>
          <ol className="mt-3 space-y-1.5 list-decimal pl-5 text-sm text-ink-soft">
            <li>
              Call <strong className="text-ink">211</strong> first. They keep live bed-availability
              data for every region in the US and most of Canada — much more current than any
              website can be.
            </li>
            <li>
              If 211 isn't an option, call shelters from the list below in order — each card has a
              tap-to-call phone number.
            </li>
            <li>
              Ask the same questions: "do you have a bed available tonight?", "any restrictions
              (pets, partner, sobriety)?", "what time can I check in?", "what's the closest place
              to get to you?"
            </li>
            <li>
              If multiple shelters say no, ask the last one you call for a referral — they often
              know who has space.
            </li>
          </ol>
        </div>

        <div className="mt-6 rounded-lg bg-white p-6 border border-brand-light/60">
          <h2 className="text-lg font-semibold text-ink">Before you go</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Call ahead.</strong> Bed availability changes hourly.
              The phone number on each card is the source of truth.
            </li>
            <li>
              <strong className="text-ink">Bring ID if you have it.</strong> Most shelters don't
              strictly require it, but services downstream of shelters usually do.
            </li>
            <li>
              <strong className="text-ink">Tell intake about your situation.</strong> Pets,
              partners, kids, mobility issues, working a night shift — shelters often have
              options that aren't on a website.
            </li>
            <li>
              <strong className="text-ink">Read{" "}
                <Link href="/learn/if-you-become-homeless" className="text-brand underline">
                  What to do if you become homeless
                </Link>
              </strong>{" "}
              for a step-by-step plan for the first 24 hours and first week.
            </li>
          </ul>
        </div>
      </section>
    </RailedLayout>
  );
}
