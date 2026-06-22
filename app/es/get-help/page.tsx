import Link from "next/link";

export const metadata = {
  title: "Líneas de crisis — ayuda 24/7 en EE. UU. y Canadá",
  description:
    "Líneas telefónicas gratuitas 24/7 para albergue, crisis de salud mental, violencia doméstica, veteranos, jóvenes y LGBTQ+ en EE. UU. y Canadá. Muchas con operadores en español.",
  alternates: {
    canonical: "/es/get-help",
    languages: { en: "/get-help", es: "/es/get-help" },
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
    name: "Emergencias (EE. UU. y Canadá)",
    number: "911",
    display: "911",
    who: "Emergencias que ponen la vida en peligro: médicas, fuego, crimen en progreso.",
    country: "BOTH",
    category: "emergency",
  },
  {
    name: "211 — Servicios de salud y humanos",
    number: "211",
    display: "Marque 211",
    who: "Línea gratuita 24/7 para referencias de albergue, comida, asistencia de alquiler, salud mental.",
    notes: "Operada por United Way (EE. UU.). Operadores en español disponibles en la mayoría de regiones.",
    country: "BOTH",
    category: "shelter",
  },
  {
    name: "988 — Línea de crisis y suicidio",
    number: "988",
    display: "Llame o envíe texto al 988",
    who: "Crisis de salud mental, pensamientos suicidas, angustia emocional.",
    notes: "Gratis, confidencial, 24/7. Presione 1 para la Línea de Crisis de Veteranos.",
    country: "BOTH",
    category: "mental-health",
  },
  {
    name: "SAMHSA — Línea Nacional de Ayuda",
    number: "1-800-662-4357",
    display: "1-800-662-HELP",
    who: "Referencias gratuitas y confidenciales para tratamiento de uso de sustancias y salud mental.",
    notes: "Inglés y español, 24/7.",
    country: "US",
    category: "addiction",
  },
  {
    name: "Línea Nacional de Violencia Doméstica",
    number: "1-800-799-7233",
    display: "1-800-799-SAFE",
    who: "Si está en un hogar o relación insegura.",
    notes: "Texto: AYUDA al 88788. Chat en thehotline.org. Operadores en español.",
    country: "US",
    category: "dv",
  },
  {
    name: "Línea de Crisis para Veteranos (EE. UU.)",
    number: "988",
    display: "Marque 988 y presione 1",
    who: "Veteranos y sus familias en crisis.",
    notes: "O envíe texto al 838255. Conecta con personal de la VA.",
    country: "US",
    category: "veterans",
  },
  {
    name: "Centro Nacional para Veteranos sin Hogar",
    number: "1-877-424-3838",
    display: "1-877-424-3838",
    who: "Veteranos sin hogar o en riesgo de estarlo.",
    notes: "Gratis, 24/7. Conecta con recursos y beneficios de la VA.",
    country: "US",
    category: "veterans",
  },
  {
    name: "Línea Nacional para Jóvenes Fugitivos",
    number: "1-800-786-2929",
    display: "1-800-RUNAWAY",
    who: "Jóvenes menores de 21 considerando huir de casa o ya en la calle.",
    notes: "Gratis, confidencial, 24/7. Texto o chat en 1800runaway.org. No llaman a los padres sin permiso.",
    country: "US",
    category: "youth",
  },
  {
    name: "Kids Help Phone (Canadá)",
    number: "1-800-668-6868",
    display: "1-800-668-6868 / Texto CONNECT al 686868",
    who: "Cualquier persona menor de 20 en Canadá.",
    notes: "Gratis, confidencial, 24/7 en inglés y francés.",
    country: "CA",
    category: "youth",
  },
  {
    name: "Trans Lifeline",
    number: "1-877-565-8860",
    display: "1-877-565-8860 (EE. UU.) / 1-877-330-6366 (CA)",
    who: "Personas trans en crisis. Atendida por personas trans.",
    notes: "Gratis. Las horas varían — revise el sitio web.",
    country: "BOTH",
    category: "lgbtq",
  },
  {
    name: "Trevor Project (jóvenes LGBTQ+)",
    number: "1-866-488-7386",
    display: "Llame al 1-866-488-7386 / Texto START al 678-678",
    who: "Jóvenes LGBTQ+ menores de 25 en crisis.",
    notes: "Gratis, confidencial, 24/7. Chat en thetrevorproject.org.",
    country: "BOTH",
    category: "lgbtq",
  },
  {
    name: "Covenant House NINELINE",
    number: "1-800-388-3888",
    display: "1-800-999-9999",
    who: "Línea de crisis para jóvenes sin hogar y fugitivos.",
    notes: "Gratis, 24/7. Conecta con albergue Covenant House.",
    country: "BOTH",
    category: "youth",
  },
];

const CATEGORY_LABEL: Record<Hotline["category"], string> = {
  emergency: "Emergencia",
  shelter: "Referencias de albergue",
  "mental-health": "Crisis de salud mental",
  dv: "Violencia doméstica",
  youth: "Jóvenes y fugitivos",
  lgbtq: "LGBTQ+",
  veterans: "Veteranos",
  addiction: "Uso de sustancias",
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

export default function GetHelpEs() {
  return (
    <main lang="es" className="mx-auto max-w-5xl px-4 py-8">
      <header className="rounded-xl bg-danger/10 border border-danger/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-danger">
          Si está en peligro inmediato
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Llame al 911 o al 988 ahora.</h1>
        <p className="mt-2 text-ink-soft">
          El <strong>988</strong> es la línea de crisis y suicidio de EE. UU. y Canadá — gratis,
          confidencial, 24/7. El <strong>911</strong> es para emergencias médicas o de seguridad
          inmediatas.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="tel:911" className="rounded-md bg-danger px-4 py-2 font-semibold text-white">
            Llamar 911
          </a>
          <a href="tel:988" className="rounded-md bg-ink px-4 py-2 font-semibold text-white">
            Llamar 988
          </a>
          <a
            href="sms:741741?body=HOME"
            className="rounded-md bg-brand px-4 py-2 font-semibold text-white"
          >
            Texto HOME al 741741
          </a>
        </div>
      </header>

      <p className="mt-6 text-xs">
        <Link href="/get-help" className="text-brand underline">
          English version
        </Link>
      </p>

      <p className="mt-4 text-ink-soft">
        Todos los números a continuación son gratuitos, confidenciales y atendidos por personas
        capacitadas. Muchos tienen operadores en español — pida "Spanish" o "español" al inicio
        de la llamada.
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
                      {h.country === "BOTH" ? "EE. UU. y Canadá" : h.country === "US" ? "EE. UU." : "Canadá"}
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
        <h2 className="text-lg font-semibold text-ink">¿Necesita una cama esta noche?</h2>
        <p className="mt-2 text-ink-soft">
          La forma más rápida de encontrar una cama disponible es llamar al <strong>211</strong>{" "}
          desde un teléfono local — tienen información en tiempo real sobre capacidad de
          albergues. O use el{" "}
          <Link href="/es/find-help" className="text-brand underline">
            buscador de ayuda
          </Link>{" "}
          y llame directamente a los albergues más cercanos.
        </p>
      </div>
    </main>
  );
}
