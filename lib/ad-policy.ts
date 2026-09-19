export const SENSITIVE_ARTICLES = new Set([
  "asylum-seekers-and-homelessness",
  "daily-survival-guide",
  "domestic-violence-homelessness",
  "if-you-become-homeless",
  "mental-illness-and-homelessness",
  "reentry-and-homelessness",
]);

const BLOCKED_PREFIXES = [
  "/get-help", "/find-help", "/map", "/resource", "/city", "/service", "/for", "/submit", "/es", "/fr",
];

export function routeAllowsAds(pathname: string) {
  if (BLOCKED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) return false;
  const article = pathname.match(/^\/learn\/([^/]+)\/?$/)?.[1];
  return !article || !SENSITIVE_ARTICLES.has(article);
}
