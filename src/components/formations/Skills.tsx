type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  if (!skills?.length) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Compétences acquises
        </h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-digie-green/30 bg-digie-green/10 px-4 py-2 text-sm font-medium text-digie-green"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}