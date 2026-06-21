import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const LEARN_DIR = path.join(process.cwd(), "content", "learn");

export interface ArticleMeta {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readMinutes: number;
}

export interface Article extends ArticleMeta {
  html: string;
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(LEARN_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getArticleMeta(slug: string): ArticleMeta {
  const file = fs.readFileSync(path.join(LEARN_DIR, `${slug}.md`), "utf-8");
  const { data, content } = matter(file);
  const words = content.split(/\s+/).length;
  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    category: String(data.category ?? "General"),
    readMinutes: Math.max(1, Math.round(words / 220)),
  };
}

export async function getArticle(slug: string): Promise<Article> {
  const file = fs.readFileSync(path.join(LEARN_DIR, `${slug}.md`), "utf-8");
  const { data, content } = matter(file);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  const words = content.split(/\s+/).length;
  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    category: String(data.category ?? "General"),
    readMinutes: Math.max(1, Math.round(words / 220)),
    html: processed.toString(),
  };
}

export function getAllArticleMeta(): ArticleMeta[] {
  return getArticleSlugs().map(getArticleMeta);
}
