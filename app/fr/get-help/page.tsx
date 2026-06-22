import Link from "next/link";

export const metadata = {
  title: "Lignes de crise — aide 24h/24 aux États-Unis et au Canada",
  description:
    "Lignes téléphoniques gratuites 24h/24 pour refuge, crise de santé mentale, violence conjugale, vétérans, jeunes et LGBTQ+ aux États-Unis et au Canada. Nombreuses lignes bilingues.",
  alternates: {
    canonical: "/fr/get-help",
    languages: { en: "/get-help", es: "/es/get-help", fr: "/fr/get-help" },
  },
};

type Hotline = {
  name: string;
  number: string;
  display: string;
  who: string;
  notes?: string;
  country: "US" | "CA" | "BOTH";
  category: "emergency" | "shelter" | "mental-health" | "dv" | "youth" | "lgbtq" | "veterans" | "addiction";
};

const HOTLINES: Hotline[] = [
  {
    name: "Urgences (É.-U. et Canada)",
    number: "911",
    display: "911",
    who: "Urgences vitales : médicale, incendie, crime en cours.",
    country: "BOTH",
    category: "emergency",
  },
  {
    name: "211 — Services de santé et sociaux",
    number: "211",
    display: "Composez le 211",
    who: "Ligne gratuite 24h/24 pour références de refuge, nourriture, aide au loyer, santé mentale.",
    notes: "Service francophone disponible dans la plupart des régions canadiennes.",
    country: "BOTH",
    category: "shelter",
  },
  {
    name: "988 — Ligne de crise et de prévention du suicide",
    number: "988",
    display: "Appel ou texto au 988",
    who: "Crise de santé mentale, idées suicidaires, détresse émotionnelle.",
    notes: "Gratuit, confidentiel, 24h/24. Appuyez sur 1 pour la Ligne de crise des vétérans (É.-U.).",
    country: "BOTH",
    category: "mental-health",
  },
  {
    name: "Info-Social 811 (Québec)",
    number: "811",
    display: "Composez 811, option 2",
    who: "Consultation psychosociale, références aux services communautaires au Québec.",
    notes: "Service francophone 24h/24, gratuit.",
    country: "CA",
    category: "mental-health",
  },
  {
    name: "SAMHSA — Ligne d'aide nationale (É.-U.)",
    number: "1-800-662-4357",
    display: "1-800-662-HELP",
    who: "Références gratuites et confidentielles pour traitement de dépendances et santé mentale.",
    notes: "Anglais et espagnol, 24h/24.",
    country: "US",
    category: "addiction",
  },
  {
    name: "SOS violence conjugale (Québec)",
    number: "1-800-363-9010",
    display: "1-800-363-9010",
    who: "Aide et hébergement pour les victimes de violence conjugale au Québec.",
    notes: "Gratuit, confidentiel, 24h/24. Service en français.",
    country: "CA",
    category: "dv",
  },
  {
    name: "Ligne de soutien aux femmes victimes (Ontario)",
    number: "1-866-863-0511",
    display: "1-866-863-0511",
    who: "Soutien et orientation pour femmes en situation de violence en Ontario.",
    notes: "Gratuit, 24h/24.",
    country: "CA",
    category: "dv",
  },
  {
    name: "Ligne de crise des vétérans (É.-U.)",
    number: "988",
    display: "Composez 988 puis appuyez sur 1",
    who: "Vétérans et leurs familles en crise.",
    notes: "Ou textez 838255. Personnel de la VA.",
    country: "US",
    category: "veterans",
  },
  {
    name: "Centre national pour vétérans sans-abri (É.-U.)",
    number: "1-877-424-3838",
    display: "1-877-424-3838",
    who: "Vétérans sans-abri ou à risque.",
    notes: "Gratuit, 24h/24. Connexion aux ressources VA.",
    country: "US",
    category: "veterans",
  },
  {
    name: "Jeunesse, J'écoute (Canada)",
    number: "1-800-668-6868",
    display: "1-800-668-6868 / Texto AIDE au 686868",
    who: "Toute personne de moins de 20 ans au Canada.",
    notes: "Gratuit, confidentiel, 24h/24 en français et en anglais.",
    country: "CA",
    category: "youth",
  },
  {
    name: "National Runaway Safeline (É.-U.)",
    number: "1-800-786-2929",
    display: "1-800-RUNAWAY",
    who: "Jeunes de moins de 21 ans envisageant de fuguer ou déjà dans la rue.",
    notes: "Gratuit, confidentiel, 24h/24. Ne contacte pas les parents sans autorisation.",
    country: "US",
    category: "youth",
  },
  {
    name: "Trans Lifeline",
    number: "1-877-330-6366",
    display: "1-877-330-6366 (CA) / 1-877-565-8860 (É.-U.)",
    who: "Personnes trans en crise. Opérateurs trans.",
    notes: "Gratuit. Heures variables — vérifier le site web.",
    country: "BOTH",
    category: "lgbtq",
  },
  {
    name: "Interligne (Québec — LGBTQ+)",
    number: "1-888-505-1010",
    display: "1-888-505-1010",
    who: "Soutien LGBTQ+ par téléphone et clavardage.",
    notes: "Service en français. Heures étendues — voir interligne.co.",
    country: "CA",
    category: "lgbtq",
  },
];

const CATEGORY_LABEL: Record<Hotline["category"], string> = {
  emergency: "Urgence",
  shelter: "Références de refuge",
  "mental-health": "Crise de santé mentale",
  dv: "Violence conjugale",
  youth: "Jeunes et fugueurs",
  lgbtq: "LGBTQ+",
  veterans: "Vétérans",
  addiction: "Usage de substances",
};

const ORDER: Hotline["category"][] = [
  "emergency",
  "shelter",
  "mental-health",
  "dv",
  "youth",
  "lgbtq",
  "veterans",
  "addiction",
];

export default function GetHelpFr() {
  return (
    <main lang="fr" className="mx-auto max-w-5xl px-4 py-8">
      <header className="rounded-xl bg-danger/10 border border-danger/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-danger">
          En cas de danger immédiat
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Composez le 911 ou le 988 maintenant.</h1>
        <p className="mt-2 text-ink-soft">
          Le <strong>988</strong> est la ligne de crise et de prévention du suicide aux É.-U. et au
          Canada — gratuit, confidentiel, 24h/24. Le <strong>911</strong> est pour les urgences
          médicales ou de sécurité immédiates.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="tel:911" className="rounded-md bg-danger px-4 py-2 font-semibold text-white">
            Appeler le 911
          </a>
          <a href="tel:988" className="rounded-md bg-ink px-4 py-2 font-semibold text-white">
            Appeler le 988
          </a>
        </div>
      </header>

      <p className="mt-6 text-xs">
        <Link href="/get-help" className="text-brand underline mr-3">
          English
        </Link>
        <Link href="/es/get-help" className="text-brand underline">
          Español
        </Link>
      </p>

      <p className="mt-4 text-ink-soft">
        Tous les numéros ci-dessous sont gratuits, confidentiels et répondus par du personnel
        formé. Pour les lignes américaines, demandez "French" ou attendez l'option française si
        disponible.
      </p>

      {ORDER.map((cat) => {
        const items = HOTLINES.filter((h) => h.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className="mt-10">
            <h2 className="text-xl font-semibold text-ink">{CATEGORY_LABEL[cat]}</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {items.map((h) => (
                <div
                  key={h.name + h.number}
                  className="rounded-lg border border-brand-light/60 bg-white p-4"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold text-ink">{h.name}</p>
                    <span className="text-[10px] rounded bg-paper px-1.5 py-0.5 text-ink-muted">
                      {h.country === "BOTH" ? "É.-U. et Canada" : h.country === "US" ? "É.-U." : "Canada"}
                    </span>
                  </div>
                  <a
                    href={`tel:${h.number.replace(/[^0-9+]/g, "")}`}
                    className="mt-1 block text-lg font-semibold text-brand"
                  >
                    {h.display}
                  </a>
                  <p className="mt-1 text-sm text-ink-soft">{h.who}</p>
                  {h.notes && <p className="mt-2 text-xs text-ink-muted">{h.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-12 rounded-lg bg-white p-6 border border-brand-light/60">
        <h2 className="text-lg font-semibold text-ink">Besoin d'un lit ce soir ?</h2>
        <p className="mt-2 text-ink-soft">
          La façon la plus rapide de trouver un lit disponible est de composer le{" "}
          <strong>211</strong> depuis un téléphone local — ils ont les données en direct de la
          capacité des refuges. Ou utilisez le{" "}
          <Link href="/fr/find-help" className="text-brand underline">
            chercheur d'aide
          </Link>{" "}
          et appelez directement les refuges les plus proches.
        </p>
      </div>
    </main>
  );
}
