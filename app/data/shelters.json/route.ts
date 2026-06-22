import { getAllShelters } from "@/lib/shelters";

export async function GET() {
  const shelters = getAllShelters();
  const payload = {
    license: "CC-BY-4.0",
    attribution: "HomelessHelp.net shelter dataset, retrieved from https://homelesshelp.net/data",
    generated_at: new Date().toISOString(),
    count: shelters.length,
    shelters,
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="homelesshelp-shelters.json"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
