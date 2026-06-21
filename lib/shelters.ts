import sheltersData from "@/data/shelters.json";

export type Population =
  | "all"
  | "men"
  | "women"
  | "youth"
  | "children"
  | "families"
  | "veterans"
  | "lgbtq"
  | "immigrants"
  | "indigenous";

export type Service =
  | "emergency-shelter"
  | "transitional-housing"
  | "permanent-housing"
  | "supportive-housing"
  | "meals"
  | "food-pantry"
  | "day-services"
  | "showers"
  | "laundry"
  | "mail"
  | "clothing"
  | "case-management"
  | "addiction-recovery"
  | "harm-reduction"
  | "mental-health"
  | "medical"
  | "healthcare"
  | "legal"
  | "education"
  | "job-training"
  | "ESL"
  | "childcare"
  | "outreach";

export interface Shelter {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  country: "US" | "CA";
  lat: number;
  lng: number;
  phone?: string;
  website?: string;
  populationsServed: Population[];
  services: Service[];
  hours?: string;
  notes?: string;
}

export const POPULATION_LABEL: Record<Population, string> = {
  all: "All adults",
  men: "Men",
  women: "Women",
  youth: "Youth (under 25)",
  children: "Children",
  families: "Families",
  veterans: "Veterans",
  lgbtq: "LGBTQ+",
  immigrants: "Immigrants",
  indigenous: "Indigenous",
};

export const SERVICE_LABEL: Record<Service, string> = {
  "emergency-shelter": "Emergency shelter",
  "transitional-housing": "Transitional housing",
  "permanent-housing": "Permanent housing",
  "supportive-housing": "Supportive housing",
  meals: "Meals",
  "food-pantry": "Food pantry",
  "day-services": "Day services",
  showers: "Showers",
  laundry: "Laundry",
  mail: "Mail",
  clothing: "Clothing",
  "case-management": "Case management",
  "addiction-recovery": "Addiction recovery",
  "harm-reduction": "Harm reduction",
  "mental-health": "Mental health",
  medical: "Medical care",
  healthcare: "Healthcare",
  legal: "Legal aid",
  education: "Education",
  "job-training": "Job training",
  ESL: "English classes",
  childcare: "Childcare",
  outreach: "Street outreach",
};

export function getAllShelters(): Shelter[] {
  return sheltersData as Shelter[];
}

export function getShelterById(id: string): Shelter | undefined {
  return getAllShelters().find((s) => s.id === id);
}

// Haversine distance in kilometers
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const sa = Math.sin(dLat / 2);
  const sb = Math.sin(dLng / 2);
  const h =
    sa * sa +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      sb *
      sb;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function kmToMiles(km: number): number {
  return km * 0.621371;
}

export function citySlug(s: { city: string; region: string }): string {
  return (s.city + "-" + s.region)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function unslugCity(slug: string): { city: string; region: string } | null {
  // Reverse lookup via dataset, since the slug loses some characters.
  const match = getAllShelters().find((s) => citySlug(s) === slug);
  if (!match) return null;
  return { city: match.city, region: match.region };
}

export function getSheltersInCity(city: string, region: string): Shelter[] {
  return getAllShelters().filter((s) => s.city === city && s.region === region);
}

export function getAllCitySlugs(): string[] {
  const set = new Set<string>();
  for (const s of getAllShelters()) set.add(citySlug(s));
  return Array.from(set);
}
