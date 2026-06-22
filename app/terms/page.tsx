import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";

export const metadata = {
  title: "Terms of use",
  description:
    "Terms governing your use of HomelessHelp.net. Information is provided as a public resource — not medical, legal, or financial advice.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">Terms of use</h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated 2026-06-22.</p>

        <p className="mt-6 text-ink-soft">
          By using HomelessHelp.net you agree to the following. These terms are written in plain
          English so they can actually be read.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">What this site is</h2>
        <p className="mt-3 text-ink-soft">
          HomelessHelp.net is a free public directory of homeless shelters and crisis services in
          the United States and Canada, plus plain-language guides on homelessness. It is not a
          shelter, service provider, government agency, or charity. We do not accept donations.
          See <Link href="/about" className="text-brand underline">/about</Link> for the full
          rundown.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">No warranty of accuracy</h2>
        <p className="mt-3 text-ink-soft">
          Information about shelters and services changes constantly — addresses move, phone
          numbers get reassigned, hours shift, programs close. We update listings when readers
          flag issues but cannot guarantee that any specific piece of information is current.
          <strong className="text-ink"> Always call ahead before traveling to a shelter.</strong>
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Not professional advice</h2>
        <p className="mt-3 text-ink-soft">
          Nothing on this site is medical, legal, financial, or therapeutic advice. The Learn
          articles explain research on homelessness; they are educational, not prescriptive.
          Crisis-line numbers are listed in good faith but we are not those organizations and
          cannot speak for them.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">No donations through us</h2>
        <p className="mt-3 text-ink-soft">
          HomelessHelp.net does not accept donations, process payments, or hold funds in transit.
          Every charity link on this site goes directly to that organization's own donation page.
          We do not take a cut.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Your submissions</h2>
        <p className="mt-3 text-ink-soft">
          If you submit information about a resource through{" "}
          <Link href="/submit" className="text-brand underline">/submit</Link>, you confirm that
          it is accurate to the best of your knowledge and that you have the right to share it.
          You grant us permission to publish, edit, and remove that information on this site.
          You retain whatever underlying rights you had — we don't claim ownership of facts about
          real-world organizations.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Takedown requests</h2>
        <p className="mt-3 text-ink-soft">
          If you are an authorized representative of an organization listed on this site and want
          your listing modified or removed, contact us via the method in{" "}
          <Link href="/about" className="text-brand underline">/about</Link>. We process
          good-faith takedown requests within a week, usually faster.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Advertising</h2>
        <p className="mt-3 text-ink-soft">
          We may display third-party advertising (via Google AdSense or similar) to keep the site
          free. We block sensitive categories including high-interest loans, gambling, alcohol,
          and weight-loss schemes. Listings on this site are <em>not</em> paid placements — no
          organization can pay to be added, ranked higher, or featured. If you ever see an
          advertisement that violates this commitment, please tell us.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Liability</h2>
        <p className="mt-3 text-ink-soft">
          You use this site at your own risk. To the maximum extent allowed by law, we are not
          liable for any consequences (direct, indirect, or otherwise) of using or relying on
          information here. If you are in immediate danger, call 911 (US/Canada) or 988 for mental
          health crisis.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Acceptable use</h2>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>Do not submit knowingly false or harassing information about a resource.</li>
          <li>Do not scrape the site at industrial volume. Use of our data for research or to
            improve another homeless-services tool is welcome; please be respectful of rate
            limits.</li>
          <li>Do not attempt to impersonate organizations or maintainers of this site.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-ink">Changes</h2>
        <p className="mt-3 text-ink-soft">
          If we change these terms materially, we'll update the "last updated" date at the top
          and announce the change on the homepage for at least one week.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Governing law</h2>
        <p className="mt-3 text-ink-soft">
          These terms are governed by the laws of the Canadian province of the maintainer's
          residence and applicable federal law of Canada, without regard to conflict-of-laws
          principles. If you are accessing from the US, applicable US federal and state consumer
          protection laws also apply to the extent they are mandatory.
        </p>
      </article>
    </RailedLayout>
  );
}
