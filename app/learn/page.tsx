import Link from "next/link";
import { getAllArticleMeta } from "@/lib/articles";
import { RailedLayout } from "@/components/RailedLayout";

export const metadata = {
  title: "Learn about homelessness",
  description:
    "Plain-language guides on the causes of homelessness, who is affected, what works to reduce it, and how to help.",
};

export default function LearnIndex() {
  const articles = getAllArticleMeta();
  const grouped = articles.reduce<Record<string, typeof articles>>((acc, a) => {
    acc[a.category] = acc[a.category] ?? [];
    acc[a.category].push(a);
    return acc;
  }, {});
  const order = ["Foundations", "Populations", "Solutions", "Action", "General"];
  return (
    <RailedLayout>
    <section className="mx-auto max-w-4xl px-4 py-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-ink">Learn about homelessness</h1>
          <p className="mt-2 text-ink-soft">
            Short, plain-language explanations of what causes homelessness, what works to reduce it,
            and how to help. Sources and citations are linked inline where they exist.
          </p>
        </div>
        <a
          href="/feed.xml"
          className="rounded-md border border-brand-light/60 px-3 py-1.5 text-xs font-medium text-ink-muted hover:border-brand hover:text-brand"
        >
          📡 RSS feed
        </a>
      </header>

      <div className="mt-8 space-y-10">
        {order
          .filter((cat) => grouped[cat])
          .map((cat) => (
            <div key={cat}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{cat}</h2>
              <ul className="mt-3 grid gap-3 md:grid-cols-2">
                {grouped[cat].map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/learn/${a.slug}`}
                      className="block rounded-lg border border-brand-light/60 bg-white p-4 hover:border-brand"
                    >
                      <p className="font-semibold text-ink">{a.title}</p>
                      <p className="mt-1 text-sm text-ink-soft">{a.summary}</p>
                      <p className="mt-2 text-xs text-ink-muted">{a.readMinutes} min read</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
    </RailedLayout>
  );
}
