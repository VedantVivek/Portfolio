"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { featuredProjects } from "@/data/portfolio";
import {
  MediaReveal,
  Reveal,
  easeOut,
  usePrefersReducedMotion,
} from "@/lib/motion";

type Project = (typeof featuredProjects)[number];

export default function Projects() {

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-bg-base px-6 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="mt-2 font-display font-semibold text-text-primary">
            Things I shipped
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-text-secondary">
            Test automation and full-stack products, built end to end.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10 lg:space-y-12">
          {featuredProjects.map((project) => (<PrimaryProject key={project.title} project={project} />))}
        </div>
      </Container>
    </section>
  );
}

function PrimaryProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden border border-border-subtle bg-bg-surface-raised shadow-[var(--shadow-resting)]">
      <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
        <MediaReveal className="border-b border-border-subtle lg:border-b-0 lg:border-r">
          <ProjectVisual project={project} large />
        </MediaReveal>

        <Reveal delay={0.08} y={24} className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="text-sm text-accent-primary">{project.category}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-text-primary sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-text-secondary">
            {project.tagline}
          </p>
          <p className="mt-5 text-[15px] leading-7 text-text-secondary/90">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={project.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="group/btn"
            >
              <FaGithub size={16} />
              GitHub
              <ArrowUpRight
                size={15}
                className="opacity-0 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:opacity-100"
              />
            </Button>
            {project.liveDemo ? (
              <Button
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                Live demo
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const images = Array.isArray(project.images) ? project.images : [];
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || images.length < 2 || paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setActiveImage((current) =>
        current === images.length - 1 ? 0 : current + 1,
      );
    }, 4200);
    return () => window.clearInterval(id);
  }, [images.length, paused, reducedMotion]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeImage]);

  function goTo(next: number, dir: number) {
    setDirection(dir);
    setActiveImage(next);
  }

  if (images.length === 0) {
    return (
      <div
        className={`relative flex items-end overflow-hidden bg-bg-surface p-6 ${
          large ? "min-h-[320px]" : "min-h-[220px]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(15,110,86,0.1),transparent_55%)]" />
        <div className="relative z-10">
          <p className="text-sm text-accent-primary">{project.category}</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {project.title}
          </p>
          <p className="mt-2 max-w-sm text-sm text-text-secondary">
            {project.tagline}
          </p>
        </div>
      </div>
    );
  }

  const current = images[activeImage];
  const isPhone = current.includes("mobile");
  const isPhotoGallery = project.title === "LocalEstate";

  return (
    <div
      className="group bg-[#12151a]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {!isPhone ? (
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1e24] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-sm bg-white/8 px-3 py-1 font-mono text-[10px] tracking-wide text-white/45">
            {project.title.toLowerCase().replace(/\s+/g, "")}.app
          </span>
          <span className="ml-auto font-mono text-[10px] tracking-wide text-white/35">
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      ) : null}

      <div
        className={`relative ${
          isPhone
            ? "flex min-h-[380px] items-center justify-center bg-gradient-to-b from-[#12151a] to-[#0a0d12] px-6 py-8 sm:min-h-[420px]"
            : large
              ? "h-[420px] sm:h-[480px]"
              : "h-[300px] sm:h-[340px]"
        }`}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{
              x: reducedMotion ? 0 : direction > 0 ? 36 : -36,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: reducedMotion ? 0 : direction > 0 ? -28 : 28,
              opacity: 0,
            }}
            transition={{ duration: 0.4, ease: easeOut }}
            className={
              isPhone
                ? "relative h-[340px] w-[min(100%,200px)] sm:h-[380px]"
                : "absolute inset-0"
            }
          >
            {isPhone ? (
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border-[3px] border-white/20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
                  <span className="h-4 w-20 rounded-full bg-black/70" />
                </div>
                <div className="h-full overflow-y-auto overscroll-contain">
                  <Image
                    src={current}
                    alt={`${project.title} mobile screen`}
                    width={1170}
                    height={2400}
                    className="h-auto w-full"
                    sizes="200px"
                    loading={activeImage === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ) : isPhotoGallery ? (
              <div className="relative h-full w-full overflow-hidden bg-[#0f1217]">
                <Image
                  src={current}
                  alt={`${project.title} property preview`}
                  fill
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  priority={activeImage === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>
            ) : (
              <div
                ref={scrollRef}
                className="h-full overflow-y-auto overscroll-contain bg-[#0f1217]"
              >
                <Image
                  src={current}
                  alt={`${project.title} product screenshot`}
                  width={1440}
                  height={1600}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  priority={activeImage === 0}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 ? (
        <div className="flex items-center justify-between border-t border-white/10 bg-[#15191f] px-4 py-3">
          <button
            type="button"
            onClick={() =>
              goTo(activeImage === 0 ? images.length - 1 : activeImage - 1, -1)
            }
            aria-label="Previous preview"
            className="text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={18} strokeWidth={1.75} />
          </button>
          <div className="flex items-center gap-2">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                aria-label={`Show preview ${imageIndex + 1}`}
                onClick={() =>
                  goTo(imageIndex, imageIndex > activeImage ? 1 : -1)
                }
                className={`h-1.5 rounded-full transition-all ${
                  imageIndex === activeImage
                    ? "w-6 bg-accent-primary"
                    : "w-1.5 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              goTo(
                activeImage === images.length - 1 ? 0 : activeImage + 1,
                1,
              )
            }
            aria-label="Next preview"
            className="text-white/50 transition hover:text-white"
          >
            <ArrowRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
