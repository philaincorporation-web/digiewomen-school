"use client";

import { motion } from "framer-motion";
import { formateurs } from "@/data/content";
import {
  heroBadge,
  heroTitle,
  heroDescription,
  staggerContainer,
  staggerItem,
  sectionTitle,
} from "@/lib/animations";
import HeroCarousel from "@/components/HeroCarousel";
import { pageHeroSlides } from "@/data/heroCarousel";
import ExpertCoverflow from "@/components/ExpertCoverflow";

export default function FormateursPage() {
  return (
    <>
      <HeroCarousel slides={pageHeroSlides.formateurs} ariaLabel="Carousel Formateurs" />
      <section className="hidden bg-gradient-to-br from-digie-blue to-digie-purple text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={heroBadge} initial="hidden" animate="visible" className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Équipe d&apos;experts
            </motion.span>
            <motion.h1 variants={heroTitle} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-bold mb-6">Nos formateurs</motion.h1>
            <motion.p variants={heroDescription} initial="hidden" animate="visible" className="text-lg text-white/90 leading-relaxed">
              Une équipe d&apos;experts passionnés et expérimentés dans les métiers
              du numérique et de l&apos;agro-pastoral.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="equipe" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-digie-blue dark:text-white">Découvrez nos experts</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <ExpertCoverflow slides={formateurs} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
