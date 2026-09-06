import Image from "next/image";
import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
  image?: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials?.length) return null;

  return (
    <section className="bg-gray-50 py-12 dark:bg-digie-dark md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Ils en parlent
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-digie-dark-card"
            >
              {t.rating && (
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.rating!
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
              <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-gray-600">
                      {t.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  {t.role && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}