import { ThirdPartyAd } from "./ThirdPartyAd";

export function AdRail({ side, enabled }: { side: "left" | "right"; enabled: boolean }) {
  if (!enabled) return null;
  return (
    <aside aria-label={`${side} sponsor rail`} className="hidden shrink-0 xl:block">
      <ThirdPartyAd format="rail" className="sticky top-24 my-6" />
    </aside>
  );
}
