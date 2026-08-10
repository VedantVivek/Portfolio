"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

export default function ScrollCue() {
  const reduced = usePrefersReducedMotion();

  if (reduced) return null;

  return (
    <motion.a
      href="#impact"
      aria-label="Scroll to impact metrics"
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-text-secondary transition hover:text-accent-primary"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
        Scroll
      </span>
      <span className="relative h-10 w-px overflow-hidden bg-border-strong">
        <motion.span
          className="absolute inset-x-0 top-0 h-1/2 bg-accent-primary"
          animate={{ y: ["-100%", "200%"] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </span>
    </motion.a>
  );
}
