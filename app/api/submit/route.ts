import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { getServiceClient, SUPABASE_CONFIGURED } from "@/lib/supabase";

const REQUIRED = ["name", "address", "city", "region", "country"] as const;
const ALLOWED_COUNTRIES = new Set(["US", "CA"]);

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  if (!json) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  for (const k of REQUIRED) {
    if (typeof json[k] !== "string" || !json[k].trim()) {
      return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
  }
  if (!ALLOWED_COUNTRIES.has(json.country)) {
    return NextResponse.json({ error: "Country must be US or CA" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ip_hash = crypto.createHash("sha256").update(ip).digest("hex");

  if (!SUPABASE_CONFIGURED) {
    // No DB configured yet — still acknowledge so the form works on first deploy.
    console.log("[submit] Supabase not configured, dropping submission:", json.name);
    return NextResponse.json({ ok: true, queued: false });
  }

  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });

  const { error } = await sb.from("shelter_submissions").insert({
    name: json.name.trim(),
    address: json.address.trim(),
    city: json.city.trim(),
    region: json.region.trim().toUpperCase(),
    country: json.country,
    phone: json.phone || null,
    website: json.website || null,
    populations_served: Array.isArray(json.populationsServed) ? json.populationsServed : [],
    services: Array.isArray(json.services) ? json.services : [],
    hours: json.hours || null,
    notes: json.notes || null,
    submitted_by_email: json.email || null,
    ip_hash,
  });

  if (error) {
    console.error("submit insert failed", error);
    return NextResponse.json({ error: "Could not save submission" }, { status: 500 });
  }
  return NextResponse.json({ ok: true, queued: true });
}
