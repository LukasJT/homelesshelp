import { NextResponse } from "next/server";
import { getAllShelters } from "@/lib/shelters";
import { getPublicClient, SUPABASE_CONFIGURED } from "@/lib/supabase";

export const revalidate = 300;

export async function GET() {
  if (!SUPABASE_CONFIGURED) {
    return NextResponse.json({ source: "seed", shelters: getAllShelters() });
  }
  const sb = getPublicClient();
  if (!sb) return NextResponse.json({ source: "seed", shelters: getAllShelters() });

  const { data, error } = await sb.from("shelters").select("*");
  if (error || !data || data.length === 0) {
    return NextResponse.json({ source: "seed-fallback", shelters: getAllShelters() });
  }
  const shelters = data.map((r: any) => ({
    id: r.id,
    name: r.name,
    address: r.address,
    city: r.city,
    region: r.region,
    country: r.country,
    lat: r.lat,
    lng: r.lng,
    phone: r.phone ?? undefined,
    website: r.website ?? undefined,
    populationsServed: r.populations_served ?? [],
    services: r.services ?? [],
    hours: r.hours ?? undefined,
    notes: r.notes ?? undefined,
  }));
  return NextResponse.json({ source: "db", shelters });
}
