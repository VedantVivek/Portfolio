"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import { experiences } from "@/data/portfolio";
import {
  Reveal,
  easeOut,
  fadeUp,
  staggerContainer,
  useIsMobile,
  usePrefersReducedMotion,
} from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (reducedMotion || isMobile || !sectionRef.current || !lineRef.current)
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.5,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, isMobile]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-bg-surface px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-accent-primary/8 blur-[80px]"
      />

      <Container className="relative z-10">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="mt-2 font-display font-semibold text-text-primary">
            Zinnia
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-text-secondary">
            Requirements first, then proof — the path from BA intern to Software
            Quality Engineer.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            ref={lineRef}
            aria-hidden
            className="absolute bottom-6 left-[7px] top-6 origin-top bg-gradient-to-b from-accent-primary via-accent-primary/50 to-accent-primary/10"
            style={{
              width: 2,
              transform: reducedMotion || isMobile ? "scaleY(1)" : "scaleY(0)",
            }}
          />

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={reducedMotion ? undefined : staggerContainer}
          >
            {experiences.map((experience, index) => {
              const isCurrent = experience.type === "Current Role";

              return (
                <motion.article
                  key={`${experience.role}-${experience.period}`}
                  custom={index}
                  variants={reducedMotion ? undefined : fadeUp}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -5,
                          transition: { duration: 0.25, ease: easeOut },
                        }
                  }
                  className="group relative ml-8 overflow-hidden border border-border-subtle bg-bg-surface-raised p-6 shadow-[var(--shadow-resting)] transition-shadow duration-300 hover:border-accent-primary/40 hover:shadow-[var(--shadow-elevated)] sm:p-8"
                >
                  <motion.div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] origin-top bg-accent-primary"
                    initial={reducedMotion ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
                  />

                  <span
                    aria-hidden
                    className={`absolute -left-[37px] top-8 h-3.5 w-3.5 rounded-full border-2 border-accent-primary bg-bg-surface-raised ${
                      isCurrent ? "bg-accent-primary" : ""
                    }`}
                  />
                  {isCurrent && !reducedMotion ? (
                    <motion.span
                      aria-hidden
                      className="absolute -left-[37px] top-8 h-3.5 w-3.5 rounded-full bg-accent-primary/40"
                      animate={{ scale: [1, 2.1, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  ) : null}

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
                          {experience.role}
                        </h3>
                        {isCurrent ? (
                          <span className="border border-accent-primary/30 bg-accent-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-primary">
                            Now
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-text-secondary">
                        {experience.company} · {experience.location}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-text-muted">
                      {experience.period}
                    </p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="chip transition-colors group-hover:border-accent-primary/35"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 space-y-3.5">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={achievement}
                        initial={
                          reducedMotion ? false : { opacity: 0, x: -8 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: reducedMotion ? 0 : 0.08 + i * 0.06,
                          ease: easeOut,
                        }}
                        className="flex gap-3 text-[15px] leading-7 text-text-secondary"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
