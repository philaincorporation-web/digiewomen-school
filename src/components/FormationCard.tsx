import Link from "next/link";
import {
  Box, Shield, Brain, Palette, Megaphone, FolderOpen, Image, Users,
  Monitor, Laptop, FileText, Glasses, Code, Database, Sprout, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Box, Shield, Brain, Palette, Megaphone, FolderOpen, Image, Users,
  Monitor, Laptop, FileText, Glasses, Code, Database, Sprout,
};

interface Formation {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
}

export default function FormationCard({ formation }: { formation: Formation }) {
  const Icon = iconMap[formation.icon] || Box;

  return (
    <div className="group bg-white dark:bg-digie-dark-card rounded-2xl border border-gray-200 dark:border-gray-700 p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-digie-green/30">
      <div className="w-12 h-12 rounded-xl bg-digie-green/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-digie-green group-hover:text-white group-hover:scale-110">
        <Icon className="w-6 h-6 text-digie-green transition-colors duration-300 group-hover:text-white" />
      </div>
      <span className="text-xs font-medium text-digie-purple dark:text-blue-800 mb-1">
        {formation.category}
      </span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {formation.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 mb-4">
        {formation.description}
      </p>
      <Link
        href={`/formations/${formation.id}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-digie-white hover:underline transition-all duration-200 group/link"
      >
        En savoir plus
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
