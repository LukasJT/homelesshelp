import Link from "next/link";
import NearbyFinderFr from "@/components/NearbyFinderFr";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Trouver de l'aide près de moi — refuges, repas, soins",
  description:
    "Saisissez votre ville ou code postal et trouvez les refuges, centres de jour, programmes alimentaires et soins médicaux les plus proches. Gratuit, sans compte, sans jugement.",
  alternates: {
    canonical: "/fr/find-help",
    languages: { en: "/find-help", es: "/es/find-help", fr: "/fr/find-help" },
  },
};

export default function FindHelpFr() {
  return (
    <main lang="fr" className="mx-auto max-w-5xl px-4 py-8">
      <header className="rounded-xl bg-danger/10 border border-danger/30 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-danger">
          Besoin d'aide immédiate ?
        </p>
        <p className="mt-2 text-ink-soft">
          Composez le{" "}
          <a href="tel:211" className="font-semibold text-danger underline">
            211
          </a>{" "}
          pour des références de refuge. Le{" "}
          <a href="tel:988" className="font-semibold text-danger underline">
            988
          </a>{" "}
          en cas de crise de santé mentale. Le{" "}
          <a href="tel:911" className="font-semibold text-danger underline">
            911
          </a>{" "}
          pour les urgences. Toutes gratuites, 24h/24 — service bilingue dans la plupart des
          régions canadiennes.
        </p>
      </header>

      <p className="mt-6 text-xs">
        <Link href="/find-help" className="text-brand underline mr-3">
          English
        </Link>
        <Link href="/es/find-help" className="text-brand underline">
          Español
        </Link>
      </p>

      <h1 className="mt-4 text-3xl font-bold text-ink">Trouver de l'aide près de moi</h1>
      <p className="mt-2 max-w-2xl text-ink-soft">
        Saisissez votre ville, province ou code postal — ou partagez votre position — et nous
        afficherons les refuges, centres de jour, programmes alimentaires et soins médicaux les
        plus proches. Toujours gratuit. Nous ne conservons pas votre position et n'exigeons aucun
        compte.
      </p>

      <NearbyFinderFr shelters={getAllShelters()} mode="help" />

      <div className="mt-10 rounded-lg bg-white p-6 border border-brand-light/60">
        <h2 className="text-lg font-semibold text-ink">Avant de vous y rendre</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>
            <strong className="text-ink">Téléphonez d'abord.</strong> La disponibilité des lits
            change d'heure en heure. Le numéro sur chaque fiche est la source de vérité.
          </li>
          <li>
            <strong className="text-ink">Apportez une pièce d'identité si vous en avez une.</strong>{" "}
            La plupart des refuges ne l'exigent pas, mais les services en aval presque toujours.
          </li>
          <li>
            <strong className="text-ink">Mentionnez votre situation à l'accueil.</strong> Animaux,
            partenaire, enfants, mobilité réduite, travail de nuit — les refuges ont souvent des
            options qui ne sont pas sur leur site web.
          </li>
          <li>
            <strong className="text-ink">Au Québec :</strong> appelez le 1-844-838-8809 (Info-Social)
            pour des références de services psychosociaux 24h/24.
          </li>
        </ul>
      </div>
    </main>
  );
}
