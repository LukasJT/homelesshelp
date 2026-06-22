"use client";

import { ReactNode, useEffect, useState } from "react";
import { getStoredConsent } from "./ConsentBanner";

interface AdSlotProps {
  id: string;
  slot?: string; // AdSense ad-slot ID for this placement
  label?: string;
  height?: number;
  sticky?: boolean;
  children?: ReactNode;
}

function AdSlot({ id, slot, label = "Advertisement", height = 600, sticky, children }: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    const onChange = () => setConsent(getStoredConsent());
    window.addEventListener("hh-consent-change", onChange);
    return () => window.removeEventListener("hh-consent-change", onChange);
  }, []);

  useEffect(() => {
    // Once the AdSense script is loaded and we have a slot, push to it
    if (client && slot && consent === "accepted") {
      try {
        // @ts-expect-error adsbygoogle is provided by the AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        /* fail silently */
      }
    }
  }, [client, slot, consent]);

  const showRealAd = client && slot && consent === "accepted";

  return (
    <div
      id={`ad-${id}`}
      data-ad-slot={id}
      className={
        "w-[160px] rounded-md border border-dashed border-ink-muted/30 bg-white/60 " +
        (sticky ? "sticky top-24 " : "") +
        "flex items-center justify-center text-center text-xs text-ink-muted"
      }
      style={{ minHeight: height }}
    >
      {showRealAd ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: 160, height }}
          data-ad-client={client}
          data-ad-slot={slot}
        />
      ) : (
        children ?? (
          <span className="px-2 leading-snug">
            {label}
            <br />
            <span className="text-[10px] text-ink-muted/70">160 × {height}</span>
          </span>
        )
      )}
    </div>
  );
}

export function AdRail({ side }: { side: "left" | "right" }) {
  // Off by default. Set NEXT_PUBLIC_AD_SLOTS_ENABLED=true in env to show rails.
  const enabled = process.env.NEXT_PUBLIC_AD_SLOTS_ENABLED === "true";
  if (!enabled) return null;

  // AdSense slot ids per side. Configure these env vars per slot once you have
  // them from your AdSense account.
  const topSlot =
    side === "left"
      ? process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEFT_TOP
      : process.env.NEXT_PUBLIC_ADSENSE_SLOT_RIGHT_TOP;
  const midSlot =
    side === "left"
      ? process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEFT_MID
      : process.env.NEXT_PUBLIC_ADSENSE_SLOT_RIGHT_MID;

  return (
    <aside
      aria-label={side === "left" ? "Left sponsor rail" : "Right sponsor rail"}
      className="hidden xl:flex flex-col gap-6 shrink-0"
    >
      <AdSlot id={`${side}-top`} slot={topSlot} height={250} />
      <AdSlot id={`${side}-mid`} slot={midSlot} height={600} sticky />
    </aside>
  );
}
