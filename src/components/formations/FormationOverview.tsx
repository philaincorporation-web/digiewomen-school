type FormationOverviewProps = {
  overview?: string;
  duration?: string;
  level?: string;
  format?: string;
};

export default function FormationOverview({
  overview,
  duration,
  level,
  format,
}: FormationOverviewProps) {
  if (!overview) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Présentation
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
            {overview}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {level && (
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-digie-dark-card">
                <p className="text-xs uppercase tracking-wide text-gray-500">Niveau</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">{level}</p>
              </div>
            )}
            {duration && (
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-digie-dark-card">
                <p className="text-xs uppercase tracking-wide text-gray-500">Durée</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">{duration}</p>
              </div>
            )}
            {format && (
              <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-digie-dark-card">
                <p className="text-xs uppercase tracking-wide text-gray-500">Format</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">{format}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}