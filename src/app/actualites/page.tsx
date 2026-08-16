"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X } from "lucide-react";
import { useState } from "react";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import HeroCarousel from "@/components/HeroCarousel";
import { pageHeroSlides } from "@/data/heroCarousel";

type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  fullDescription?: string;
  type: string;
  image: string;
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Formation Cybersécurité & IA",
    date: "2025",
    location: "Libreville, Gabon",
    description:
      "Sessions intensives de formation en cybersécurité et initiation à l'intelligence artificielle en partenariat avec Moov Africa Gabon Telecom.",
    fullDescription:
      "Sessions intensives de formation en cybersécurité et initiation à l'intelligence artificielle en partenariat avec Moov Africa Gabon Telecom. Ces formations visent à renforcer les compétences des jeunes et des femmes dans les métiers du numérique, avec un focus sur la protection des systèmes d'information et les applications concrètes de l'IA.",
    type: "Formation",
    image: "/images/actualites/fortion2.png",
  },
  {
    id: 2,
    title: "DIGIEWOMEN AWARDS",
    date: "2023-2026",
    location: "Libreville",
    description:
      "4 éditions des DIGIEWOMEN AWARDS célébrant l'excellence des femmes et des jeunes dans le numérique et l'agro-pastoral.",
    fullDescription:
      "4 éditions Panafricaine des DIGIEWOMEN AWARDS célébrant l'excellence des femmes du continent et des jeunes dans le numérique. Un événement phare qui met en lumière les talents, récompense l'innovation et crée des opportunités de networking et de collaboration.",
    type: "Événement",
    image: "/images/actualites/conference006.png",
  },
  {
    id: 3,
    title: "Lancement e-Agri361",
    date: "2024",
    location: "Gabon",
    description:
      "Déploiement de la plateforme e-Agri361 pour l'agriculture intelligente et le développement agro-pastoral des femmes et des jeunes.",
    fullDescription:
      "Déploiement de la plateforme e-Agri361 pour l'agriculture intelligente et le développement agro-pastoral des femmes et des jeunes. Cette solution digitale intègre formation, accès aux intrants, marketplace agricole, météo et outils d'aide à la décision basés sur l'IA.",
    type: "Innovation",
    image: "/images/actualites/eagri2.png",
  },
  {
    id: 4,
    title: "Partenariats institutionnels",
    date: "2018-2026",
    location: "Gabon & International",
    description:
      "Collaboration avec les ministères, Moov Africa, l'OIF, l'IOM et plus de 35 partenaires stratégiques.",
    fullDescription:
      "Collaboration avec les ministères, Moov Africa, l'OIF, l'IOM et plus de 35 partenaires stratégiques. Ces partenariats permettent de déployer des programmes de formation, d'innovation et d'accompagnement à grande échelle au Gabon et à l'international.",
    type: "Partenariat",
    image: "/images/actualites/partenariat.jpg",
  },
  
   {
    id: 5,
    title: "Partenariats institutionnels",
    date: "2018-2026",
    location: "Gabon & International",
    description:
      "Collaboration avec les ministères, Moov Africa, l'OIF, l'IOM et plus de 35 partenaires stratégiques.",
    fullDescription:
      "Collaboration avec les ministères, Moov Africa, l'OIF, l'IOM et plus de 35 partenaires stratégiques. Ces partenariats permettent de déployer des programmes de formation, d'innovation et d'accompagnement à grande échelle au Gabon et à l'international.",
    type: "Partenariat",
    image: "/images/actualites/partenariat.jpg",
  },
  

];

export default function ActualitesPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <>
      <HeroCarousel
        slides={pageHeroSlides.actualites}
        ariaLabel="Carousel Actualités"
      />

      <section id="actualites" className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8"
          >
            {events.map((event, i) => (
              <motion.article
                key={event.id}
                variants={staggerItem}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedEvent(event)}
                className="
                  group cursor-pointer bg-white dark:bg-digie-dark-card
                  rounded-2xl border border-gray-200 dark:border-gray-700
                  overflow-hidden hover:shadow-xl hover:border-digie-green/40
                  transition-all duration-300
                "
              >
                {/* IMAGE */}
                <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas encore
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23d1fae5' width='400' height='200'/%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-digie-dark-card/90 text-digie-green text-xs font-semibold backdrop-blur-sm">
                    {event.type}
                  </span>
                </div>

                {/* CONTENU */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {event.title}
                  </h2>

                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-300 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {event.location}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  <p className="mt-3 text-digie-green text-sm font-medium group-hover:underline">
                    Voir plus →
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Les contenus textuels des actualités peuvent être alimentés via Notion.
              Les médias (photos et vidéos) sont gérés directement dans le code du projet.
            </p>
          </div>
        </div>
      </section>

      {/* ========== MODALE ========== */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-digie-dark-card rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image de la modale */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23d1fae5' width='800' height='400'/%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Bouton fermer */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition backdrop-blur-sm"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 text-digie-green text-xs font-semibold">
                  {selectedEvent.type}
                </span>
              </div>

              {/* Contenu de la modale */}
              <div className="p-5 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedEvent.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-300 mb-5 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedEvent.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {selectedEvent.location}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm sm:text-base">
                  {selectedEvent.fullDescription || selectedEvent.description}
                </p>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2.5 rounded-full bg-digie-green text-white font-medium hover:bg-digie-green/90 transition"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}