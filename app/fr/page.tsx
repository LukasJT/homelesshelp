import Link from "next/link";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "HomelessHelp — Trouver de l'aide. Bénévolat. Comprendre.",
  description:
    "Répertoire gratuit de refuges et de services d'urgence aux États-Unis et au Canada. Sans publicité, sans compte, sans frais. Information en français.",
  alternates: {
    canonical: "/fr",
    languages: { en: "/", es: "/es", fr: "/fr" },
  },
};

export default function LandingFr() {
  const shelterCount = getAllShelters().length;
  const cities = new Set(getAllShelters().map((s) => `${s.city}, ${s.region}`)).size;

  return (
    <main lang="fr">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-light/90">
            HomelessHelp.net · Français
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-6xl">
            Trouver de l'aide.<br />
            <span className="text-accent">Faire du bénévolat.</span> Donner.<br />
            Comprendre l'itinérance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Que vous ayez besoin d'un lit ce soir, que vous vouliez aider dans un refuge ou que
            vous cherchiez à comprendre — voici un répertoire gratuit et indépendant des services
            pour les personnes itinérantes, accompagné de guides clairs sur ce qui fonctionne
            vraiment. États-Unis et Canada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/find-help"
              className="rounded-md bg-white px-5 py-3 font-semibold text-brand-dark hover:bg-paper"
            >
              Trouver de l'aide près de moi →
            </Link>
            <Link
              href="/fr/get-help"
              className="rounded-md bg-danger px-5 py-3 font-semibold text-white hover:bg-red-700"
            >
              Lignes de crise
            </Link>
            <Link
              href="/fr/volunteer"
              className="rounded-md bg-accent px-5 py-3 font-semibold text-ink hover:bg-amber-400"
            >
              Je veux être bénévole
            </Link>
            <Link
              href="/"
              className="rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              English
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6 text-white">
            <div>
              <p className="text-3xl font-bold">{shelterCount}+</p>
              <p className="text-xs uppercase tracking-wider text-white/70">Ressources</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{cities}</p>
              <p className="text-xs uppercase tracking-wider text-white/70">Villes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">13</p>
              <p className="text-xs uppercase tracking-wider text-white/70">Lignes de crise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">Pourquoi êtes-vous ici ?</h2>
        <p className="mt-1 text-ink-muted">
          Ce site sert trois publics à parts égales — choisissez celui qui vous correspond.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/fr/find-help"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white transition hover:scale-[1.01]"
          >
            <p className="text-xl font-bold">J'ai besoin d'aide</p>
            <p className="mt-2 text-sm text-white/90">
              Saisissez votre ville et nous afficherons les refuges, centres de jour, programmes
              alimentaires et soins médicaux les plus proches. Gratuit, aucun compte requis.
            </p>
            <p className="mt-4 text-sm font-semibold">Aller →</p>
          </Link>
          <Link
            href="/fr/volunteer"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent to-amber-600 p-6 text-white transition hover:scale-[1.01]"
          >
            <p className="text-xl font-bold">Je veux faire du bénévolat ou donner</p>
            <p className="mt-2 text-sm text-white/90">
              Saisissez votre ville et nous listerons les refuges qui acceptent des bénévoles, avec
              numéros de téléphone et ce dont ils ont vraiment besoin cette semaine.
            </p>
            <p className="mt-4 text-sm font-semibold">Aller →</p>
          </Link>
          <Link
            href="/learn"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-ink to-ink-soft p-6 text-white transition hover:scale-[1.01]"
          >
            <p className="text-xl font-bold">Je veux comprendre</p>
            <p className="mt-2 text-sm text-white/90">
              Guides en langage clair sur les causes, ce qui fonctionne, et comment parler à
              quelqu'un dans la rue. (Disponible seulement en anglais pour l'instant.)
            </p>
            <p className="mt-4 text-sm font-semibold">Lire en anglais →</p>
          </Link>
        </div>
      </section>

      <section className="bg-danger/10 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-danger">
            Besoin d'aide ce soir ?
          </p>
          <p className="mt-2 text-2xl font-bold text-ink">
            Composez le 211 pour des références de refuge. Le 988 en cas de crise. Le 911 en cas
            d'urgence.
          </p>
          <p className="mt-2 text-ink-soft">
            Toutes ces lignes sont gratuites, confidentielles et accessibles 24h/24 aux États-Unis
            et au Canada. Le 211 dispose de personnel francophone dans la plupart des régions
            canadiennes.
          </p>
          <Link
            href="/fr/get-help"
            className="mt-4 inline-block rounded-md bg-ink px-5 py-2.5 font-semibold text-white"
          >
            Voir toutes les lignes de crise
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-ink">Avis important</h2>
        <p className="mt-3 text-ink-soft">
          HomelessHelp.net n'accepte pas de dons et ne traite pas de paiements. Nous ne prélevons
          aucune commission. Toutes les organisations caritatives mentionnées reçoivent les dons
          directement par leurs propres canaux. Nous ne sommes affiliés à aucune agence
          gouvernementale, refuge ou organisme.
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          L'information peut être périmée — appelez toujours avant de vous rendre dans un refuge.
        </p>
      </section>
    </main>
  );
}
