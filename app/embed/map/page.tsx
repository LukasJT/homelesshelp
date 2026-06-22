import dynamic from "next/dynamic";
import { getAllShelters } from "@/lib/shelters";

const ShelterMap = dynamic(() => import("@/components/ShelterMap"), { ssr: false });

export const metadata = {
  title: "Embedded shelter map",
  description: "Embeddable shelter map for partner sites.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/embed/map" },
};

export default function EmbedMap() {
  return (
    // Cover the entire viewport, hiding the site header/footer for iframe use.
    <main className="fixed inset-0 z-[9000] bg-paper p-2">
      <ShelterMap shelters={getAllShelters()} />
      <a
        href="https://homelesshelp.net"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-2 right-2 z-[9001] rounded bg-white/95 px-2 py-1 text-[10px] font-medium text-ink-muted hover:text-brand shadow"
      >
        Powered by HomelessHelp.net ↗
      </a>
    </main>
  );
}
