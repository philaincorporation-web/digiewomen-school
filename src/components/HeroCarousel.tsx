"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { carouselConfig, heroSlides, type HeroSlide } from "@/data/heroCarousel";

// ============================================================
// CONFIGURATION
// ============================================================
const ease = [0.22, 1, 0.36, 1] as const;

const positions = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

// ============================================================
// VARIANTS STATIQUES
// ============================================================
const makeContentVariants = (delay: number, withScale = false): Variants => ({
  hidden: {
    opacity: 0,
    y: 16,
    scale: withScale ? 0.98 : 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      delay,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.15,
    },
  },
});

const labelVariants = makeContentVariants(0);
const titleVariants = makeContentVariants(0.05);
const descriptionVariants = makeContentVariants(0.1);
const ctaVariants = makeContentVariants(0.15, true);

// ============================================================
// COMPOSANT
// ============================================================
type HeroCarouselProps = {
  slides?: HeroSlide[];
  ariaLabel?: string;
};

export default function HeroCarousel({ slides = heroSlides, ariaLabel = "À la une" }: HeroCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const slide = slides[activeSlide];

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  const goToSlide = useCallback((index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
    setProgressKey((key) => key + 1);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  const previousSlide = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previousSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide]);

  // ----------------------------------------------------------
  // AUTOPLAY
  // ----------------------------------------------------------
  useEffect(() => {
    if (!carouselConfig.autoplay || isPaused || reduceMotion) return;

    const timeout = window.setTimeout(nextSlide, carouselConfig.interval);
    return () => window.clearTimeout(timeout);
  }, [activeSlide, isPaused, nextSlide, reduceMotion]);

  // ----------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------
  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-digie-green text-white"
      onMouseEnter={() => carouselConfig.pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => carouselConfig.pauseOnHover && setIsPaused(false)}
    >
      {/* ======================================================
          IMAGE / BACKGROUND
      ====================================================== */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slide.id}
          aria-hidden="true"
          className="absolute inset-0"
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.04 }
          }
          animate={{ opacity: 1, scale: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.02 }
          }
          transition={{
            duration: reduceMotion ? 0.2 : carouselConfig.transitionDuration / 1900,
            ease,
          }}
        >
          {/* Image avec effet Ken Burns */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={
              carouselConfig.kenBurns && !reduceMotion
                ? { scale: 1.06 }
                : { scale: 1 }
            }
            transition={{
              duration: carouselConfig.interval / 1000,
              ease: "linear",
            }}
          >
            <Image
              src={slide.image}                 // ← maintenant dynamique
              alt={slide.title}
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover"
              style={{
                objectPosition: slide.objectPosition ?? "center",
              }}
            />
          </motion.div>

          {/* Overlay principal avec support du dégradé vert sur-mesure */}
          <div
            className={`absolute inset-0 ${
              slide.overlayGradient === "green"
                ? "bg-gradient-to-r from-digie-green-dark/90 via-digie-green/60 to-black/75"
                : slide.overlayGradient === "none"
                ? "bg-transparent"
                : "bg-gradient-to-r from-black/80 via-black/50 to-black/20"
            }`}
          />
          {/* Overlay secondaire pour contraster le texte */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* ======================================================
          CONTENU DU HERO
      ====================================================== */}
      <div className="container relative mx-auto flex min-h-[calc(100svh-5rem)] items-center px-4 pb-32 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className={`flex w-full flex-col ${positions[slide.contentPosition]}`}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-2xl">
              {/* Label */}
              <motion.span
                variants={labelVariants}
                className="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
              >
                {slide.label}
              </motion.span>

              {/* Titre */}
              <motion.h1
                variants={titleVariants}
                className="mb-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
              >
                {slide.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={descriptionVariants}
                className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={ctaVariants}
                className={`flex flex-wrap gap-4 ${
                  slide.contentPosition === "center"
                    ? "justify-center"
                    : slide.contentPosition === "right"
                      ? "justify-end"
                      : "justify-start"
                }`}
              >
                <Link
                  href={slide.buttonLink}
                  className="inline-flex items-center gap-2 rounded-full bg-digie-green px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-digie-green-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-95"
                >
                  {slide.buttonText}
                  <ArrowRight className="h-5 w-5" />
                </Link>

                {slide.secondaryButtonText && slide.secondaryButtonLink && (
                  <Link
                    href={slide.secondaryButtonLink}
                    className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {slide.secondaryButtonText}
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ======================================================
          CONTROLES + PROGRESSION
      ====================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container mx-auto flex items-center gap-4 px-4 pb-7 sm:px-6 lg:px-8">
          {/* Boutons précédent / suivant */}
          {carouselConfig.showControls && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousSlide}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/15 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Slide précédente"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/15 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Slide suivante"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Progression */}
          {carouselConfig.showProgress && (
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:max-w-sm">
              <span className="text-xs font-semibold tracking-[0.2em]">
                {String(activeSlide + 1).padStart(2, "0")}
              </span>

              <div
                className="h-px flex-1 overflow-hidden bg-white/35"
                aria-hidden="true"
              >
                <motion.div
                  key={progressKey}
                  className="h-full origin-left bg-digie-green-light"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: reduceMotion ? 0 : carouselConfig.interval / 1900,
                    ease: "linear",
                  }}
                />
              </div>

              <span className="text-xs font-semibold tracking-[0.2em]">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          )}

          {/* Indicateurs */}
          <div
            className="ml-auto flex gap-2"
            role="tablist"
            aria-label="Choisir une slide"
          >
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Afficher la slide ${index + 1}: ${item.label}`}
                aria-selected={activeSlide === index}
                role="tab"
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  activeSlide === index
                    ? "w-8 bg-digie-green-light"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
