"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { moreProjects } from "@/data/portfolio";
import {
  Reveal,
  easeOut,
  usePrefersReducedMotion,
} from "@/lib/motion";

type MoreProject = (typeof moreProjects)[number];

export default function MoreProjects() {
  const [open, setOpen] = useState(true);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="more-work" className="bg-bg-base px-6 py-16 sm:py-20">
      <Container>
        <Reveal>
          <motion.button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            whileHover={reducedMotion ? undefined : { scale: 1.01 }}
            whileTap={reducedMotion ? undefined : { scale: 0.99 }}
            className="group relative flex w-full items-center justify-between gap-4 overflow-hidden border-2 border-accent-primary/35 bg-bg-surface-raised p-5 text-left shadow-[0_10px_30px_rgba(15,110,86,0.12)] transition hover:border-accent-primary hover:shadow-[0_14px_36px_rgba(15,110,86,0.18)] sm:p-6"
          >
            {!reducedMotion && !open ? (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-transparent to-accent-primary/10"
                animate={{ x: ["-40%", "40%", "-40%"] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ) : null}

            <div className="relative z-10 min-w-0">
              <p className="section-label">Also · click to expand</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-text-primary sm:text-2xl">
                Data & analytics projects
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
                {open
                  ? "Hide supporting dashboards and analysis work."
                  : "Tap here to open Power BI + Python dashboard work."}
              </p>
            </div>

            <motion.span
              animate={
                reducedMotion
                  ? { rotate: open ? 180 : 0 }
                  : open
                    ? { rotate: 180, scale: 1 }
                    : { rotate: 0, scale: [1, 1.08, 1] }
              }
              transition={
                open || reducedMotion
                  ? { duration: 0.25 }
                  : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-accent-primary text-bg-surface-raised shadow-[0_0_0_6px_rgba(15,110,86,0.15)]"
            >
              <ChevronDown size={22} strokeWidth={2} />
            </motion.span>
          </motion.button>
        </Reveal>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={
                reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
              }
              animate={
                reducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, height: "auto" }
              }
              exit={
                reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.4, ease: easeOut }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {moreProjects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            y: [0, index % 2 === 0 ? -10 : -6, 0],
                            rotate: [0, index % 2 === 0 ? -0.4 : 0.4, 0],
                          }
                    }
                    transition={
                      reducedMotion
                        ? undefined
                        : {
                            duration: 4.2 + index * 0.45,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.35,
                          }
                    }
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: -14,
                            scale: 1.02,
                            transition: { duration: 0.25 },
                          }
                    }
                    className="group relative overflow-hidden border border-border-subtle bg-bg-surface-raised shadow-[var(--shadow-elevated)] will-change-transform"
                  >
                    {!reducedMotion ? (
                      <motion.span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent"
                        animate={{ x: ["-120%", "120%"] }}
                        transition={{
                          duration: 3.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                          repeatDelay: 1.2,
                        }}
                      />
                    ) : null}

                    <div className="relative z-[2]">
                      <DashboardVisual project={project} />

                      <div className="p-5">
                        <p className="font-mono text-[11px] text-accent-primary">
                          {project.category}
                        </p>
                        <h3 className="mt-2 font-display text-base font-semibold leading-snug text-text-primary">
                          {project.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-text-secondary">
                          {project.description}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.li
                              key={tech}
                              animate={
                                reducedMotion
                                  ? undefined
                                  : {
                                      y: [0, -2, 0],
                                      borderColor: [
                                        "rgba(207,203,194,1)",
                                        "rgba(15,110,86,0.55)",
                                        "rgba(207,203,194,1)",
                                      ],
                                    }
                              }
                              transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                delay: techIndex * 0.25 + index * 0.15,
                                ease: "easeInOut",
                              }}
                              className="chip !px-2 !py-0.5 !text-[11px]"
                            >
                              {tech}
                            </motion.li>
                          ))}
                        </ul>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="link-draw mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary"
                        >
                          Repository
                          <ArrowUpRight size={14} strokeWidth={1.75} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </section>
  );
}

function DashboardVisual({ project }: { project: MoreProject }) {
  const images =
    "images" in project && Array.isArray(project.images) && project.images.length
      ? project.images
      : [project.image];
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const safeIndex = ((active % images.length) + images.length) % images.length;
  const current = images[safeIndex] ?? project.image;

  useEffect(() => {
    if (paused || images.length < 2 || reducedMotion) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1,
      );
    }, 3500);
    return () => window.clearInterval(timer);
  }, [paused, images.length, reducedMotion]);

  function goTo(next: number) {
    const clamped = ((next % images.length) + images.length) % images.length;
    setDirection(clamped > safeIndex || (safeIndex === images.length - 1 && clamped === 0) ? 1 : -1);
    setActive(clamped);
  }

  return (
    <div
      className="overflow-hidden bg-[#111418]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1e24] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[10px] text-white/40">
          {project.title}
        </span>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1217] sm:aspect-[2/1]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              x: reducedMotion ? 0 : direction > 0 ? 28 : -28,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: reducedMotion ? 0 : direction > 0 ? -24 : 24,
            }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="absolute inset-0 flex items-center justify-center p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current}
              alt={`${project.title} dashboard preview`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 ? (
        <div className="relative flex items-center justify-between border-t border-accent-primary/30 bg-accent-primary/15 px-3 py-3">
          {!reducedMotion && !paused ? (
            <motion.div
              key={`progress-${safeIndex}`}
              className="absolute inset-x-0 top-0 h-[3px] origin-left bg-accent-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          ) : null}

          <motion.button
            type="button"
            onClick={() =>
              goTo(safeIndex === 0 ? images.length - 1 : safeIndex - 1)
            }
            aria-label="Previous dashboard view"
            animate={
              reducedMotion
                ? undefined
                : { x: [0, -3, 0], opacity: [0.7, 1, 0.7] }
            }
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary text-bg-surface-raised shadow-[0_0_0_4px_rgba(15,110,86,0.2)]"
          >
            <ArrowLeft size={15} strokeWidth={2} />
          </motion.button>

          <div className="flex items-center gap-2">
            {images.map((image, imageIndex) => (
              <motion.button
                key={image}
                type="button"
                aria-label={`Show dashboard view ${imageIndex + 1}`}
                onClick={() => goTo(imageIndex)}
                animate={
                  !reducedMotion && imageIndex === safeIndex
                    ? { scale: [1, 1.15, 1] }
                    : undefined
                }
                transition={{ duration: 1.2, repeat: Infinity }}
                className={`h-2 rounded-full transition-all ${
                  imageIndex === safeIndex
                    ? "w-7 bg-accent-primary"
                    : "w-2 bg-white/30 hover:bg-white/55"
                }`}
              />
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() =>
              goTo(safeIndex === images.length - 1 ? 0 : safeIndex + 1)
            }
            aria-label="Next dashboard view"
            animate={
              reducedMotion
                ? undefined
                : { x: [0, 3, 0], opacity: [0.7, 1, 0.7] }
            }
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary text-bg-surface-raised shadow-[0_0_0_4px_rgba(15,110,86,0.2)]"
          >
            <ArrowRight size={15} strokeWidth={2} />
          </motion.button>
        </div>
      ) : (
        <div className="border-t border-white/10 bg-[#15191f] px-3 py-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            Full dashboard view
          </p>
        </div>
      )}
    </div>
  );
}
