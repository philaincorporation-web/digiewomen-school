import Image from "next/image";

type Tool = {
  name: string;
  logo?: string;
};

type ToolsProps = {
  tools: Tool[];
};

export default function Tools({ tools }: ToolsProps) {
  if (!tools?.length) return null;

  return (
    <section className="bg-gray-50 py-12 dark:bg-digie-dark md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Outils maîtrisés
        </h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex w-28 flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-digie-dark-card"
            >
              {tool.logo ? (
                <div className="relative h-10 w-10">
                  <Image src={tool.logo} alt={tool.name} fill className="object-contain" />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-digie-green/10 text-sm font-bold text-digie-green">
                  {tool.name[0]}
                </div>
              )}
              <span className="text-center text-xs font-medium text-gray-700 dark:text-gray-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}