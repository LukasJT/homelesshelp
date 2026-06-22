"use client";

import { useState } from "react";

interface Props {
  title: string;
  url: string;
  // Optional ISO publication date
  publishedISO?: string;
}

const SITE_NAME = "HomelessHelp";
const PUBLISHER = "HomelessHelp.net";

function fmtAccess(d: Date): { apa: string; mla: string; chicago: string } {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const apaMonthAbbr = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
    "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec.",
  ][d.getMonth()];

  return {
    apa: `${year}, ${apaMonthAbbr} ${day}`,
    mla: `${day} ${months[d.getMonth()].slice(0, 3)}. ${year}`,
    chicago: `${month} ${day}, ${year}`,
  };
}

export function CitationBox({ title, url, publishedISO }: Props) {
  const [copied, setCopied] = useState<"apa" | "mla" | "chicago" | null>(null);
  const now = new Date();
  const access = fmtAccess(now);
  const pub = publishedISO ? new Date(publishedISO) : now;
  const pubYear = pub.getFullYear();

  const apa = `HomelessHelp. (${pubYear}). ${title}. ${PUBLISHER}. Retrieved ${access.apa}, from ${url}`;
  const mla = `"${title}." ${SITE_NAME}, ${PUBLISHER}, ${pubYear}, ${url}. Accessed ${access.mla}.`;
  const chicago = `HomelessHelp. ${pubYear}. "${title}." ${PUBLISHER}. ${url} (accessed ${access.chicago}).`;

  async function copy(text: string, which: "apa" | "mla" | "chicago") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <section className="mt-12 rounded-xl border border-brand-light/60 bg-paper p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold text-ink">How to cite this page</h2>
        <p className="text-xs text-ink-muted">
          For school papers and academic work. Click any citation to copy.
        </p>
      </div>

      <ul className="mt-4 space-y-3 text-sm">
        <CitationLine
          label="APA 7th"
          value={apa}
          highlighted={copied === "apa"}
          onClick={() => copy(apa, "apa")}
        />
        <CitationLine
          label="MLA 9th"
          value={mla}
          highlighted={copied === "mla"}
          onClick={() => copy(mla, "mla")}
        />
        <CitationLine
          label="Chicago"
          value={chicago}
          highlighted={copied === "chicago"}
          onClick={() => copy(chicago, "chicago")}
        />
      </ul>

      <p className="mt-4 text-xs text-ink-muted">
        Citing primary sources is generally preferred to citing us. Where this article references
        specific studies (e.g. At Home/Chez Soi, HUD AHAR, point-in-time counts), use those
        sources directly in your bibliography when possible. Our <a className="text-brand underline" href="/research">Research hub</a> links to the primary documents.
      </p>
    </section>
  );
}

function CitationLine({
  label,
  value,
  highlighted,
  onClick,
}: {
  label: string;
  value: string;
  highlighted: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className={
          "w-full rounded-md border bg-white p-3 text-left transition " +
          (highlighted
            ? "border-brand ring-1 ring-brand"
            : "border-ink-muted/30 hover:border-brand")
        }
        title="Click to copy"
      >
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">{label}</span>
          <span className="text-[10px] text-ink-muted">
            {highlighted ? "Copied ✓" : "Click to copy"}
          </span>
        </div>
        <p className="mt-1 text-ink-soft">{value}</p>
      </button>
    </li>
  );
}
