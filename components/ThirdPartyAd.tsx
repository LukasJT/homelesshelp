"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { adFrames, adsEnabled } from "@/lib/ad-config";
import { routeAllowsAds } from "@/lib/ad-policy";
import { getStoredConsent } from "./ConsentBanner";

type Format = keyof typeof adFrames;
export function ThirdPartyAd({ format = "rectangle", className = "" }: { format?: Format; className?: string }) {
  const pathname = usePathname();
  const host = useRef<HTMLDivElement>(null);
  const [consent, setConsent] = useState(false);
  const [visible, setVisible] = useState(false);
  const frame = adFrames[format];
  useEffect(() => {
    const update = () => setConsent(getStoredConsent() === "accepted"); update();
    window.addEventListener("hh-consent-change", update);
    return () => window.removeEventListener("hh-consent-change", update);
  }, []);
  useEffect(() => {
    if (!host.current) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { rootMargin: "300px" });
    observer.observe(host.current); return () => observer.disconnect();
  }, []);
  if (!adsEnabled || !routeAllowsAds(pathname)) return null;
  return <div ref={host} className={`mx-auto my-8 max-w-full text-center ${className}`} aria-label="Advertisement">
    <p className="mb-1 text-[10px] uppercase tracking-wider text-ink-muted">Advertisement</p>
    {consent && visible ? <iframe title="Advertisement" src={frame.src} width={frame.width} height={frame.height}
      loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
      className="mx-auto max-w-full border-0" /> : <div style={{ minHeight: frame.height, maxWidth: frame.width }} className="mx-auto w-full" />}
  </div>;
}
