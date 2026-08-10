"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/lib/motion";
import { setLenisInstance } from "@/lib/scroll";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setLenisInstance(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.4,
      anchors: false,
    });

    setLenisInstance(lenis);

    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    document.documentElement.classList.add("lenis");

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("lenis");
      setLenisInstance(null);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
