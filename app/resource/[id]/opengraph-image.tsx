import { getShelterById } from "@/lib/shelters";
import { makeOgImage } from "@/components/ogTemplate";

export const runtime = "nodejs";
export const alt = "HomelessHelp resource";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ResourceOG({ params }: { params: { id: string } }) {
  const s = getShelterById(params.id);
  if (!s) {
    return makeOgImage({ title: "HomelessHelp resource" });
  }
  return makeOgImage({
    eyebrow: `${s.city}, ${s.region}`,
    title: s.name,
    subtitle: s.notes ?? s.address,
  });
}
