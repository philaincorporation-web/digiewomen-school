"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { OrbitRing } from "@/components/loading-ui/orbit-ring";

function PageTransitionListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        anchor.target !== "_blank"
      ) {
        const currentUrl = window.location.pathname + window.location.search;
        if (href !== currentUrl) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 dark:bg-digie-dark/80 backdrop-blur-md transition-all duration-300">
      <OrbitRing className="size-14 text-digie-green dark:text-white" />
      <p className="mt-4 text-sm font-semibold tracking-wide text-digie-green dark:text-white animate-pulse">
        Chargement...
      </p>
    </div>
  );
}

export default function PageTransitionLoader() {
  return (
    <Suspense fallback={null}>
      <PageTransitionListener />
    </Suspense>
  );
}
