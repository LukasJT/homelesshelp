import { getArticle, getArticleSlugs } from "@/lib/articles";
import { makeOgImage } from "@/components/ogTemplate";

export const runtime = "nodejs";
export const alt = "HomelessHelp article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return getArticleSlugs().map((slug) => ({ id: slug, params: { slug } }));
}

export default async function ArticleOG({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  return makeOgImage({
    eyebrow: article.category,
    title: article.title,
    subtitle: article.summary,
  });
}
