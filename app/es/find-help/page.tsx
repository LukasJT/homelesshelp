import Link from "next/link";
import NearbyFinderEs from "@/components/NearbyFinderEs";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Buscar ayuda cerca de mí — albergues, comida, atención médica",
  description:
    "Escriba su ciudad o código postal y le mostramos los albergues, centros de día, comedores y atención médica más cercanos. Gratis, sin cuenta, sin juicio.",
  alternates: {
    canonical: "/es/find-help",
    languages: { en: "/find-help", es: "/es/find-help" },
  },
};

export default function FindHelpEs() {
  return (
    <main lang="es" className="mx-auto max-w-5xl px-4 py-8">
      <header className="rounded-xl bg-danger/10 border border-danger/30 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-danger">
          ¿Necesita ayuda inmediata?
        </p>
        <p className="mt-2 text-ink-soft">
          Llame al{" "}
          <a href="tel:211" className="font-semibold text-danger underline">
            211
          </a>{" "}
          para referencias de albergue (EE. UU. y Canadá). Al{" "}
          <a href="tel:988" className="font-semibold text-danger underline">
            988
          </a>{" "}
          si está en crisis de salud mental. Al{" "}
          <a href="tel:911" className="font-semibold text-danger underline">
            911
          </a>{" "}
          para emergencias. Todas gratis y 24/7 — el 211 tiene operadores en español en la mayoría
          de regiones.
        </p>
      </header>

      <p className="mt-6 text-xs">
        <Link href="/find-help" className="text-brand underline">
          English version
        </Link>
      </p>

      <h1 className="mt-4 text-3xl font-bold text-ink">Buscar ayuda cerca de mí</h1>
      <p className="mt-2 max-w-2xl text-ink-soft">
        Escriba su ciudad, estado o código postal — o comparta su ubicación — y le mostraremos los
        albergues, centros de día, comedores y atención médica más cercanos. Siempre gratis. No
        guardamos su ubicación ni requerimos una cuenta.
      </p>

      <NearbyFinderEs shelters={getAllShelters()} mode="help" />

      <div className="mt-10 rounded-lg bg-white p-6 border border-brand-light/60">
        <h2 className="text-lg font-semibold text-ink">Antes de ir</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>
            <strong className="text-ink">Llame antes.</strong> La disponibilidad de camas cambia
            cada hora. El número de teléfono en cada tarjeta es la fuente de verdad.
          </li>
          <li>
            <strong className="text-ink">Lleve identificación si la tiene.</strong> La mayoría de
            albergues no la exigen estrictamente, pero los servicios posteriores casi siempre la
            piden.
          </li>
          <li>
            <strong className="text-ink">Diga su situación al ingreso.</strong> Mascotas, pareja,
            niños, problemas de movilidad, turno de noche — los albergues a menudo tienen opciones
            que no están en su sitio web.
          </li>
          <li>
            <strong className="text-ink">Si es indocumentado:</strong> muchos albergues
            atienden sin pedir estatus migratorio. Pregunte sobre Annunciation House (El Paso) o
            Casa Juan Diego (Houston) si está cerca de la frontera.
          </li>
        </ul>
      </div>
    </main>
  );
}
