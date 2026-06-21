import Link from "next/link";

const links = [
  { href: "/map", label: "Find Resources" },
  { href: "/city", label: "Browse Cities" },
  { href: "/get-help", label: "Get Help Now" },
  { href: "/help-out", label: "Volunteer & Donate" },
  { href: "/learn", label: "Learn" },
  { href: "/submit", label: "Submit a Resource" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-light/40 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white font-bold">
            H
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink">
            HomelessHelp<span className="text-brand">.net</span>
          </span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:bg-brand-light/30 hover:text-brand-dark"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/get-help"
          className="md:hidden rounded-md bg-danger px-3 py-2 text-sm font-semibold text-white"
        >
          Get Help
        </Link>
      </div>
    </header>
  );
}
