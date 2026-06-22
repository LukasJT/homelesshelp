import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";

export const metadata = {
  title: "Privacy policy",
  description:
    "What HomelessHelp.net collects, stores, and shares — and what we don't. Plain English.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">Privacy policy</h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated 2026-06-22.</p>

        <p className="mt-6 text-ink-soft">
          HomelessHelp.net is built to be useful to people whose privacy is often violated
          (people experiencing homelessness, people fleeing violence, people in crisis). We
          collect as little information as possible. This page explains exactly what happens.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">What we don't collect</h2>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>We do not require accounts. There is nothing to sign up for.</li>
          <li>
            We do not store your name, address, phone number, email, or any other personal
            identifier — unless you voluntarily type it into a form (see below).
          </li>
          <li>
            We do not track you across the web. We do not sell or share user data with marketers
            or data brokers.
          </li>
          <li>We do not accept donations or process payments. No payment data ever passes through this site.</li>
          <li>
            We do not store your geolocation. The Find Help / Volunteer pages can use your
            browser's geolocation to rank nearby resources, but only after you explicitly grant
            permission, and the coordinates stay in your browser. We do not send them to our
            servers.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-ink">What we do collect</h2>
        <p className="mt-3 text-ink-soft">
          <strong className="text-ink">Submissions.</strong> If you use{" "}
          <Link href="/submit" className="text-brand underline">/submit</Link> to add or report a
          resource, the form fields you fill in are sent to our database for moderation. We also
          store a one-way hash of your IP address so we can stop abuse without retaining the
          actual IP. If you provide an email, we use it only to follow up about the specific
          submission (we do not subscribe you to anything).
        </p>
        <p className="mt-3 text-ink-soft">
          <strong className="text-ink">Server logs.</strong> Our hosting provider (Vercel) keeps
          standard web-server access logs (URL requested, timestamp, anonymous fingerprint) for
          ~30 days for operational purposes. These are not connected to any personal identifier
          we hold.
        </p>
        <p className="mt-3 text-ink-soft">
          <strong className="text-ink">Search queries.</strong> When you type a city or address
          into the location search, that text is sent to OpenStreetMap's Nominatim service to
          turn it into latitude/longitude. We do not log the query on our side; OpenStreetMap's
          usage policy applies on theirs.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Third-party services</h2>
        <p className="mt-3 text-ink-soft">
          We use a small number of third parties, listed here so you know exactly what loads in
          your browser when you visit:
        </p>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>
            <strong className="text-ink">Vercel</strong> — hosting. Standard server logs.{" "}
            <a className="text-brand underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
              privacy policy ↗
            </a>
          </li>
          <li>
            <strong className="text-ink">OpenStreetMap</strong> — map tiles and geocoding. Loaded
            when you visit the map or location-search pages.{" "}
            <a className="text-brand underline" href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noreferrer">
              privacy policy ↗
            </a>
          </li>
          <li>
            <strong className="text-ink">Supabase</strong> — database for crowdsourced
            submissions. Only used when you submit a resource.{" "}
            <a className="text-brand underline" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">
              privacy policy ↗
            </a>
          </li>
          <li>
            <strong className="text-ink">Google AdSense</strong> — site advertising. When ads are
            active, Google may set cookies to deliver and measure ads. You can opt out (or in,
            depending on jurisdiction) using our cookie banner. We block sensitive ad categories
            including high-interest loans, gambling, alcohol, and weight-loss schemes.{" "}
            <a className="text-brand underline" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">
              how Google uses ads data ↗
            </a>
          </li>
          <li>
            <strong className="text-ink">Google Translate</strong> — when you use a link from{" "}
            <Link href="/languages" className="text-brand underline">/languages</Link>, the
            translated page is served by Google, not us. Their privacy policy applies on that
            domain.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-ink">Cookies</h2>
        <p className="mt-3 text-ink-soft">
          The only first-party cookies we set are:
        </p>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>
            <strong className="text-ink">hh_consent</strong> — remembers whether you accepted or
            declined ad/analytics cookies. Set by the cookie banner. No personal data.
          </li>
          <li>
            <strong className="text-ink">hh_admin</strong> — only set on the admin moderation
            panel for site maintainers. Not relevant to public visitors.
          </li>
        </ul>
        <p className="mt-3 text-ink-soft">
          Third-party cookies (Google AdSense) load only after you accept the cookie banner or if
          you are in a jurisdiction where consent is not legally required and you have not
          explicitly opted out.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Your rights</h2>
        <ul className="mt-3 space-y-2 text-ink-soft">
          <li>
            <strong className="text-ink">Access / deletion.</strong> If you submitted a resource
            and want it deleted, or you have any other privacy request, email us via the contact
            method in <Link href="/about" className="text-brand underline">/about</Link>.
          </li>
          <li>
            <strong className="text-ink">Do Not Track.</strong> We honor browser DNT signals where
            they materially affect what we load.
          </li>
          <li>
            <strong className="text-ink">EU / UK / California.</strong> We respect GDPR (EU/UK)
            and CCPA/CPRA (California) rights even though our primary audience is in the US and
            Canada. The cookie banner gives you a real choice. Ads are opted-out by default until
            you accept.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-ink">Children</h2>
        <p className="mt-3 text-ink-soft">
          The site is appropriate for general audiences, including youth experiencing
          homelessness. We do not knowingly collect personal information from children under 13.
          The youth-focused pages (Covenant House Nineline, Kids Help Phone, Trevor Project, etc.)
          are direct phone-number listings; we do not gate or track this content.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-ink">Changes</h2>
        <p className="mt-3 text-ink-soft">
          If we materially change this policy, we'll update the "last updated" date at the top.
          Material changes (new data collected, new third parties) will be announced on the
          homepage for at least one week.
        </p>

        <p className="mt-10 text-xs text-ink-muted">
          Questions? See <Link href="/about" className="text-brand underline">/about</Link> for
          how to contact us.
        </p>
      </article>
    </RailedLayout>
  );
}
