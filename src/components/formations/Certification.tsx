import Image from "next/image";

type CertificationProps = {
  certification: {
    title: string;
    description?: string;
    image?: string;
  };
};

export default function Certification({ certification }: CertificationProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-digie-green/20 bg-digie-green/5 p-8 text-center md:flex-row md:text-left">
          {certification.image && (
            <div className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
              {certification.title}
            </h2>
            {certification.description && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {certification.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}