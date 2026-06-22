import Link from "next/link";
import { RailedLayout } from "@/components/RailedLayout";
import {
  FIRST_CLASS,
  MACHINE_TRANSLATED,
  INDIGENOUS,
  googleTranslateUrl,
} from "@/lib/languages";

export const metadata = {
  title: "Languages — Idiomas — Langues — 语言",
  description:
    "HomelessHelp is hand-translated in English, Spanish, and French. For 50+ other languages spoken in North America, jump to Google-translated versions of our key pages.",
};

const KEY_PAGES = [
  { path: "/", label: "Home" },
  { path: "/find-help", label: "Find help near me" },
  { path: "/get-help", label: "Crisis hotlines" },
  { path: "/volunteer", label: "Volunteer near me" },
];

export default function LanguagesPage() {
  return (
    <RailedLayout>
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold text-ink">Languages</h1>
        <p className="mt-2 text-ink-soft">
          HomelessHelp is fully translated by hand in <strong>English</strong>,{" "}
          <strong>Spanish</strong>, and <strong>French</strong>. For 50+ other languages spoken
          across North America, pick yours below to jump to a Google-translated version of the
          key pages.
        </p>
        <p className="mt-2 text-xs text-ink-muted">
          Machine translation is imperfect — call 211 for live help if anything is unclear. Most
          regions have multilingual operators.
        </p>

        {/* First-class languages */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Fully translated</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <LangCard
              flag="🇺🇸🇨🇦"
              native="English"
              english="English"
              links={[
                { href: "/", label: "Home" },
                { href: "/find-help", label: "Find help" },
                { href: "/get-help", label: "Crisis hotlines" },
                { href: "/volunteer", label: "Volunteer" },
              ]}
            />
            <LangCard
              flag="🇲🇽🇪🇸"
              native="Español"
              english="Spanish"
              links={[
                { href: "/es", label: "Inicio" },
                { href: "/es/find-help", label: "Buscar ayuda" },
                { href: "/es/get-help", label: "Líneas de crisis" },
                { href: "/es/volunteer", label: "Ser voluntario" },
              ]}
            />
            <LangCard
              flag="🇨🇦🇫🇷"
              native="Français"
              english="French"
              links={[
                { href: "/fr", label: "Accueil" },
                { href: "/fr/find-help", label: "Trouver de l'aide" },
                { href: "/fr/get-help", label: "Lignes de crise" },
                { href: "/fr/volunteer", label: "Bénévolat" },
              ]}
            />
          </div>
        </section>

        {/* Machine-translated languages */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">
            {MACHINE_TRANSLATED.length} more languages (Google Translate)
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Each link opens the live English page rendered into the chosen language by Google
            Translate. Quality varies. For best results, use Chrome/Edge's built-in "Translate
            this page" — or use these direct links.
          </p>

          <ul className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {MACHINE_TRANSLATED.map((l) => (
              <li
                key={l.code}
                className="rounded-lg border border-brand-light/60 bg-white p-4"
              >
                <p lang={l.code} className="text-lg font-semibold text-ink">
                  {l.nativeName}
                </p>
                <p className="text-xs text-ink-muted">{l.name}</p>
                {l.contextNote && (
                  <p className="mt-1 text-xs text-ink-muted italic">{l.contextNote}</p>
                )}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {KEY_PAGES.map((p) => (
                    <a
                      key={p.path}
                      href={googleTranslateUrl(l.gtCode ?? l.code, p.path)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-brand-light/60 px-2 py-0.5 text-[11px] text-brand hover:bg-brand-light/30"
                    >
                      {p.label} ↗
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Indigenous languages */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Indigenous languages</h2>
          <p className="mt-1 text-sm text-ink-muted">
            These languages have limited or no machine-translation support but are important to
            acknowledge. If you speak one and want to help us translate, please contact us.
          </p>

          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {INDIGENOUS.map((l) => (
              <li
                key={l.code}
                className="rounded-lg border border-brand-light/60 bg-white p-4"
              >
                <p lang={l.code} className="text-lg font-semibold text-ink">
                  {l.nativeName}
                </p>
                <p className="text-xs text-ink-muted">{l.name}</p>
                {l.contextNote && (
                  <p className="mt-1 text-xs text-ink-muted italic">{l.contextNote}</p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-ink-soft">
            See our <Link href="/for/indigenous" className="text-brand underline">Indigenous resources page</Link> for Indigenous-led shelters and services across
            Turtle Island.
          </p>
        </section>

        <section className="mt-12 rounded-xl bg-paper p-5 text-sm text-ink-soft">
          <p className="font-semibold text-ink">
            How to use your browser's translation
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              <strong>Chrome / Edge / Brave:</strong> right-click anywhere on this page → "Translate
              to&nbsp;…"
            </li>
            <li>
              <strong>Safari (iOS / macOS):</strong> tap the AA icon in the address bar → "Translate
              to&nbsp;…"
            </li>
            <li>
              <strong>Firefox:</strong> address bar will show a translate icon for supported
              languages.
            </li>
          </ul>
        </section>
      </section>
    </RailedLayout>
  );
}

function LangCard({
  flag,
  native,
  english,
  links,
}: {
  flag: string;
  native: string;
  english: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="rounded-xl border border-brand-light/60 bg-white p-4">
      <p className="text-2xl">{flag}</p>
      <p className="mt-2 text-lg font-semibold text-ink">{native}</p>
      <p className="text-xs text-ink-muted">{english}</p>
      <ul className="mt-3 space-y-1 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-brand hover:underline">
              {l.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
