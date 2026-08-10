"use client";

import { useEffect, useRef, type MouseEvent as ReactMouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Wrench, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import { caseStudies } from "@/data/portfolio";
import {
  CountUp,
  Reveal,
  easeOut,
  useIsMobile,
  usePrefersReducedMotion,
} from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function parseMetric(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { n: null as number | null, suffix: value };
  return { n: Number(match[1]), suffix: match[2] ?? "" };
}

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (reducedMotion || isMobile || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-case-card]");

      cards.forEach((card, index) => {
        const fromX = index % 2 === 0 ? -48 : 48;

        gsap.fromTo(
          card,
          { opacity: 0, x: fromX, rotateZ: index % 2 === 0 ? -1.2 : 1.2 },
          {
            opacity: 1,
            x: 0,
            rotateZ: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.65,
            },
          },
        );
      });

      gsap.fromTo(
        "[data-case-rail]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
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
      id="case-studies"
      className="relative overflow-hidden bg-bg-base px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent-primary/12 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-accent-primary/8 blur-[100px]"
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-label">Case Studies</p>
              <h2 className="mt-2 font-display font-semibold text-text-primary">
                Impact at Zinnia
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-text-secondary">
                Four pieces of work from Zinnia — action, stack, and the result
                that mattered.
              </p>
            </div>
            <p className="font-mono text-sm text-text-muted">
              0{caseStudies.length} case studies
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div
            data-case-rail
            aria-hidden
            className="absolute bottom-8 left-[18px] top-8 hidden origin-top bg-gradient-to-b from-accent-primary via-accent-primary/50 to-transparent md:block"
            style={{
              width: 2,
              transform: reducedMotion || isMobile ? "scaleY(1)" : "scaleY(0)",
            }}
          />

          <div className="space-y-8 md:space-y-10">
            {caseStudies.map((study, index) => (
              <CaseCard
                key={study.id}
                study={study}
                index={index}
                reducedMotion={reducedMotion}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type Study = (typeof caseStudies)[number];

function CaseCard({
  study,
  index,
  reducedMotion,
  isMobile,
}: {
  study: Study;
  index: number;
  reducedMotion: boolean;
  isMobile: boolean;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 160, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 160, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${springX}% ${springY}%, rgba(15,110,86,0.16), transparent 42%)`;
  const metric = parseMetric(study.resultValue);
  const inverted = index % 2 === 1;

  function onMove(event: ReactMouseEvent<HTMLElement>) {
    if (reducedMotion || isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  function onLeave() {
    mouseX.set(50);
    mouseY.set(50);
  }

  return (
    <motion.article
      ref={cardRef}
      data-case-card
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={
        reducedMotion || isMobile
          ? undefined
          : {
              y: -8,
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }
      }
      whileTap={isMobile && !reducedMotion ? { scale: 0.985 } : undefined}
      className={`group relative ml-0 overflow-hidden border md:ml-12 ${
        inverted
          ? "border-accent-primary/25 bg-text-primary text-bg-surface-raised"
          : "border-border-subtle bg-bg-surface-raised text-text-primary"
      }`}
    >
      {!reducedMotion && !isMobile ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      ) : null}

      {/* Giant watermark index */}
      <motion.span
        aria-hidden
        className={`pointer-events-none absolute -right-2 -top-6 font-display text-[7.5rem] font-bold leading-none sm:text-[9rem] ${
          inverted ? "text-white/[0.06]" : "text-accent-primary/[0.07]"
        }`}
        initial={reducedMotion ? false : { opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
      >
        0{index + 1}
      </motion.span>

      <span
        aria-hidden
        className="absolute -left-[49px] top-10 hidden h-3.5 w-3.5 rounded-full border-2 border-accent-primary bg-bg-base md:block"
      />

      <div className="relative z-[2] grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <motion.span
              aria-hidden
              className={`h-px w-10 origin-left sm:w-14 ${
                inverted ? "bg-accent-primary" : "bg-accent-primary"
              }`}
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
            />
            <motion.span
              aria-hidden
              className={`h-px flex-1 origin-left ${
                inverted ? "bg-white/15" : "bg-border-subtle"
              }`}
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            />
          </div>

          <h3
            className={`mt-5 font-display text-2xl font-semibold sm:text-[1.85rem] ${
              inverted ? "text-bg-surface-raised" : "text-text-primary"
            }`}
          >
            {study.title}
          </h3>

          {/* TODO: add case study context — problem statement */}
          {/* TODO: add individual vs team contribution note */}

          <div className="mt-6 flex gap-3">
            <span
              className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center ${
                inverted
                  ? "bg-accent-primary text-bg-surface-raised"
                  : "bg-accent-primary/12 text-accent-primary"
              }`}
            >
              <Wrench size={15} strokeWidth={1.75} />
            </span>
            <div>
              <p
                className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                  inverted ? "text-bg-surface-raised/45" : "text-text-muted"
                }`}
              >
                Action
              </p>
              <p
                className={`mt-2 text-[15px] leading-7 ${
                  inverted
                    ? "text-bg-surface-raised/75"
                    : "text-text-secondary"
                }`}
              >
                {study.action}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p
              className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                inverted ? "text-bg-surface-raised/45" : "text-text-muted"
              }`}
            >
              Tech
            </p>
            <motion.ul
              className="mt-3 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.08,
                  },
                },
              }}
            >
              {study.tech.map((tech) => (
                <motion.li
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.92 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.35, ease: easeOut },
                    },
                  }}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -2, scale: 1.04 }
                  }
                  className={`border px-3 py-1.5 text-xs transition-colors ${
                    inverted
                      ? "border-white/15 bg-white/5 text-bg-surface-raised/85 hover:border-accent-primary hover:bg-accent-primary hover:text-bg-surface-raised"
                      : "border-border-subtle bg-bg-surface text-text-secondary hover:border-accent-primary hover:text-accent-primary"
                  }`}
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div
          className={`relative flex flex-col justify-between gap-8 border-t p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 ${
            inverted
              ? "border-white/10 bg-black/20"
              : "border-border-subtle bg-accent-primary text-bg-surface-raised"
          }`}
        >
          <div>
            <p
              className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] ${
                inverted ? "text-accent-primary" : "text-bg-surface-raised/70"
              }`}
            >
              <Zap size={13} strokeWidth={1.75} />
              Result
            </p>

            <motion.p
              className={`mt-4 font-mono text-5xl font-bold leading-none sm:text-6xl ${
                inverted ? "text-accent-primary" : "text-bg-surface-raised"
              }`}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.86, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                delay: 0.1,
              }}
            >
              {metric.n !== null ? (
                <CountUp value={metric.n} suffix={metric.suffix} />
              ) : (
                study.resultValue
              )}
            </motion.p>

            <p
              className={`mt-4 max-w-[16rem] text-sm leading-6 ${
                inverted
                  ? "text-bg-surface-raised/65"
                  : "text-bg-surface-raised/85"
              }`}
            >
              {study.resultLabel}
            </p>
          </div>

          <motion.div
            className={`flex items-center gap-2 text-sm font-semibold ${
              inverted ? "text-bg-surface-raised/70" : "text-bg-surface-raised"
            }`}
            initial={reducedMotion ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Evidence over claims
            <ArrowUpRight size={15} strokeWidth={1.75} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
