import { NextResponse } from "next/server";
import { getServiceClient, SUPABASE_CONFIGURED } from "@/lib/supabase";

const VALID_STATUSES = new Set(["pending", "approved", "rejected", "duplicate"]);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const expected = process.env.ADMIN_SECRET;
  if (!expected) {
    return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
  }
  if (body.key !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!body.id || typeof body.id !== "string") {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  if (!VALID_STATUSES.has(body.status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  if (!SUPABASE_CONFIGURED) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });

  const { error } = await sb
    .from("shelter_submissions")
    .update({
      status: body.status,
      reviewer_notes: body.reviewer_notes ?? null,
    })
    .eq("id", body.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
