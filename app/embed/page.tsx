"use client";

import Link from "next/link";
import { useState } from "react";
import { RailedLayout } from "@/components/RailedLayout";

const EMBED_URL = "https://homelesshelp.net/embed/map";

const SNIPPET = `<iframe
  src="${EMBED_URL}"
  width="100%"
  height="600"
  style="border:0; max-width: 100%; min-height: 500px;"
  loading="lazy"
  allow="geolocation"
  title="HomelessHelp shelter map">
</iframe>`;

export default function EmbedInstructions() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <RailedLayout>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">For partners</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Embed the HomelessHelp map</h1>
        <p className="mt-3 text-lg text-ink-soft">
          Add the full HomelessHelp shelter directory to your own website with a single
          iframe. Free, no API key, no attribution registration. Good fit for shelter websites,
          city pages, news articles, and university resource pages.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Copy this snippet</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Paste anywhere HTML can be embedded — a CMS block, a Squarespace HTML element, a
            WordPress custom HTML widget, a Notion embed, etc.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-ink-muted/30 bg-paper p-4 text-xs">
            <code>{SNIPPET}</code>
          </pre>
          <button
            onClick={copy}
            className={
              "mt-2 rounded-md px-4 py-2 text-sm font-semibold text-white " +
              (copied ? "bg-brand-dark" : "bg-brand")
            }
          >
            {copied ? "Copied ✓" : "Copy to clipboard"}
          </button>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Live preview</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-brand-light/60">
            <iframe
              src={EMBED_URL}
              style={{ border: 0, width: "100%", height: 600 }}
              loading="lazy"
              allow="geolocation"
              title="HomelessHelp shelter map preview"
            />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Options</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Height:</strong> adjust the <code>height</code>{" "}
              attribute. 500-800 pixels works well. Use <code>min-height</code> with{" "}
              <code>height: 100vh</code> for a full-screen layout.
            </li>
            <li>
              <strong className="text-ink">Width:</strong> we recommend <code>width="100%"</code>{" "}
              with a CSS <code>max-width</code> on the parent container.
            </li>
            <li>
              <strong className="text-ink">Geolocation:</strong> include{" "}
              <code>allow="geolocation"</code> so the "Use my location" button works for visitors
              who consent.
            </li>
            <li>
              <strong className="text-ink">Lazy loading:</strong> we recommend{" "}
              <code>loading="lazy"</code> so the map only loads when scrolled into view.
            </li>
            <li>
              <strong className="text-ink">Direct link:</strong> if iframe isn't an option, just
              link to <a className="text-brand underline" href="/map">/map</a> on
              homelesshelp.net — the page is mobile-responsive.
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl bg-paper p-5">
          <h2 className="text-lg font-semibold text-ink">Attribution</h2>
          <p className="mt-2 text-sm text-ink-soft">
            The embed includes a small "Powered by HomelessHelp.net" link in the corner. If you
            disable that link via CSS, please add visible attribution elsewhere on the page (e.g.
            in your footer or a credits section). The HomelessHelp data and code are CC-BY-4.0;
            keeping the attribution visible is what makes the license work.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Who this is for</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Shelter and service-provider websites</strong> — embed
              the directory so visitors can find adjacent resources.
            </li>
            <li>
              <strong className="text-ink">Municipal "resource hub" pages</strong> — a city or
              county social-services site that wants to surface live shelter data.
            </li>
            <li>
              <strong className="text-ink">News articles</strong> — give readers an interactive
              map alongside your reporting.
            </li>
            <li>
              <strong className="text-ink">Library and university resource guides</strong> — easy
              to drop into a LibGuide or Canvas page.
            </li>
            <li>
              <strong className="text-ink">Outreach team intake pages</strong> — let people in
              crisis explore options before calling.
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-brand-light/60 bg-white p-5 text-sm">
          <p className="font-semibold text-ink">Questions or want a customized embed?</p>
          <p className="mt-2 text-ink-soft">
            Open an issue at{" "}
            <a
              className="text-brand underline"
              href="https://github.com/LukasJT/homelesshelp/issues"
              target="_blank"
              rel="noreferrer"
            >
              github.com/LukasJT/homelesshelp/issues
            </a>
            . We can advise on responsive sizing, filtering the map to a specific region, or
            integrating other parts of the directory.
          </p>
        </section>
      </article>
    </RailedLayout>
  );
}
