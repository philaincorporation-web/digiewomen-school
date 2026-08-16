"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

export type ExpertSlide = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  photo: string;
};

type ExpertCoverflowProps = {
  slides: ExpertSlide[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tilt?: number;
  sideTilt?: number;
  gap?: number;
  opacity?: number;
  autoplay?: boolean;
  autoplayDirection?: "leftToRight" | "rightToLeft";
  interval?: number;
  transitionDuration?: number;
  showTitle?: boolean;
  visibleSideCards?: number;
};

export default function ExpertCoverflow({
  slides,
  cardWidth = 320,
  cardHeight = 430,
  radius = 24,
  tilt = 12,
  sideTilt = 8,
  gap = 8,
  opacity = 55,
  autoplay = true,
  autoplayDirection = "rightToLeft",
  interval = 10000,
  transitionDuration = 1.2,
  showTitle = true,
  visibleSideCards = 2,
}: ExpertCoverflowProps) {
  const reduceMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length === 0) {
      setActive(0);
      return;
    }
    if (active >= slides.length) {
      setActive(0);
    }
  }, [active, slides.length]);

  const goTo = useCallback(
    (index: number) => {
      if (slides.length === 0) return;
      setActive((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const previous = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (!autoplay || paused || reduceMotion || slides.length < 2) return;

    const timer = window.setTimeout(() => {
      const direction = autoplayDirection === "rightToLeft" ? 1 : -1;
      goTo(active + direction);
    }, interval);

    return () => window.clearTimeout(timer);
  }, [active, autoplay, autoplayDirection, goTo, interval, paused, reduceMotion, slides.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const tagName = target.tagName.toLowerCase();
      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  if (!slides.length) return null;

  const sideCards = Math.max(0, visibleSideCards);
  const sideOpacity = Math.min(100, Math.max(0, opacity));

  const motionTransition = useMemo(() => {
    if (reduceMotion) return { duration: 0 };
    return {
      type: "spring" as const,
      stiffness: 140,
      damping: 22,
      mass: 0.9,
    };
  }, [reduceMotion]);

  // Hauteur un peu plus basse sur mobile
  const containerHeight = Math.max(420, cardHeight + 60);

  return (
    <section
      className="relative mx-auto w-full max-w-6xl"
      aria-label="Galerie de nos experts"
    >
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          height: `${containerHeight}px`,
          perspective: "1400px",
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galerie de nos experts"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        {slides.map((expert, index) => {
          const offset = getRelativeOffset(index, active, slides.length);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= sideCards;

          if (!isVisible) return null;

          return (
            <motion.button
              key={expert.id}
              type="button"
              aria-label={`Afficher le profil de ${expert.name}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => goTo(index)}
              className="
                absolute left-1/2 top-4 sm:top-6 overflow-hidden
                border border-white/30 bg-digie-dark
                text-left shadow-2xl outline-none
                focus-visible:ring-4 focus-visible:ring-digie-green
              "
              style={{
                // Plus petit sur mobile
                width: `min(${cardWidth}px, calc(100vw - 64px))`,
                height: `min(${cardHeight}px, 380px)`,
                borderRadius: `${radius}px`,
                marginLeft: `-${Math.min(cardWidth, 280) / 2}px`,
                transformStyle: "preserve-3d",
                zIndex: isActive ? 50 : 10 - Math.abs(offset),
              }}
              initial={false}
              animate={{
                x: offset * (cardWidth * 0.58 + gap * 2.5),
                y: isActive ? 0 : 32,
                z: isActive ? 180 : -Math.abs(offset) * 160,
                rotateY: offset * -sideTilt,
                rotateZ: offset * -tilt * 0.3,
                scale: isActive ? 1 : 0.78,
                opacity: isActive ? 1 : sideOpacity / 100,
              }}
              transition={motionTransition}
              whileHover={
                isActive && !reduceMotion ? { y: -6 } : undefined
              }
              tabIndex={0}
            >
              {/* PHOTO */}
              <div className="absolute inset-0">
                {expert.photo ? (
                  <img
                    src={expert.photo}
                    alt={`Photo de ${expert.name}`}
                    className="h-full w-full object-cover"
                    loading={isActive ? "eager" : "lazy"}
                  />
                ) : (
                  <div
                    className="h-full w-full bg-digie-dark"
                    role="img"
                    aria-label={`Photo par défaut de ${expert.name}`}
                  />
                )}
              </div>

              {/* DÉGRADÉ */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
                aria-hidden="true"
              />

              {/* BARRE VERTE */}
              <div
                className="absolute inset-x-0 top-0 h-1 bg-digie-green"
                aria-hidden="true"
              />

              {/* TEXTE - uniquement sur la carte active */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 18,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    ease: "easeOut",
                  }}
                  className={isActive ? "" : "pointer-events-none"}
                >
                  <p className="mb-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-digie-green-light">
                    Expert DigieWomen
                  </p>

                  {showTitle && (
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                      {expert.name}
                    </h3>
                  )}

                  <p className="mt-1.5 text-sm font-medium text-white/95">
                    {expert.title}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                    {expert.specialty}
                  </p>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* CONTRÔLES */}
      <div className="mt-1 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={previous}
          className="
            grid h-10 w-10 shrink-0 place-items-center rounded-full
            border border-digie-green/30 text-digie-green
            transition hover:bg-digie-green hover:text-white
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-digie-green
          "
          aria-label="Expert précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          className="flex max-w-[55vw] items-center justify-center gap-1.5 overflow-hidden sm:max-w-none sm:gap-2"
          role="group"
          aria-label="Choisir un expert"
        >
          {slides.map((expert, index) => {
            const isActive = active === index;
            const distance = Math.abs(index - active);
            const circularDistance = Math.min(distance, slides.length - distance);
            const showIndicator = slides.length <= 10 || circularDistance <= 3;

            if (!showIndicator) return null;

            return (
              <button
                key={expert.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Afficher ${expert.name}`}
                aria-current={isActive ? "true" : undefined}
                className={`
                  h-2.5 shrink-0 rounded-full transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-digie-green
                  ${isActive ? "w-8 bg-digie-green" : "w-2.5 bg-gray-300 dark:bg-gray-500"}
                `}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          className="
            grid h-10 w-10 shrink-0 place-items-center rounded-full
            border border-digie-green/30 text-digie-green
            transition hover:bg-digie-green hover:text-white
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-digie-green
          "
          aria-label="Expert suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Expert affiché : {slides[active]?.name}
      </p>
    </section>
  );
}

function getRelativeOffset(index: number, active: number, total: number) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}