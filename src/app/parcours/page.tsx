"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";
import StatCard from "@/components/StatCard";
import { Trophy, Award, Users } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  heroBadge,
  heroTitle,
  heroDescription,
  sectionTitle,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";
import HeroCarousel from "@/components/HeroCarousel";
import { pageHeroSlides } from "@/data/heroCarousel";
import Image from "next/image";

export default function ParcoursPage() {
  return (
    <>
      <HeroCarousel
        slides={pageHeroSlides.parcours}
        ariaLabel="Carousel Notre parcours"
      />

      <section className="hidden bg-gradient-to-br from-digie-blue to-digie-purple text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={heroBadge}
              initial="hidden"
              animate="visible"
              className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              Depuis 2018
            </motion.span>

            <motion.h1
              variants={heroTitle}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Notre parcours
            </motion.h1>

            <motion.p
              variants={heroDescription}
              initial="hidden"
              animate="visible"
              className="text-lg text-white/90 leading-relaxed"
            >
              Depuis 2018, DigieWomen School s&apos;impose comme un acteur de
              référence dans la formation aux métiers du numérique et de
              l&apos;agro-pastoral au Gabon et à l&apos;international.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section id="chiffres-cles" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-digie-blue dark:text-white">
              Chiffres clés
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                transition={{ delay: i * 0.08 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIWA Awards */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Texte gauche */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-digie-green/10 text-digie-green text-sm font-medium mb-4">
                <Trophy className="w-4 h-4" />
                4 éditions organisées
              </div>

              <h2 className="text-3xl font-bold text-digie-blue dark:text-white mb-4">
                DIGIEWOMEN AWARDS (DIWA)
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Les DIGIEWOMEN AWARDS célèbrent l&apos;excellence et
                l&apos;innovation des femmes et des jeunes dans les domaines
                du numérique et de l&apos;agro-pastoral. Un événement phare
                qui met en lumière les talents et les réussites.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-5 h-5 text-digie-green" />
                  <span>+4 prix internationaux</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-5 h-5 text-digie-green" />
                  <span>Talents mis en lumière</span>
                </div>
              </div>
            </motion.div>

            {/* Card image + overlay */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-[420px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl"
            >
              {/* Image pleine largeur / hauteur */}
              <Image
                src="/affiche.jpg"
                alt="DigieWomen School - DIWA Awards"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay principal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

              {/* Léger voile vert pour rappeler l'identité */}
              <div className="absolute inset-0 bg-digie-green/10 mix-blend-multiply" />

              {/* Contenu superposé */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 text-white">

                {/* Numéro */}
                <div className="text-6xl md:text-7xl font-bold leading-none tracking-tight drop-shadow-lg">
                  4
                </div>

                {/* Titre */}
                <div className="mt-2 text-2xl md:text-3xl font-semibold drop-shadow-md">
                  Éditions DIWA
                </div>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/90 drop-shadow-md">
                  Un rendez-vous annuel pour célébrer l&apos;excellence
                  féminine dans le numérique
                </p>
              </div>

              {/* Petite bordure intérieure */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-digie-blue dark:text-white">
              Depuis 2018
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-8">
            {[
              {
                year: "2018",
                text: "Lancement de DigieWomen School et premières formations",
              },
              {
                year: "2019-2021",
                text: "Expansion des programmes et partenariats stratégiques",
              },
              {
                year: "2022",
                text: "Lancement des DIGIEWOMEN AWARDS et développement de la GED",
              },
              {
                year: "2023-2024",
                text: "Création de la plateforme e-Agri361 et extension internationale",
              },
              {
                year: "2025-2026",
                text: "+11 000 personnes formées, +35 partenaires, solutions digitales consolidées",
              },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-bold text-digie-green">
                    {item.year}
                  </span>
                </div>

                <div className="relative pb-8 border-l-2 border-digie-green/30 pl-6">
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-digie-green" />

                  <p className="text-gray-700 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}