import { getAllShelters } from "@/lib/shelters";

function csvEscape(v: unknown): string {
  if (v === null || v === undefined) return "";
  const s = String(v);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export async function GET() {
  const shelters = getAllShelters();
  const header = [
    "id",
    "name",
    "address",
    "city",
    "region",
    "country",
    "lat",
    "lng",
    "phone",
    "website",
    "populations_served",
    "services",
    "hours",
    "notes",
  ];
  const rows = shelters.map((s) =>
    [
      s.id,
      s.name,
      s.address,
      s.city,
      s.region,
      s.country,
      s.lat,
      s.lng,
      s.phone ?? "",
      s.website ?? "",
      s.populationsServed.join("|"),
      s.services.join("|"),
      s.hours ?? "",
      s.notes ?? "",
    ]
      .map(csvEscape)
      .join(","),
  );
  // BOM so Excel recognizes UTF-8
  const body = "﻿" + [header.join(","), ...rows].join("\r\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="homelesshelp-shelters.csv"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
