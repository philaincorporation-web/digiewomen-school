import { notFound } from "next/navigation";
import { formations } from "@/data/content";

import FormationHero from "@/components/formations/FormationHero";
import FormationOverview from "@/components/formations/FormationOverview";
import Roadmap from "@/components/formations/Roadmap";
import Skills from "@/components/formations/Skills";
import Tools from "@/components/formations/Tools";
import Projects from "@/components/formations/Projects";
import CareerOpportunities from "@/components/formations/CareerOpportunities";
import Certification from "@/components/formations/Certification";
import Testimonials from "@/components/formations/Testimonials";
import FAQ from "@/components/formations/FAQ";
import FormationCTA from "@/components/formations/FormationCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

// Génère les pages statiques pour chaque formation
export async function generateStaticParams() {
  return formations
    .filter((f) => f.slug)
    .map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);

  if (!formation) {
    return { title: "Formation introuvable" };
  }

  return {
    title: `${formation.title} | DigieWomen School`,
    description: formation.description ?? formation.overview,
  };
}

export default async function FormationDetailPage({ params }: Props) {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);

  if (!formation) {
    notFound();
  }

  return (
    <main>
      {/* 1. Hero */}
      <FormationHero formation={formation} />

      {/* 2. Présentation */}
      <FormationOverview
        overview={formation.overview ?? formation.description}
        duration={formation.duration}
        level={formation.level}
        format={formation.format}
      />

      {/* 3. Parcours / Roadmap */}
      {formation.roadmap && formation.roadmap.length > 0 && (
        <Roadmap levels={formation.roadmap} />
      )}

      {/* 4. Compétences */}
      {formation.skills && formation.skills.length > 0 && (
        <Skills skills={formation.skills} />
      )}

      {/* 5. Outils */}
      {formation.tools && formation.tools.length > 0 && (
        <Tools tools={formation.tools} />
      )}

      {/* 6. Projets */}
      {formation.projects && formation.projects.length > 0 && (
        <Projects projects={formation.projects} />
      )}

      {/* 7. Débouchés */}
      {formation.careers && formation.careers.length > 0 && (
        <CareerOpportunities careers={formation.careers} />
      )}

      {/* 8. Certification */}
      {formation.certification && (
        <Certification certification={formation.certification} />
      )}

      {/* 9. Témoignages */}
      {formation.testimonials && formation.testimonials.length > 0 && (
        <Testimonials testimonials={formation.testimonials} />
      )}

      {/* 10. FAQ */}
      {formation.faq && formation.faq.length > 0 && (
        <FAQ items={formation.faq} />
      )}

      {/* 11. CTA final */}
      <FormationCTA
        title={formation.title}
        slug={formation.slug}
      />
    </main>
  );
}