import { getAllArticleMeta, getArticle } from "@/lib/articles";

const BASE = "https://homelesshelp.net";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = getAllArticleMeta();
  const now = new Date().toUTCString();

  const items = await Promise.all(
    articles.map(async (meta) => {
      const article = await getArticle(meta.slug);
      const url = `${BASE}/learn/${meta.slug}`;
      return `
    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(article.summary)}</description>
      <category>${escape(article.category)}</category>
      <pubDate>${now}</pubDate>
    </item>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>HomelessHelp Learn</title>
    <link>${BASE}/learn</link>
    <description>Plain-language articles on the causes of homelessness, what works, and how to help — from HomelessHelp.net.</description>
    <language>en-us</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${now}</lastBuildDate>
    ${items.join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
