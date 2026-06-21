import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-brand-light/40 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
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
          <p className="text-sm font-semibold text-ink">Site</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-soft">
            <li><Link href="/map" className="hover:text-brand">Map of resources</Link></li>
            <li><Link href="/learn" className="hover:text-brand">Learn about homelessness</Link></li>
            <li><Link href="/help-out" className="hover:text-brand">Volunteer & donate</Link></li>
            <li><Link href="/submit" className="hover:text-brand">Submit a resource</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">About</p>
          <p className="mt-2 text-xs text-ink-muted leading-relaxed">
            HomelessHelp is not affiliated with any government agency, shelter, or charity.
            Information is provided as a public resource and may be out of date — always call
            ahead before traveling to a shelter. If you spot inaccurate information, please use
            the Submit page to flag it.
          </p>
        </div>
      </div>
      <div className="border-t border-brand-light/40 py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-ink-muted">
          © {new Date().getFullYear()} HomelessHelp.net — Map data © OpenStreetMap contributors.
        </p>
      </div>
    </footer>
  );
}
