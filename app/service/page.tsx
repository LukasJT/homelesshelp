import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllServiceProfiles } from "@/lib/services";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Resources by service — food, medical, housing, day centers, recovery",
  description:
    "Browse homeless resources by what they provide — free meals, food pantries, free clinics, day centers, housing programs, addiction treatment, harm reduction.",
};

export default function ServicesIndex() {
  const profiles = getAllServiceProfiles();
  const all = getAllShelters();
  const counts = Object.fromEntries(
    profiles.map((p) => [
      p.slug,
      all.filter((s) => s.services.some((sv) => p.matchServices.includes(sv))).length,
    ]),
  );
  return (
    <RailedLayout>
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">Resources by service</h1>
        <p className="mt-2 text-ink-soft">
          Pick what you need — we'll show every resource we know of in the US and Canada that
          provides it, with a location-based finder on each page.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {profiles.map((p) => (
            <Link
              key={p.slug}
              href={`/service/${p.slug}`}
              className="block rounded-xl border border-brand-light/60 bg-white p-5 hover:border-brand"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {p.shortTitle}
              </p>
              <p className="mt-1 text-lg font-semibold text-ink">{p.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{p.hero}</p>
              <p className="mt-3 text-xs font-semibold text-brand-dark">
                {counts[p.slug]} resources →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </RailedLayout>
  );
}
