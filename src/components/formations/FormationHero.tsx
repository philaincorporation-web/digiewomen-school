"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type FormationHeroProps = {
  formation: {
    title: string;
    subtitle?: string;
    level?: string;
    duration?: string;
    format?: string;
    image?: string;
    category?: string;
  };
};

export default function FormationHero({ formation }: FormationHeroProps) {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-digie-blue text-white">
      {/* Image de fond optionnelle */}
      {formation.image && (
        <div className="absolute inset-0">
          <Image
            src={formation.image}
            alt={formation.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-digie-blue via-digie-blue/80 to-transparent" />
        </div>
      )}

      <div className="container relative mx-auto flex min-h-[50vh] items-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {formation.category && (
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              {formation.category}
            </span>
          )}

          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            {formation.title}
          </h1>

          {formation.subtitle && (
            <p className="mb-6 text-lg text-white/90">{formation.subtitle}</p>
          )}

          <div className="mb-8 flex flex-wrap gap-4 text-sm text-white/80">
            {formation.level && <span>Niveau : {formation.level}</span>}
            {formation.duration && <span>Durée : {formation.duration}</span>}
            {formation.format && <span>Format : {formation.format}</span>}
          </div>

          <Link
            href="#inscription"
            className="inline-flex rounded-full bg-digie-green px-6 py-3 font-semibold text-white transition hover:bg-digie-green-dark"
          >
            S&apos;inscrire à cette formation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}