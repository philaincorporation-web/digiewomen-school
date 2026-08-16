import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  color: string;
}

export default function StatCard({ value, label, color }: StatCardProps) {
  const colorClasses = {
    green: "from-digie-green/20 to-digie-green/5 border-digie-green/30",
    blue: "from-digie-blue/20 to-digie-blue/5 border-digie-blue/30",
    purple: "from-digie-purple/20 to-digie-purple/5 border-digie-purple/30",
  };

  const valueColors = {
    green: "text-digie-green",
    blue: "text-digie-blue dark:text-blue-400",
    purple: "text-digie-purple dark:text-purple-400",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border bg-gradient-to-br p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        colorClasses[color as keyof typeof colorClasses] || colorClasses.green
      )}
    >
      <div className={cn("text-3xl md:text-4xl font-bold mb-2", valueColors[color as keyof typeof valueColors])}>
        {value}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{label}</p>
    </div>
  );
}
