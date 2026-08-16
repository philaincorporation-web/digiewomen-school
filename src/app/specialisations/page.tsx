"use client";

import { motion } from "framer-motion";
import { specialisations } from "@/data/content";
import {
  FolderOpen, GraduationCap, Leaf, ShoppingCart, CloudSun, Bot, MapPin, CheckCircle
} from "lucide-react";
import {
  heroBadge,
  heroTitle,
  heroDescription,
  sectionTitle,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import HeroCarousel from "@/components/HeroCarousel";
import { pageHeroSlides } from "@/data/heroCarousel";

const featureIcons: Record<string, React.ElementType> = {
  GraduationCap, Leaf, ShoppingCart, CloudSun, Bot, MapPin,
};

export default function SpecialisationsPage() {
  const { ged, eagri } = specialisations;

  return (
    <>
      <HeroCarousel slides={pageHeroSlides.specialisations} ariaLabel="Carousel Spécialisations" />
      <section className="hidden bg-gradient-to-br from-digie-green to-digie-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={heroBadge} initial="hidden" animate="visible" className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Solutions innovantes
            </motion.span>
            <motion.h1 variants={heroTitle} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-bold mb-6">Nos spécialisations</motion.h1>
            <motion.p variants={heroDescription} initial="hidden" animate="visible" className="text-lg text-white/90 leading-relaxed">
              Des solutions innovantes de transformation digitale pour les organisations
              et le développement agro-pastoral.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GED */}
      <section id="ged" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-digie-green/10 text-digie-green text-sm font-medium mb-4">
                <FolderOpen className="w-4 h-4" />
                Solution phare
              </div>
              <h2 className="text-3xl font-bold text-digie-blue dark:text-white mb-4">
                {ged.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {ged.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {ged.details}
              </p>
              <ul className="space-y-3">
                {ged.benefits.map((b) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-digie-green flex-shrink-0" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-digie-green/20 to-digie-blue/20 rounded-3xl p-10 flex items-center justify-center"
            >
              <FolderOpen className="w-32 h-32 text-digie-green opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* e-Agri361 */}
      <section id="e-agri361" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-digie-blue dark:text-white">
              {eagri.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mt-4">
              {eagri.description}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {eagri.features.map((f, i) => {
              const Icon = featureIcons[f.icon] || Leaf;
              return (
                <motion.div
                  key={f.title}
                  variants={staggerItem}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-digie-dark-card rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg hover:border-digie-green/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-digie-green/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-digie-green hover:text-white">
                    <Icon className="w-7 h-7 text-digie-green" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
