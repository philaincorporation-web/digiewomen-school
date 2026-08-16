"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { formations } from "@/data/content";
import FormationCard from "@/components/FormationCard";
import { cn } from "@/lib/utils";
import {
  heroBadge,
  heroTitle,
  heroDescription,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import HeroCarousel from "@/components/HeroCarousel";
import { pageHeroSlides } from "@/data/heroCarousel";

const categories = ["Tous", "Numérique", "Agro-pastoral", "Design et Créatif"];

export default function FormationsPage() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? formations
      : formations.filter((f) => f.category === active);

  return (
    <>
      <HeroCarousel slides={pageHeroSlides.formations} ariaLabel="Carousel Formations" />
      <section className="hidden bg-gradient-to-br from-digie-blue to-digie-purple text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={heroBadge} initial="hidden" animate="visible" className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Nos offres
            </motion.span>
            <motion.h1 variants={heroTitle} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-bold mb-6">Nos formations</motion.h1>
            <motion.p variants={heroDescription} initial="hidden" animate="visible" className="text-lg text-white/90 leading-relaxed">
              Des formations certifiantes et professionnalisantes pour développer
              vos compétences dans les métiers du numérique et de l&apos;agro-pastoral.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="catalogue" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  active === cat
                    ? "bg-digie-green text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((formation, i) => (
              <motion.div
                key={formation.id}
                id={formation.id}
                variants={staggerItem}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <FormationCard formation={formation} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
