import Link from "next/link";
import { notFound } from "next/navigation";
import {
  citySlug,
  getAllCitySlugs,
  getAllShelters,
  getSheltersInCity,
  POPULATION_LABEL,
  SERVICE_LABEL,
  unslugCity,
} from "@/lib/shelters";
import { RailedLayout } from "@/components/RailedLayout";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params) {
  const c = unslugCity(params.slug);
  if (!c) return {};
  const list = getSheltersInCity(c.city, c.region);
  return {
    title: `Homeless shelters and resources in ${c.city}, ${c.region}`,
    description: `Directory of ${list.length} shelters, day centers, food programs, and crisis resources in ${c.city}, ${c.region}. Addresses, phone numbers, hours, and who they serve.`,
    alternates: { canonical: `/city/${params.slug}` },
  };
}

const POP_FILTERS = ["all", "men", "women", "families", "youth", "veterans", "lgbtq", "indigenous"] as const;

export default function CityPage({ params }: Params) {
  const c = unslugCity(params.slug);
  if (!c) notFound();
  const list = getSheltersInCity(c.city, c.region);
  const otherCities = Array.from(
    new Set(
      getAllShelters()
        .filter((s) => s.region === c.region && s.city !== c.city)
        .map((s) => ({ city: s.city, region: s.region, slug: citySlug(s) }))
        .map((x) => JSON.stringify(x))
    )
  )
    .map((x) => JSON.parse(x))
    .slice(0, 8);

  // Group resources by service category for the page outline
  const overnight = list.filter((s) => s.services.includes("emergency-shelter"));
  const day = list.filter((s) =>
    s.services.includes("day-services") || s.services.includes("meals") || s.services.includes("food-pantry"),
  );
  const housing = list.filter((s) =>
    s.services.includes("permanent-housing") || s.services.includes("supportive-housing") || s.services.includes("transitional-housing"),
  );
  const youthSpec = list.filter((s) => s.populationsServed.includes("youth"));
  const lgbtqSpec = list.filter((s) => s.populationsServed.includes("lgbtq"));
  const familiesSpec = list.filter((s) => s.populationsServed.includes("families") || s.populationsServed.includes("children"));

  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          <Link href="/map" className="hover:text-brand">Map</Link> · {c.region}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink">
          Homeless shelters & resources in {c.city}, {c.region}
        </h1>
        <p className="mt-2 text-ink-soft">
          {list.length} listed resources. Always call ahead — bed availability changes daily.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={`/map?city=${encodeURIComponent(c.city + ", " + c.region)}`}
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white"
          >
            View on map →
          </Link>
          <Link
            href="/get-help"
            className="rounded-md bg-danger px-4 py-2 text-sm font-semibold text-white"
          >
            Crisis hotlines
          </Link>
          <Link
            href="/help-out"
            className="rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand"
          >
            Volunteer in {c.city}
          </Link>
        </div>

        {overnight.length > 0 && (
          <CitySection title="Emergency shelter" subtitle="Beds for the night" list={overnight} />
        )}
        {day.length > 0 && (
          <CitySection title="Day services & meals" subtitle="Free food, day-time shelter, showers, mail" list={day} />
        )}
        {housing.length > 0 && (
          <CitySection title="Longer-term housing" subtitle="Transitional, supportive, and permanent housing" list={housing} />
        )}
        {youthSpec.length > 0 && (
          <CitySection title="Youth-specific" subtitle="For young people under 25" list={youthSpec} />
        )}
        {lgbtqSpec.length > 0 && (
          <CitySection title="LGBTQ+ affirming" subtitle="Explicitly LGBTQ+ welcoming" list={lgbtqSpec} />
        )}
        {familiesSpec.length > 0 && (
          <CitySection title="Families & children" subtitle="Family rooms, women+children shelters" list={familiesSpec} />
        )}

        {otherCities.length > 0 && (
          <section className="mt-12 rounded-lg bg-white p-5">
            <h2 className="text-lg font-semibold text-ink">Other cities in {c.region}</h2>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {otherCities.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/city/${o.slug}`}
                    className="rounded-full border border-brand-light/60 bg-paper px-3 py-1 hover:border-brand"
                  >
                    {o.city}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </RailedLayout>
  );
}

function CitySection({
  title,
  subtitle,
  list,
}: {
  title: string;
  subtitle: string;
  list: ReturnType<typeof getAllShelters>;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="text-sm text-ink-muted">{subtitle}</p>
      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {list.map((s) => (
          <li key={s.id}>
            <Link
              href={`/resource/${s.id}`}
              className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
            >
              <p className="font-semibold text-ink">{s.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.address}</p>
              {s.phone && <p className="mt-1 text-sm text-brand">{s.phone}</p>}
              <div className="mt-2 flex flex-wrap gap-1">
                {s.populationsServed.slice(0, 3).map((p) => (
                  <span key={p} className="rounded bg-brand-light/40 px-1.5 py-0.5 text-[10px] text-brand-dark">
                    {POPULATION_LABEL[p]}
                  </span>
                ))}
                {s.services.slice(0, 2).map((sv) => (
                  <span key={sv} className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] text-amber-900">
                    {SERVICE_LABEL[sv]}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
