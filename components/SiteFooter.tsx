import Link from "next/link";
import { ManageCookiesButton } from "./ConsentBanner";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-brand-light/40 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-lg font-semibold text-ink">HomelessHelp.net</p>
          <p className="mt-2 text-sm text-ink-muted">
            A free, independent directory of homeless services in the US and Canada.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">In an emergency</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft">
            <li><a href="tel:911" className="hover:text-brand">911 — Emergency</a></li>
            <li><a href="tel:211" className="hover:text-brand">211 — Local services</a></li>
            <li><a href="tel:988" className="hover:text-brand">988 — Mental health crisis</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Find help</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft">
            <li><Link href="/find-help" className="hover:text-brand">Find help near me</Link></li>
            <li><Link href="/map" className="hover:text-brand">Browse the map</Link></li>
            <li><Link href="/city" className="hover:text-brand">Browse cities</Link></li>
            <li><Link href="/for" className="hover:text-brand">Resources by population</Link></li>
            <li><Link href="/service" className="hover:text-brand">Resources by service</Link></li>
            <li><Link href="/learn/if-you-become-homeless" className="hover:text-brand">If you just became homeless</Link></li>
            <li><Link href="/learn/daily-survival-guide" className="hover:text-brand">Daily survival guide</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Get involved</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft">
            <li><Link href="/volunteer" className="hover:text-brand">Volunteer near me</Link></li>
            <li><Link href="/help-out#donate" className="hover:text-brand">How to donate effectively</Link></li>
            <li><Link href="/help-out#charities" className="hover:text-brand">Effective charities</Link></li>
            <li><Link href="/submit" className="hover:text-brand">Submit a resource</Link></li>
            <li><Link href="/learn" className="hover:text-brand">Articles</Link></li>
            <li><Link href="/research" className="hover:text-brand">Research hub</Link></li>
            <li><Link href="/press" className="hover:text-brand">Press kit</Link></li>
            <li><Link href="/embed" className="hover:text-brand">Embed our map</Link></li>
            <li><Link href="/about" className="hover:text-brand">About us</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Disclaimer</p>
          <p className="mt-2 text-xs text-ink-muted leading-relaxed">
            HomelessHelp is not affiliated with any government agency, shelter, or charity, and
            does not accept donations or process money. Every charity listed on this site
            receives donations directly through its own channels. Information here is provided
            as a public resource and may be out of date — always call ahead before traveling to
            a shelter. If you spot inaccurate information, please use the Submit page to flag it.
          </p>
        </div>
      </div>
      <div className="border-t border-brand-light/40 py-4">
        <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted">
          <p>
            © {new Date().getFullYear()} HomelessHelp.net — Map data © OpenStreetMap contributors.
          </p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/about" className="hover:text-brand">About</Link>
            <Link href="/privacy" className="hover:text-brand">Privacy</Link>
            <Link href="/terms" className="hover:text-brand">Terms</Link>
            <Link href="/languages" className="hover:text-brand">Languages</Link>
            <ManageCookiesButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}
