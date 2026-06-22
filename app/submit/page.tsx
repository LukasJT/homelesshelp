"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { POPULATION_LABEL, SERVICE_LABEL, getShelterById } from "@/lib/shelters";
import { RailedLayout } from "@/components/RailedLayout";

const POPULATIONS = Object.entries(POPULATION_LABEL) as [string, string][];
const SERVICES = Object.entries(SERVICE_LABEL) as [string, string][];

export default function SubmitPage() {
  return (
    <Suspense fallback={null}>
      <SubmitInner />
    </Suspense>
  );
}

function SubmitInner() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const searchParams = useSearchParams();
  const reportId = searchParams.get("report");
  const reportedResource = reportId ? getShelterById(reportId) : undefined;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const populationsServed = Array.from(fd.getAll("populationsServed")).map(String);
    const services = Array.from(fd.getAll("services")).map(String);
    const notesField = String(fd.get("notes") ?? "");
    const reportPrefix = reportId ? `[Report for existing resource id: ${reportId}]\n` : "";
    const payload = {
      name: fd.get("name"),
      address: fd.get("address"),
      city: fd.get("city"),
      region: fd.get("region"),
      country: fd.get("country"),
      phone: fd.get("phone"),
      website: fd.get("website"),
      hours: fd.get("hours"),
      notes: reportPrefix + notesField,
      email: fd.get("email"),
      populationsServed,
      services,
    };
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.queued ? "Thanks — your submission is in our review queue." : "Thanks — received.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <RailedLayout>
    <section className="mx-auto max-w-3xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold text-ink">
          {reportedResource ? "Report an issue" : "Submit a resource"}
        </h1>
        <p className="mt-2 text-ink-soft">
          {reportedResource ? (
            <>
              Reporting an issue with <strong className="text-ink">{reportedResource.name}</strong>{" "}
              ({reportedResource.city}, {reportedResource.region}). Describe what's wrong in the
              Notes field below — wrong phone, closed, hours changed, anything. Other fields are
              optional; only fill in what you know.
            </>
          ) : (
            <>
              Know a shelter, day center, food program, or outreach group that should be on the map?
              Submit it here. We review every submission before it goes live to verify the basics —
              usually within a week.
            </>
          )}
        </p>
      </header>

      {reportedResource && (
        <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm">
          <p className="font-semibold text-amber-900">
            You're reporting an issue with: {reportedResource.name}
          </p>
          <p className="mt-1 text-ink-soft">
            {reportedResource.address}, {reportedResource.city}, {reportedResource.region}
          </p>
          <p className="mt-2 text-xs text-ink-muted">
            Below: use the Notes field to describe what's wrong. Leave other fields blank if you don't
            know — we'll figure it out from your notes.
          </p>
        </div>
      )}

      {status === "success" ? (
        <div className="mt-8 rounded-lg border border-brand bg-brand-light/30 p-6">
          <p className="font-semibold text-brand-dark">{message}</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-3 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white"
          >
            Submit another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-lg border border-brand-light/60 bg-white p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Organization name" name="name" required />
            <Field label="Phone" name="phone" type="tel" placeholder="+1-555-555-5555" />
          </div>
          <Field label="Street address" name="address" required />
          <div className="grid gap-4 md:grid-cols-3">
            <Field label="City" name="city" required />
            <Field label="State / Province" name="region" required placeholder="CA, ON, NY…" />
            <div>
              <label className="block text-sm font-medium text-ink">Country</label>
              <select name="country" required defaultValue="US" className="mt-1 w-full rounded-md border border-ink-muted/30 px-3 py-2 text-sm">
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </div>
          </div>
          <Field label="Website" name="website" type="url" placeholder="https://…" />
          <Field label="Hours" name="hours" placeholder="24/7, or Mon–Fri 9a–5p" />

          <div>
            <p className="text-sm font-medium text-ink">Who does it serve?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {POPULATIONS.map(([k, label]) => (
                <label key={k} className="flex items-center gap-1.5 rounded-full border border-ink-muted/30 bg-paper px-3 py-1 text-xs">
                  <input type="checkbox" name="populationsServed" value={k} className="accent-brand" />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Services offered</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SERVICES.map(([k, label]) => (
                <label key={k} className="flex items-center gap-1.5 rounded-full border border-ink-muted/30 bg-paper px-3 py-1 text-xs">
                  <input type="checkbox" name="services" value={k} className="accent-brand" />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">Notes (eligibility, intake process, anything we should know)</label>
            <textarea name="notes" rows={3} className="mt-1 w-full rounded-md border border-ink-muted/30 px-3 py-2 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">Your email (optional — only used if we need to verify with you)</label>
            <input name="email" type="email" className="mt-1 w-full rounded-md border border-ink-muted/30 px-3 py-2 text-sm" />
          </div>

          {status === "error" && <p className="text-sm text-danger">{message}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-md bg-brand px-5 py-2.5 font-semibold text-white disabled:opacity-50"
          >
            {status === "submitting" ? "Submitting…" : "Submit for review"}
          </button>
        </form>
      )}
    </section>
    </RailedLayout>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-danger">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-ink-muted/30 px-3 py-2 text-sm focus:border-brand focus:outline-none"
      />
    </div>
  );
}
