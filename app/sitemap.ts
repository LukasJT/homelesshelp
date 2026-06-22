import type { MetadataRoute } from "next";
import { getAllCitySlugs, getAllShelters } from "@/lib/shelters";
import { getArticleSlugs } from "@/lib/articles";

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
    { url: `${BASE}/volunteer`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/learn`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
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

  return [...staticRoutes, ...articleRoutes, ...cityRoutes, ...resourceRoutes];
}
