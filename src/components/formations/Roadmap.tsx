import RoadmapLevel from "./RoadmapLevel";

type Level = {
  id: string;
  title: string;
  description?: string;
  modules?: string[];
};

type RoadmapProps = {
  levels: Level[];
};

export default function Roadmap({ levels }: RoadmapProps) {
  if (!levels?.length) return null;

  return (
    <section className="bg-gray-50 py-12 dark:bg-digie-dark md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Parcours de formation
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          {levels.map((level, index) => (
            <RoadmapLevel
              key={level.id}
              level={level}
              index={index}
              isLast={index === levels.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}