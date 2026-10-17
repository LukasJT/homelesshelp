"use client";

import { useEffect, useState } from "react";
import { getStoredConsent } from "./ConsentBanner";

type Size = "rectangle" | "leaderboard";

export function AdsterraBanner({ size }: { size: Size }) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const update = () => setConsent(getStoredConsent() === "accepted");
    update();
    window.addEventListener("hh-consent-change", update);
    return () => window.removeEventListener("hh-consent-change", update);
  }, []);

  if (!consent) return null;

  const rectangle = size === "rectangle";
  return (
    <aside aria-label="Advertisement" className={rectangle ? "my-10 flex justify-center" : "my-8 hidden justify-center lg:flex"}>
      <div>
        <p className="mb-2 text-center text-[10px] uppercase tracking-widest text-ink-muted">Advertisement</p>
        <iframe
          title="Advertisement"
          src={rectangle ? "/ad-300x250.html" : "/ad-728x90.html"}
          width={rectangle ? 300 : 728}
          height={rectangle ? 250 : 90}
          loading="lazy"
          className="border-0"
        />
      </div>
    </aside>
  );
}
