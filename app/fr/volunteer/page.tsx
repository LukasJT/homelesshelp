import Link from "next/link";
import NearbyFinderFr from "@/components/NearbyFinderFr";
import { getAllShelters } from "@/lib/shelters";

export const metadata = {
  title: "Bénévolat près de chez vous — refuges qui ont besoin d'aide",
  description:
    "Saisissez votre ville ou code postal et trouvez les refuges, centres de jour et programmes alimentaires qui acceptent des bénévoles. Avec numéros de téléphone.",
  alternates: {
    canonical: "/fr/volunteer",
    languages: { en: "/volunteer", es: "/es/volunteer", fr: "/fr/volunteer" },
  },
};

export default function VolunteerFr() {
  return (
    <main lang="fr" className="mx-auto max-w-5xl px-4 py-8">
      <p className="text-xs">
        <Link href="/volunteer" className="text-brand underline mr-3">
          English
        </Link>
        <Link href="/es/volunteer" className="text-brand underline">
          Español
        </Link>
      </p>

      <header className="mt-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Bénévolat</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">
          Trouvez un endroit où faire du bénévolat près de chez vous
        </h1>
        <p className="mt-2 max-w-2xl text-ink-soft">
          Saisissez votre ville ou code postal — ou partagez votre position — et nous listerons
          les refuges et ressources qui acceptent des bénévoles. Chacun a un numéro de téléphone
          et un site web : appelez avant pour demander leurs besoins de la semaine.
        </p>
      </header>

      <NearbyFinderFr shelters={getAllShelters()} mode="volunteer" />

      <div className="mt-10 rounded-lg bg-white p-6 border border-brand-light/60">
        <h2 className="text-lg font-semibold text-ink">Avant d'appeler</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>
            <strong className="text-ink">Demandez ce dont ils ont besoin <em>cette semaine</em></strong>{" "}
            — pas en général. Les besoins changent constamment.
          </li>
          <li>
            <strong className="text-ink">Engagez-vous à un horaire, pas à "quand je serai libre"</strong>{" "}
            — venir au même quart toutes les semaines pendant un mois vaut plus que dix visites
            uniques.
          </li>
          <li>
            <strong className="text-ink">N'apportez pas de choses qu'ils n'ont pas demandées</strong>{" "}
            — les vêtements usagés sont l'article le plus donné et le moins utile. L'argent, les
            chaussettes neuves et les articles d'hygiène sont ce qu'ils utilisent vraiment.
          </li>
          <li>
            <strong className="text-ink">Soyez flexible sur ce que "bénévolat" signifie</strong> —
            pour certains refuges, la meilleure aide est administrative (traduction
            anglais-français, demandes de subvention, informatique). Demandez quel est leur plus
            grand besoin non comblé.
          </li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-ink-muted">
        Note : HomelessHelp.net n'accepte pas de dons et ne traite pas de paiements. Tous les dons
        mentionnés vont directement aux organismes listés.
      </p>
    </main>
  );
}
