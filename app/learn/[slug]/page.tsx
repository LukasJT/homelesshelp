import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticleSlugs, getAllArticleMeta } from "@/lib/articles";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const slugs = getArticleSlugs();
  if (!slugs.includes(params.slug)) return {};
  const article = await getArticle(params.slug);
  return { title: article.title, description: article.summary };
}

export default async function ArticlePage({ params }: Params) {
  const slugs = getArticleSlugs();
  if (!slugs.includes(params.slug)) notFound();
  const article = await getArticle(params.slug);
  const others = getAllArticleMeta().filter((a) => a.slug !== params.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
        <Link href="/learn" className="hover:text-brand">Learn</Link> · {article.category}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-ink">{article.title}</h1>
      <p className="mt-3 text-lg text-ink-soft">{article.summary}</p>
      <p className="mt-2 text-xs text-ink-muted">{article.readMinutes} min read</p>

      <div
        className="prose-article mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />

      <hr className="my-12 border-brand-light/40" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Keep reading</p>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {others.slice(0, 4).map((a) => (
            <li key={a.slug}>
              <Link
                href={`/learn/${a.slug}`}
                className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
              >
                <p className="font-semibold text-ink">{a.title}</p>
                <p className="mt-1 text-sm text-ink-muted">{a.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
