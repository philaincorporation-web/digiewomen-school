"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Award, Users, BookOpen, Globe } from "lucide-react";
import {
  stats,
  formations,
} from "@/data/content";
import {
  staggerContainer,
  staggerItem,
  sectionTitle,
  ctaReveal,
  fadeInUp,
} from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";
import StatCard from "@/components/StatCard";
import FormationCard from "@/components/FormationCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroCarousel from "@/components/HeroCarousel";

function AnimatedStatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCountUp({
    end: parseInt(stat.value.replace(/[^0-9]/g, "")) || 0,
    duration: 1.5,
  });

  const suffix = stat.value.replace(/[0-9]/g, "").replace(/^\+/, "");
  const displayValue = stat.value.startsWith("+")
    ? `+${count}${suffix}`
    : `${count}${suffix}`;

  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
    >
      <span ref={ref}>
        <StatCard {...stat} value={displayValue} />
      </span>
    </motion.div>
  );
}

export default function HomePage() {
  const featuredFormations = formations.slice(0, 6);
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <>
      <HeroCarousel />

      {/* Stats Bento */}
      <section ref={statsRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-digie-blue dark:text-white mb-4">
              Notre parcours en chiffres
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Plus de 8 ans d&apos;engagement pour le renforcement des capacités numériques et agro-pastorales.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {stats.slice(0, 6).map((stat, i) => (
              <AnimatedStatCard key={stat.label} stat={stat} index={i} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              href="/parcours"
              className="inline-flex items-center gap-2 text-digie-green font-semibold hover:underline"
            >
              Voir tout notre parcours
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Formations preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-digie-blue dark:text-white mb-4">
              Nos offres de formation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Des formations certifiantes et professionnalisantes dans les métiers du numérique et de l&apos;agro-pastoral.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredFormations.map((formation, i) => (
              <motion.div
                key={formation.id}
                variants={staggerItem}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <FormationCard formation={formation} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mt-10"
          >
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-digie-green text-white font-semibold hover:bg-digie-green-dark transition-all hover:scale-105 active:scale-95"
            >
              Toutes les formations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section des Specialisations */}
      <section className="relative py-16 md:py-24 overflow-hidden text-white dark:text-digie-green">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/formateur4.png"
            alt="Nos solutions DigieWomen School"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Overlay général */}
        <div className="absolute inset-0 bg-black/35 dark:bg-black/55" />

        {/* Dégradé principal */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-digie-green/90
            via-digie-green/65
            to-digie-blue/65
            dark:from-digie-green/30
            dark:via-digie-green/15
            dark:to-digie-blue/20
          "
        />

        {/* Couche supplémentaire pour le mode dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 dark:from-black/45 dark:to-black/30" />

        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Colonne gauche */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg dark:text-digie-green">
                Nos solutions phares
              </h2>

              <div className="space-y-6">
                {/* GED */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="
                    rounded-2xl p-6
                    bg-white/10
                    border border-white/20
                    backdrop-blur-md
                    shadow-xl
                    hover:bg-white/15
                    transition-all duration-300
                    dark:bg-white/95
                    dark:border-digie-green/20
                    dark:text-digie-green
                    dark:hover:bg-white
                  "
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Gestion Électronique des Documents (GED)
                  </h3>
                  <p className="text-white/90 dark:text-digie-green/80 text-sm leading-relaxed">
                    Modernisez la gestion documentaire de votre organisation avec
                    nos solutions innovantes.
                  </p>
                </motion.div>

                {/* e-Agri361 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="
                    rounded-2xl p-6
                    bg-white/10
                    border border-white/20
                    backdrop-blur-md
                    shadow-xl
                    hover:bg-white/15
                    transition-all duration-300
                    dark:bg-white/95
                    dark:border-digie-green/20
                    dark:text-digie-green
                    dark:hover:bg-white
                  "
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Plateforme e-Agri361
                  </h3>
                  <p className="text-white/90 dark:text-digie-green/80 text-sm leading-relaxed">
                    La plateforme digitale intégrée pour le développement
                    agropastoral des femmes et des jeunes.
                  </p>
                </motion.div>
              </div>

              {/* Bouton */}
              <Link
                href="/specialisations"
                className="
                  inline-flex items-center gap-2 mt-6
                  px-6 py-3 rounded-full
                  bg-white text-digie-green
                  font-semibold
                  shadow-lg
                  hover:bg-gray-100
                  transition-all
                  hover:scale-105
                  active:scale-95
                "
              >
                Découvrir nos spécialisations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Carte 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="
                  rounded-2xl p-6 text-center
                  bg-white/10
                  border border-white/20
                  backdrop-blur-md
                  shadow-xl
                  hover:bg-white/20
                  transition-all duration-300
                  hover:-translate-y-1
                  dark:bg-white/95
                  dark:border-digie-green/20
                  dark:text-digie-green
                  dark:hover:bg-white
                "
              >
                <Award className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-white/80 dark:text-digie-green/75">
                  Éditions DIWA
                </div>
              </motion.div>

              {/* Carte 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="
                  rounded-2xl p-6 text-center
                  bg-white/10
                  border border-white/20
                  backdrop-blur-md
                  shadow-xl
                  hover:bg-white/20
                  transition-all duration-300
                  hover:-translate-y-1
                  dark:bg-white/95
                  dark:border-digie-green/20
                  dark:text-digie-green
                  dark:hover:bg-white
                "
              >
                <Users className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold">+11K</div>
                <div className="text-sm text-white/80 dark:text-digie-green/75">
                  Personnes formées
                </div>
              </motion.div>

              {/* Carte 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="
                  rounded-2xl p-6 text-center
                  bg-white/10
                  border border-white/20
                  backdrop-blur-md
                  shadow-xl
                  hover:bg-white/20
                  transition-all duration-300
                  hover:-translate-y-1
                  dark:bg-white/95
                  dark:border-digie-green/20
                  dark:text-digie-green
                  dark:hover:bg-white
                "
              >
                <BookOpen className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold">+100</div>
                <div className="text-sm text-white/80 dark:text-digie-green/75">
                  Formations
                </div>
              </motion.div>

              {/* Carte 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="
                  rounded-2xl p-6 text-center
                  bg-white/10
                  border border-white/20
                  backdrop-blur-md
                  shadow-xl
                  hover:bg-white/20
                  transition-all duration-300
                  hover:-translate-y-1
                  dark:bg-white/95
                  dark:border-digie-green/20
                  dark:text-digie-green
                  dark:hover:bg-white
                "
              >
                <Globe className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold">+35</div>
                <div className="text-sm text-white/80 dark:text-digie-green/75">
                  Partenaires
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-digie-blue dark:text-white mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Témoignages d&apos;apprenants et de partenaires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Plus de props → le composant gère ses propres données */}
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={ctaReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-r from-digie-purple to-digie-blue rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à transformer votre avenir ?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Que vous soyez un particulier, une entreprise, une administration ou un entrepreneur,
              DigieWomen School a une solution adaptée à vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-digie-green text-white font-semibold text-lg hover:bg-digie-green-dark transition-all hover:scale-105 active:scale-95"
            >
              Contactez-nous maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}