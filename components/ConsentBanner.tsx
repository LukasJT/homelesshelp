"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hh_consent";

type Consent = "accepted" | "declined" | null;

export function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "declined" ? (v as Consent) : null;
}

export function setStoredConsent(value: Exclude<Consent, null>) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  // Also set a cookie so server-rendered pages can react if needed
  document.cookie = `hh_consent=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
  // Notify the rest of the app
  window.dispatchEvent(new Event("hh-consent-change"));
}

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) setShow(true);
  }, []);

  if (!show) return null;

  function choose(value: "accepted" | "declined") {
    setStoredConsent(value);
    setShow(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-4 md:bottom-4 md:max-w-md"
    >
      <div className="rounded-xl border border-brand-light/60 bg-white p-4 shadow-lg">
        <p className="text-sm font-semibold text-ink">Cookies</p>
        <p className="mt-1 text-xs text-ink-soft">
          We use cookies only to remember this preference and (if you accept) to show ads that
          help keep the site free. We never sell personal data. See our{" "}
          <Link href="/privacy" className="text-brand underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => choose("accepted")}
            className="rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white"
          >
            Accept all
          </button>
          <button
            onClick={() => choose("declined")}
            className="rounded-md border border-ink-muted/30 px-3 py-1.5 text-xs font-semibold text-ink-soft hover:border-brand"
          >
            Decline non-essential
          </button>
          <Link
            href="/privacy"
            className="ml-auto self-center text-xs text-ink-muted hover:text-brand"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Inline button that re-opens the consent prompt and resets the stored value.
 * Used in the footer so users can revisit their choice later.
 */
export function ManageCookiesButton() {
  function reset() {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEY);
    document.cookie = "hh_consent=; Path=/; Max-Age=0; SameSite=Lax";
    window.dispatchEvent(new Event("hh-consent-change"));
    window.location.reload();
  }
  return (
    <button onClick={reset} className="text-xs text-ink-muted hover:text-brand">
      Manage cookies
    </button>
  );
}
