import { OrbitRing } from "@/components/loading-ui/orbit-ring";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-digie-dark/80 backdrop-blur-md transition-all">
      <OrbitRing className="size-14 text-digie-green dark:text-white" />
      <p className="mt-4 text-sm font-semibold tracking-wide text-digie-green dark:text-white animate-pulse">
        Chargement...
      </p>
    </div>
  );
}
