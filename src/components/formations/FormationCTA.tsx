import Link from "next/link";

type FormationCTAProps = {
  title: string;
  slug?: string;
};

export default function FormationCTA({ title }: FormationCTAProps) {
  return (
    <section id="inscription" className="bg-digie-green py-14 text-white md:py-20">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Prête à rejoindre {title} ?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-white/90">
          Inscris-toi dès maintenant et commence ton parcours vers une carrière digitale.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 font-semibold text-digie-green transition hover:bg-gray-100"
          >
            S&apos;inscrire
          </Link>
          <Link
            href="/formations"
            className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Voir toutes les formations
          </Link>
        </div>
      </div>
    </section>
  );
}