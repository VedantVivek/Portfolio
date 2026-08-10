"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  animate,
} from "framer-motion";
import {
  easeOut as sharedEase,
  fadeUp,
  scaleIn,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/ui/motion";

export {
  fadeUp,
  scaleIn,
  sectionFadeUp,
  staggerContainer,
  viewportOnce,
};
export const easeOut = sharedEase;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function update() {
      setReduced(media.matches);
    }

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    function update() {
      setIsMobile(media.matches);
    }

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export const heroStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroStaggerMobile = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const heroItemReduced = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: RevealProps) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const offset = reduced ? 0 : isMobile ? Math.min(y, 12) : y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: reduced ? 0 : delay, ease: easeOut }}
      style={{ overflow: "visible" }}
    >
      {children}
    </motion.div>
  );
}

type MediaRevealProps = {
  children: ReactNode;
  className?: string;
};

export function MediaReveal({ children, className }: MediaRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

/** Line-by-line reveal (not word-by-word) per §7.2 */
export function TextReveal({
  text,
  className,
  as: Tag = "h2",
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const lines = text.split("\n");

  if (reduced) {
    return <Tag className={className}>{text.replace(/\n/g, " ")}</Tag>;
  }

  return (
    <Tag className={className}>
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      <motion.span
        aria-hidden
        className="flex flex-col"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: isMobile ? 0.08 : 0.12,
            },
          },
        }}
      >
        {lines.map((line, index) => (
          <motion.span
            key={`${line}-${index}`}
            className="block"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
          >
            {line}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const isMobile = useIsMobile(640);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reduced || !inView) return;

    const controls = animate(0, value, {
      duration: isMobile ? 0.8 : 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value, reduced, isMobile]);

  return (
    <span ref={ref} className={className}>
      {reduced ? value : display}
      {suffix}
    </span>
  );
}

export function DrawLine({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.9, ease: easeOut }}
      style={{ originX: 0 }}
    />
  );
}

/** Magnetic hover — desktop only, max ~6px, spring 150/15 per §7.6 */
export function useMagnetic(strength = 0.35) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMove(
    event: MouseEvent<HTMLElement>,
    el: HTMLElement | null,
  ) {
    if (reduced || isMobile || !el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-6, Math.min(6, offsetX * strength)));
    y.set(Math.max(-6, Math.min(6, offsetY * strength)));
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    style:
      reduced || isMobile
        ? undefined
        : { x: springX, y: springY },
    onMove,
    onLeave,
    disabled: reduced || isMobile,
  };
}
