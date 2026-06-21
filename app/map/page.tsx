import dynamic from "next/dynamic";
import { getAllShelters } from "@/lib/shelters";

const ShelterMap = dynamic(() => import("@/components/ShelterMap"), { ssr: false });

export const metadata = {
  title: "Map of shelters and resources",
  description:
    "Browse homeless shelters, day centers, and crisis resources across the US and Canada on an interactive map.",
};

export default function MapPage() {
  const shelters = getAllShelters();
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-ink">Find shelters and resources</h1>
        <p className="text-sm text-ink-muted">
          Search by city, zip, or address. Filter by who the resource serves. Always call ahead — hours and bed availability change daily.
        </p>
      </header>
      <ShelterMap shelters={shelters} />
    </section>
  );
}
