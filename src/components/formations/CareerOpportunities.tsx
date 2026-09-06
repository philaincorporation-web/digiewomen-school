type CareerOpportunitiesProps = {
  careers: string[];
};

export default function CareerOpportunities({ careers }: CareerOpportunitiesProps) {
  if (!careers?.length) return null;

  return (
    <section className="bg-gray-50 py-12 dark:bg-digie-dark md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Débouchés professionnels
        </h2>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {careers.map((career) => (
            <div
              key={career}
              className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-medium text-gray-800 dark:border-gray-700 dark:bg-digie-dark-card dark:text-gray-200"
            >
              {career}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}