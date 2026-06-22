import Link from "next/link";
import NearbyFinder from "@/components/NearbyFinder";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Volunteer near you — find shelters that need help",
  description:
    "Enter your city or zip and find homeless shelters, day centers, and food programs near you that accept volunteers. Phone numbers and websites for every listing.",
};

export default function VolunteerPage() {
  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Volunteer</p>
          <h1 className="mt-1 text-3xl font-bold text-ink">
            Find a place to volunteer near you
          </h1>
          <p className="mt-2 max-w-2xl text-ink-soft">
            Enter your city or zip — or share your location — and we'll list shelters and resources
            near you that accept volunteers. Each one has a phone number and website: call ahead to
            ask about their current volunteer needs.
          </p>
        </header>

        <NearbyFinder shelters={getAllShelters()} mode="volunteer" />

        <div className="mt-10 rounded-lg bg-white p-6 border border-brand-light/60">
          <h2 className="text-lg font-semibold text-ink">Before you call</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Ask what they need <em>this week</em></strong> — not what they
              need in general. Volunteer needs shift constantly. They might need a meal-shift filler
              tonight, mock-interviewers next Tuesday, or just a sock drive any time.
            </li>
            <li>
              <strong className="text-ink">Commit to a time, not "whenever I'm free"</strong> — shelters get
              flaky one-time volunteers all day. Showing up on the same shift weekly for a month is
              worth more than ten one-off visits.
            </li>
            <li>
              <strong className="text-ink">Don't bring stuff they didn't ask for</strong> — used clothes
              are the most-donated and least-needed item in almost every shelter. Cash, new socks,
              and hygiene supplies are usually what they actually want. See our{" "}
              <Link href="/help-out#donate" className="text-brand underline">donation guide</Link>.
            </li>
            <li>
              <strong className="text-ink">Be flexible about what "volunteering" means</strong> — for
              some shelters the best help is administrative (translation, grant writing, IT). Ask
              what their biggest unmet need is, not just whether they need meal servers.
            </li>
          </ul>
        </div>
      </section>
    </RailedLayout>
  );
}
