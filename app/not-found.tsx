import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-ink-soft">
        The page you're looking for moved or never existed. Head back to the map or read about
        homelessness while you're here.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-md bg-brand px-4 py-2 font-semibold text-white">
          Home
        </Link>
        <Link href="/map" className="rounded-md border border-brand px-4 py-2 font-semibold text-brand">
          Map
        </Link>
      </div>
    </section>
  );
}
