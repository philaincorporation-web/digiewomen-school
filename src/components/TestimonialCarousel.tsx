"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TEMOIGNAGES = [
  {
    id: 1,
    name: "Amina Traoré",
    role: "Apprenante - Marketing Digital",
    content:
      "Cette formation a complètement changé ma vision du digital. Les formateurs sont excellents et très à l'écoute.",
    rating: 5,
    image: "/amina.jpg",
    category: "apprenant",
  },
  {
    id: 2,
    name: "Fatou Diallo",
    role: "Apprenante - Développement Web",
    content:
      "Un accompagnement de qualité et une communauté très bienveillante. Je recommande vivement !",
    rating: 5,
    image: "/fatou.jpg",
    category: "apprenant",
  },
  {
    id: 3,
    name: "Société TechAfrica",
    role: "Partenaire entreprise",
    content:
      "Nous avons recruté plusieurs talents issus de DigieWomen School. Très satisfaits du niveau des profils.",
    rating: 5,
    image: "/entreprise.jpg",
    category: "entreprise",
  },
  {
    id: 4,
    name: "Mariama Koné",
    role: "Apprenante - Community Management",
    content:
      "J'ai trouvé un stage grâce à la formation. L'équipe est vraiment investie dans la réussite des apprenantes.",
    rating: 5,
    image: "/images/testimonials/mariama.jpg",
    category: "apprenant",
  },
  {
    id: 5,
    name: "Agence Nova",
    role: "Partenaire entreprise",
    content:
      "Une collaboration fluide et des profils bien formés. DigieWomen School est un vrai vivier de talents.",
    rating: 4,
    image: "/images/testimonials/nova.jpg",
    category: "entreprise",
  },
];

function ReviewCard({
  name,
  role,
  content,
  rating,
  image,
}: {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  category?: string;
}) {


  return (
    <div className="flex-shrink-0 w-[300px] bg-white dark:bg-digie-dark-card rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col shadow-sm">
      <div className="flex justify-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200 dark:fill-gray-600 dark:text-gray-600"
            )}
          />
        ))}
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1 text-center">
        &ldquo;{content}&rdquo;
      </p>

      <div className="flex flex-col items-center gap-3 mt-auto">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>

        <div className="text-center">
          <div className="font-semibold text-gray-900 dark:text-white text-sm">
            {name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const loopItems = [...TEMOIGNAGES, ...TEMOIGNAGES, ...TEMOIGNAGES];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let lastTime = performance.now();
    const speed = 35;

    const animate = (time: number) => {
      if (!isPaused) {
        const delta = time - lastTime;
        container.scrollLeft += (speed * delta) / 1000;

        const oneSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= oneSetWidth) {
          container.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const averageRating = (
    TEMOIGNAGES.reduce((acc, t) => acc + t.rating, 0) / TEMOIGNAGES.length
  ).toFixed(1);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-digie-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16 text-center lg:text-left">
          <p className="text-sm font-medium text-digie-green mb-2">
            Lisez les avis, avancez en confiance.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {averageRating}
              </span>
              <span className="text-lg text-gray-500 dark:text-gray-400">/5</span>
            </div>

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < Math.round(Number(averageRating))
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Basé sur{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                {TEMOIGNAGES.length * 8}+
              </span>{" "}
              avis
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Quote className="w-10 h-10 text-digie-green/30 mb-4" />

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              Ce que disent
              <br />
              nos apprenants
              <br />
              et partenaires
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-digie-green hover:border-digie-green hover:text-white transition-colors"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-digie-green hover:border-digie-green hover:text-white transition-colors"
                aria-label="Avis suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-50 dark:from-digie-dark to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-50 dark:from-digie-dark to-transparent" />

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {loopItems.map((item, index) => (
                <ReviewCard
                  key={`${item.id}-${index}`}
                  name={item.name}
                  role={item.role}
                  content={item.content}
                  rating={item.rating}
                  image={item.image}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}