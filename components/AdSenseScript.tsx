"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getStoredConsent } from "./ConsentBanner";

/**
 * Loads the Google AdSense Auto Ads script if both:
 *   1. NEXT_PUBLIC_ADSENSE_CLIENT is set (publisher id like `ca-pub-XXXX`)
 *   2. The visitor has accepted cookies via the consent banner
 *
 * If either is false, no AdSense code is loaded — no requests, no cookies.
 */
export function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    const onChange = () => setConsent(getStoredConsent());
    window.addEventListener("hh-consent-change", onChange);
    return () => window.removeEventListener("hh-consent-change", onChange);
  }, []);

  if (!client) return null;
  if (consent !== "accepted") return null;

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
