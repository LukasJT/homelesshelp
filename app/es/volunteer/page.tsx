import Link from "next/link";
import NearbyFinderEs from "@/components/NearbyFinderEs";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Ser voluntario cerca de mí — albergues que necesitan ayuda",
  description:
    "Escriba su ciudad o código postal y encuentre albergues, centros de día y programas de comida cerca de usted que aceptan voluntarios. Con teléfonos para cada uno.",
  alternates: {
    canonical: "/es/volunteer",
    languages: { en: "/volunteer", es: "/es/volunteer" },
  },
};

export default function VolunteerEs() {
  return (
    <main lang="es" className="mx-auto max-w-5xl px-4 py-8">
      <p className="text-xs">
        <Link href="/volunteer" className="text-brand underline">
          English version
        </Link>
      </p>

      <header className="mt-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Voluntariado</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          Encuentre un lugar donde ser voluntario cerca de usted
        </h1>
        <p className="mt-2 max-w-2xl text-ink-soft">
          Escriba su ciudad o código postal — o comparta su ubicación — y enumeraremos los
          albergues y recursos cercanos que aceptan voluntarios. Cada uno tiene un número de
          teléfono y sitio web: llame antes para preguntar qué necesitan esta semana.
        </p>
      </header>

      <NearbyFinderEs shelters={getAllShelters()} mode="volunteer" />

      <div className="mt-10 rounded-lg bg-white p-6 border border-brand-light/60">
        <h2 className="text-lg font-semibold text-ink">Antes de llamar</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>
            <strong className="text-ink">Pregunte qué necesitan <em>esta semana</em></strong> — no
            en general. Las necesidades de voluntarios cambian constantemente.
          </li>
          <li>
            <strong className="text-ink">Comprométase a un horario, no a "cuando esté libre"</strong>{" "}
            — los albergues reciben muchos voluntarios de una sola vez. Llegar al mismo turno
            semanal por un mes vale más que diez visitas únicas.
          </li>
          <li>
            <strong className="text-ink">No traiga cosas que no pidieron</strong> — la ropa usada
            es lo más donado y menos necesitado. Efectivo, calcetines nuevos y artículos de
            higiene son lo que realmente usan.
          </li>
          <li>
            <strong className="text-ink">Sea flexible sobre qué significa "voluntariado"</strong>{" "}
            — para algunos albergues la mejor ayuda es administrativa (traducción al español,
            escribir solicitudes de subvenciones, TI). Pregunte cuál es su mayor necesidad no
            satisfecha.
          </li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-ink-muted">
        Nota: HomelessHelp.net no acepta donaciones ni procesa pagos. Todas las donaciones
        mencionadas van directamente a las organizaciones listadas.
      </p>
    </main>
  );
}
