type Level = {
  id: string;
  title: string;
  description?: string;
  modules?: string[];
};

type RoadmapLevelProps = {
  level: Level;
  index: number;
  isLast?: boolean;
};

export default function RoadmapLevel({ level, index, isLast }: RoadmapLevelProps) {
  return (
    <div className="relative flex gap-4">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-digie-green text-sm font-bold text-white">
          {index + 1}
        </div>
        {!isLast && <div className="mt-2 w-0.5 flex-1 bg-digie-green/30" />}
      </div>

      {/* Contenu */}
      <div className="mb-2 flex-1 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-digie-dark-card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {level.title}
        </h3>
        {level.description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {level.description}
          </p>
        )}
        {level.modules && level.modules.length > 0 && (
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {level.modules.map((mod) => (
              <li key={mod}>{mod}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}