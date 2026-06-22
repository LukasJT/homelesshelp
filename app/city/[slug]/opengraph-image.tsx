import { getSheltersInCity, unslugCity } from "@/lib/shelters";
import { makeOgImage } from "@/components/ogTemplate";

export const runtime = "nodejs";
export const alt = "HomelessHelp city";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function CityOG({ params }: { params: { slug: string } }) {
  const c = unslugCity(params.slug);
  if (!c) return makeOgImage({ title: "HomelessHelp" });
  const count = getSheltersInCity(c.city, c.region).length;
  return makeOgImage({
    eyebrow: "Local directory",
    title: `Homeless shelters in ${c.city}, ${c.region}`,
    subtitle: `${count} resources — shelters, day centers, food programs, and crisis lines.`,
  });
}
