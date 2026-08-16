"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
  once?: boolean;
}

export function useCountUp({
  end,
  duration = 1.5,
  startOnView = true,
  once = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once });

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    if (startOnView && !isInView) return;
    if (once && hasAnimated) return;

    setHasAnimated(true);
    const startTime = performance.now();
    const startVal = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(startVal + (end - startVal) * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, startOnView, once, hasAnimated, end, duration, prefersReducedMotion]);

  return { count, ref };
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
