import type { MetadataRoute } from "next";
import { getAllCitySlugs, getAllShelters } from "@/lib/shelters";
import { getArticleSlugs } from "@/lib/articles";
import { getAllPopulationProfiles } from "@/lib/populations";
import { getAllServiceProfiles } from "@/lib/services";
import { getAllRegions } from "@/lib/regions";

const BASE = "https://homelesshelp.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/map`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/city`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/get-help`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/help-out`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/find-help`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/es`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/es/find-help`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/es/get-help`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/es/volunteer`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/fr`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/fr/find-help`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/fr/get-help`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/fr/volunteer`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/languages`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/volunteer`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/learn`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/stats`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/data`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/timeline`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/states`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/embed`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => ({
    url: `${BASE}/learn/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE}/city/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = getAllShelters().map((s) => ({
    url: `${BASE}/resource/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const populationRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/for`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...getAllPopulationProfiles().map((p) => ({
      url: `${BASE}/for/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...getAllServiceProfiles().map((p) => ({
      url: `${BASE}/service/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  const stateRoutes: MetadataRoute.Sitemap = getAllRegions().map((r) => ({
    url: `${BASE}/states/${r.code.toLowerCase()}`,
    lastModified: now,
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
