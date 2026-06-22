"use client";

import { useState } from "react";

type Submission = {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  country: string;
  phone: string | null;
  website: string | null;
  populations_served: string[];
  services: string[];
  hours: string | null;
  notes: string | null;
  submitted_by_email: string | null;
  status: string;
  reviewer_notes: string | null;
  created_at: string;
};

export function ModerationList({
  submissions,
  adminKey,
}: {
  submissions: Submission[];
  adminKey: string;
}) {
  const [items, setItems] = useState(submissions);
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected" | "duplicate" | "all">("pending");
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = filter === "all" ? items : items.filter((s) => s.status === filter);

  async function setStatus(id: string, status: Submission["status"], reviewer_notes?: string) {
    setBusyId(id);
    try {
      const res = await fetch("/api/admin/moderate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, reviewer_notes, key: adminKey }),
      });
      if (res.ok) {
        setItems((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status, reviewer_notes: reviewer_notes ?? s.reviewer_notes } : s)),
        );
      } else {
        const err = await res.json();
        alert("Failed: " + (err.error ?? res.status));
      }
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      <div className="mt-5 flex flex-wrap gap-1.5 text-xs">
        {(["pending", "approved", "rejected", "duplicate", "all"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={
              "rounded-full border px-3 py-1 transition " +
              (filter === s
                ? "border-brand bg-brand text-white"
                : "border-ink-muted/30 hover:border-brand")
            }
          >
            {s} ({s === "all" ? items.length : items.filter((x) => x.status === s).length})
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-ink-muted">No submissions with status "{filter}".</p>
      )}

      <ul className="mt-6 space-y-3">
        {filtered.map((s) => (
          <li key={s.id} className="rounded-lg border border-brand-light/60 bg-white p-4">
            <div className="flex items-baseline justify-between gap-2">
              <div>
                <p className="font-semibold text-ink">{s.name}</p>
                <p className="text-sm text-ink-muted">
                  {s.address}, {s.city}, {s.region}, {s.country}
                </p>
              </div>
              <span
                className={
                  "shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase " +
                  (s.status === "pending"
                    ? "bg-accent/20 text-amber-900"
                    : s.status === "approved"
                    ? "bg-brand-light/40 text-brand-dark"
                    : "bg-paper text-ink-muted")
                }
              >
                {s.status}
              </span>
            </div>

            <div className="mt-2 grid gap-2 text-sm md:grid-cols-2">
              {s.phone && <p>📞 {s.phone}</p>}
              {s.website && (
                <p>
                  🌐{" "}
                  <a className="text-brand underline" href={s.website} target="_blank" rel="noreferrer">
                    {s.website}
                  </a>
                </p>
              )}
              {s.hours && <p>🕒 {s.hours}</p>}
              {s.submitted_by_email && <p>✉ {s.submitted_by_email}</p>}
            </div>

            {s.populations_served.length > 0 && (
              <p className="mt-2 text-xs text-ink-muted">
                Serves: {s.populations_served.join(", ")}
              </p>
            )}
            {s.services.length > 0 && (
              <p className="mt-1 text-xs text-ink-muted">Services: {s.services.join(", ")}</p>
            )}
            {s.notes && (
              <p className="mt-2 whitespace-pre-wrap rounded bg-paper p-2 text-sm text-ink-soft">
                {s.notes}
              </p>
            )}

            <p className="mt-3 text-[10px] text-ink-muted">
              Submitted {new Date(s.created_at).toLocaleString()}
            </p>

            {s.status === "pending" && (
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  disabled={busyId === s.id}
                  onClick={() => setStatus(s.id, "approved")}
                  className="rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
                >
                  Approve (mark for promotion)
                </button>
                <button
                  disabled={busyId === s.id}
                  onClick={() => setStatus(s.id, "duplicate")}
                  className="rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
                >
                  Duplicate
                </button>
                <button
                  disabled={busyId === s.id}
                  onClick={() => {
                    const reason = prompt("Reason for rejection (optional):") ?? "";
                    setStatus(s.id, "rejected", reason);
                  }}
                  className="rounded-md bg-danger px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
                >
                  Reject
                </button>
              </div>
            )}

            {s.status !== "pending" && (
              <button
                disabled={busyId === s.id}
                onClick={() => setStatus(s.id, "pending")}
                className="mt-3 rounded-md border border-ink-muted/30 px-3 py-1.5 text-xs font-semibold text-ink-soft disabled:opacity-50"
              >
                Return to pending
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-lg bg-paper p-4 text-xs text-ink-muted">
        <p className="font-semibold text-ink">Note on "approved" status:</p>
        <p className="mt-1">
          Marking a submission "approved" flags it as ready, but does NOT automatically add it to
          the live shelter map. To make a submission appear on the map, copy its details into
          <code className="rounded bg-white px-1">data/shelters.json</code> (geocode the address
          first), commit, and push. A future version will automate this.
        </p>
      </div>
    </>
  );
}
