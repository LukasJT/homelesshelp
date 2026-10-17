import type { MetadataRoute } from "next";
import { getAllCitySlugs, getAllShelters } from "@/lib/shelters";
import { getArticleSlugs } from "@/lib/articles";
import { getAllPopulationProfiles } from "@/lib/populations";
import { getAllServiceProfiles } from "@/lib/services";
import { getAllRegions } from "@/lib/regions";

const BASE = "https://www.homelesshelp.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/map`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/city`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/get-help`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/help-out`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/find-help`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/es`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/es/find-help`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/es/get-help`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/es/volunteer`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/fr`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/fr/find-help`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/fr/get-help`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/fr/volunteer`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/languages`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/volunteer`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/learn`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/submit`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/research`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/stats`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/glossary`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/data`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/timeline`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/states`, changeFrequency: "yearly", priority: 0.75 },
    { url: `${BASE}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/press`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/embed`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => ({
    url: `${BASE}/learn/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE}/city/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = getAllShelters().map((s) => ({
    url: `${BASE}/resource/${s.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const populationRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/for`, changeFrequency: "monthly", priority: 0.8 },
    ...getAllPopulationProfiles().map((p) => ({
      url: `${BASE}/for/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/service`, changeFrequency: "monthly", priority: 0.8 },
    ...getAllServiceProfiles().map((p) => ({
      url: `${BASE}/service/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  const stateRoutes: MetadataRoute.Sitemap = getAllRegions().map((r) => ({
    url: `${BASE}/states/${r.code.toLowerCase()}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...cityRoutes,
    ...resourceRoutes,
    ...populationRoutes,
    ...serviceRoutes,
    ...stateRoutes,
  ];
}
