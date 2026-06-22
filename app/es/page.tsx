import Link from "next/link";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "HomelessHelp — Buscar ayuda. Voluntariado. Entender la situación.",
  description:
    "Directorio gratuito de albergues y servicios de crisis en EE. UU. y Canadá. Sin publicidad, sin cuenta, sin costo. Información en español.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
};

export default function LandingEs() {
  const shelterCount = getAllShelters().length;
  const cities = new Set(getAllShelters().map((s) => `${s.city}, ${s.region}`)).size;

  return (
    <main lang="es">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-light/90">
            HomelessHelp.net · Español
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-6xl">
            Encontrar ayuda.<br />
            <span className="text-accent">Ser voluntario.</span> Donar.<br />
            Entender la situación.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Si necesita una cama esta noche, quiere ser voluntario en un albergue, o quiere
            entender el problema — este es un directorio gratuito e independiente de servicios
            para personas sin hogar, con guías claras sobre lo que realmente funciona. EE. UU. y
            Canadá.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/es/find-help" className="rounded-md bg-white px-5 py-3 font-semibold text-brand-dark hover:bg-paper">
              Buscar ayuda cerca de mí →
            </Link>
            <Link href="/es/get-help" className="rounded-md bg-danger px-5 py-3 font-semibold text-white hover:bg-red-700">
              Líneas de crisis
            </Link>
            <Link href="/es/volunteer" className="rounded-md bg-accent px-5 py-3 font-semibold text-ink hover:bg-amber-400">
              Quiero ser voluntario
            </Link>
            <Link href="/" className="rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
              English
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6 text-white">
            <div>
              <p className="text-3xl font-bold">{shelterCount}+</p>
              <p className="text-xs uppercase tracking-wider text-white/70">Recursos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{cities}</p>
              <p className="text-xs uppercase tracking-wider text-white/70">Ciudades</p>
            </div>
            <div>
              <p className="text-3xl font-bold">13</p>
              <p className="text-xs uppercase tracking-wider text-white/70">Líneas de crisis</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">¿Por qué está aquí?</h2>
        <p className="mt-1 text-ink-muted">
          Este sitio sirve a tres audiencias por igual — elija la que le aplique.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/es/find-help"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white transition hover:scale-[1.01]"
          >
            <p className="text-xl font-bold">Necesito ayuda</p>
            <p className="mt-2 text-sm text-white/90">
              Escriba su ciudad y le mostramos los albergues, centros de día, comedores y atención
              médica más cercanos. Gratis, sin cuenta requerida.
            </p>
            <p className="mt-4 text-sm font-semibold">Ir →</p>
          </Link>
          <Link
            href="/es/volunteer"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent to-amber-600 p-6 text-white transition hover:scale-[1.01]"
          >
            <p className="text-xl font-bold">Quiero ser voluntario o donar</p>
            <p className="mt-2 text-sm text-white/90">
              Escriba su ciudad y enumeramos los albergues cercanos que aceptan voluntarios.
              Incluye números de teléfono y lo que realmente necesitan esta semana.
            </p>
            <p className="mt-4 text-sm font-semibold">Ir →</p>
          </Link>
          <Link
            href="/learn"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-ink to-ink-soft p-6 text-white transition hover:scale-[1.01]"
          >
            <p className="text-xl font-bold">Quiero entender</p>
            <p className="mt-2 text-sm text-white/90">
              Guías en lenguaje claro sobre las causas, lo que funciona para reducirlas, y cómo
              hablar con alguien en la calle. (Disponible solo en inglés por ahora.)
            </p>
            <p className="mt-4 text-sm font-semibold">Leer en inglés →</p>
          </Link>
        </div>
      </section>

      <section className="bg-danger/10 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-danger">
            Si necesita ayuda esta noche
          </p>
          <p className="mt-2 text-2xl font-bold text-ink">
            Llame al 211 para referencias de albergue. Al 988 si está en crisis. Al 911 para
            emergencias.
          </p>
          <p className="mt-2 text-ink-soft">
            Todas son gratis, confidenciales, y atendidas 24/7 en EE. UU. y Canadá. La línea 211
            tiene operadores que hablan español en la mayoría de las regiones.
          </p>
          <Link
            href="/es/get-help"
            className="mt-4 inline-block rounded-md bg-ink px-5 py-2.5 font-semibold text-white"
          >
            Ver todas las líneas de crisis
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-ink">Aviso importante</h2>
        <p className="mt-3 text-ink-soft">
          HomelessHelp.net no acepta donaciones ni procesa pagos. No cobramos comisión. Todas las
          organizaciones benéficas mencionadas reciben donaciones directamente a través de sus
          propias páginas. No estamos afiliados con ninguna agencia gubernamental, albergue, o
          fundación.
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          La información puede estar desactualizada — siempre llame antes de ir a un albergue.
        </p>
      </section>
    </main>
  );
}
