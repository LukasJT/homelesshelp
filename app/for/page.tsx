import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import { getAllPopulationProfiles } from "@/lib/populations";

export const metadata = {
  title: "Resources by population — youth, veterans, LGBTQ+, families, women, Indigenous",
  description:
    "Population-specific homeless resources, crisis lines, and effective charities for youth, veterans, LGBTQ+, families, women, and Indigenous communities.",
};

export default function ForIndex() {
  const profiles = getAllPopulationProfiles();
  return (
    <RailedLayout>
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">Resources by population</h1>
        <p className="mt-2 text-ink-soft">
          Pick a group below to see hotlines, charities, and resources specifically for it.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {profiles.map((p) => (
            <Link
              key={p.slug}
              href={`/for/${p.slug}`}
              className="block rounded-xl border border-brand-light/60 bg-white p-5 hover:border-brand"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                For {p.shortTitle}
              </p>
              <p className="mt-1 text-lg font-semibold text-ink">{p.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{p.hero}</p>
            </Link>
          ))}
        </div>
      </section>
    </RailedLayout>
  );
}
