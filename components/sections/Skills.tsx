"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  Code2,
  Database,
  GitBranch,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { skillCategories } from "@/data/portfolio";
import {
  Reveal,
  easeOut,
  usePrefersReducedMotion,
} from "@/lib/motion";

const icons = [Bot, Code2, Braces, GitBranch, Database];
const blurbs = [
  "Coverage that survives real releases",
  "Languages I ship and automate in",
  "Building the product, not only testing it",
  "Where the work is tracked and shipped",
  "Turning data into clear decisions",
];

const marqueeSkills = [
  "Playwright",
  "TypeScript",
  "Selenium",
  "Next.js",
  "Python",
  "REST APIs",
  "Postman",
  "React",
  "JMeter",
  "MongoDB",
  "Power BI",
  "Agile",
];

export default function Skills() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-text-primary px-6 py-24 text-bg-surface-raised sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-accent-primary/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-accent-primary/10 blur-[90px]"
      />

      {!reducedMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-accent-primary/15 blur-[70px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.2, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <Container className="relative z-10">
        <Reveal>
          <p className="font-mono text-[13px] text-accent-primary">Skills</p>
          <h2 className="mt-2 font-display font-semibold text-bg-surface-raised">
            What I reach for day to day
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-bg-surface-raised/65">
            Testing first. Product building second. Analytics when the question
            is in the data.
          </p>
        </Reveal>

        {!reducedMotion ? (
          <div className="relative mt-10 overflow-hidden border-y border-white/10 py-3">
            <motion.div
              className="flex w-max gap-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="inline-flex shrink-0 items-center border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-primary"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="mt-10 flex flex-wrap gap-2 border-y border-white/10 py-3">
            {marqueeSkills.map((skill) => (
              <span
                key={skill}
                className="border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-accent-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index] ?? Code2;
            const isLast = index === skillCategories.length - 1;

            return (
              <Reveal
                key={category.title}
                delay={Math.min(index * 0.06, 0.3)}
                y={28}
                className={isLast ? "md:col-span-2 xl:col-span-1" : ""}
              >
                <SkillCard
                  category={category}
                  blurb={blurbs[index]}
                  Icon={Icon}
                  index={index}
                  reducedMotion={reducedMotion}
                  isLast={isLast}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function SkillCard({
  category,
  blurb,
  Icon,
  index,
  reducedMotion,
  isLast,
}: {
  category: (typeof skillCategories)[number];
  blurb: string;
  Icon: typeof Bot;
  index: number;
  reducedMotion: boolean;
  isLast: boolean;
}) {
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    if (reducedMotion || category.skills.length < 2) return;
    const id = window.setInterval(() => {
      setActiveSkill((current) =>
        current === category.skills.length - 1 ? 0 : current + 1,
      );
    }, 1400);
    return () => window.clearInterval(id);
  }, [category.skills.length, reducedMotion]);

  return (
    <motion.article
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, index % 2 === 0 ? -8 : -5, 0],
            }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 4 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }
      }
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -12,
              scale: 1.02,
              transition: { duration: 0.25, ease: easeOut },
            }
      }
      className={`group relative h-full overflow-hidden border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-primary/50 hover:bg-white/[0.07] sm:p-7 ${
        isLast ? "opacity-95" : ""
      }`}
    >
      {!reducedMotion ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-primary/20 blur-2xl"
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.15, 1] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      ) : null}

      <motion.span
        className="relative z-10 flex h-12 w-12 items-center justify-center bg-accent-primary text-bg-surface-raised"
        animate={
          reducedMotion
            ? undefined
            : { rotate: [0, -8, 8, 0], scale: [1, 1.06, 1] }
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        }}
        whileHover={reducedMotion ? undefined : { rotate: -10, scale: 1.1 }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </motion.span>

      <h3 className="relative z-10 mt-5 font-display text-xl font-semibold text-bg-surface-raised">
        {category.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm leading-6 text-bg-surface-raised/55">
        {blurb}
      </p>

      <ul className="relative z-10 mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => {
          const isActive = activeSkill === skillIndex;
          return (
            <motion.li
              key={skill}
              animate={
                reducedMotion
                  ? undefined
                  : isActive
                    ? {
                        y: -3,
                        scale: 1.08,
                        backgroundColor: "rgba(15,110,86,1)",
                        borderColor: "rgba(15,110,86,1)",
                        color: "rgba(250,249,246,1)",
                      }
                    : {
                        y: 0,
                        scale: 1,
                        backgroundColor: "rgba(26,29,33,0.4)",
                        borderColor: "rgba(255,255,255,0.15)",
                        color: "rgba(250,249,246,0.9)",
                      }
              }
              transition={{ duration: 0.35, ease: easeOut }}
              whileHover={
                reducedMotion
                  ? undefined
                  : { y: -2, scale: 1.05 }
              }
              className="cursor-default border px-3 py-1.5 text-sm"
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </motion.article>
  );
}
