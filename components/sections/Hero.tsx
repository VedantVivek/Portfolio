"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/portfolio";
import {
  easeOut,
  heroItem,
  heroItemReduced,
  heroStagger,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const item = reducedMotion ? heroItemReduced : heroItem;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["0%", "0%"] : ["0%", "18%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [1.08, 1.18],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["0%", "0%"] : ["0%", "12%"],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, reducedMotion ? 1 : 0.15],
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-text-primary"
    >
      {/* Full-bleed profile background */}
      <motion.div
        className="absolute inset-0 lg:left-[28%]"
        style={reducedMotion ? undefined : { y: imageY, scale: imageScale }}
        initial={reducedMotion ? false : { opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <Image
          src={personalInfo.profileImage}
          alt="Vedant Vivek, Software Quality Engineer"
          fill
          priority
          className="object-cover object-[48%_18%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Readable overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-text-primary via-text-primary/88 to-text-primary/25 lg:via-text-primary/72 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-text-primary via-transparent to-text-primary/40" />

      {/* Accent sweep on load */}
      {!reducedMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-accent-primary/25 to-transparent"
          initial={{ x: "-40%", opacity: 0 }}
          animate={{ x: "220%", opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.4, delay: 0.35, ease: easeOut }}
        />
      ) : null}

      <Container className="relative z-10 w-full pb-16 pt-28 sm:pb-24 sm:pt-36">
        <motion.div
          variants={reducedMotion ? undefined : heroStagger}
          initial={reducedMotion ? false : "hidden"}
          animate="show"
          style={
            reducedMotion
              ? undefined
              : { y: contentY, opacity: contentOpacity }
          }
          className="max-w-2xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-[13px] text-accent-primary"
          >
            Software Quality Engineer · Zinnia
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-[2.75rem] font-semibold tracking-[-0.03em] text-bg-surface-raised sm:text-6xl lg:text-[4.5rem]"
          >
            Vedant Vivek
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-xl leading-snug text-bg-surface-raised sm:text-2xl"
          >
            {personalInfo.oneLiner}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[1.05rem] leading-8 text-bg-surface-raised/75"
          >
            {personalInfo.introduction}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            <Button
              href="#case-studies"
              variant="primary"
              className="bg-accent-primary text-bg-surface-raised hover:bg-bg-surface-raised hover:text-text-primary"
            >
              View case studies
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              download
              variant="secondary"
              className="border-bg-surface-raised/40 text-bg-surface-raised hover:border-bg-surface-raised hover:bg-bg-surface-raised/10 hover:text-bg-surface-raised"
            >
              Download resume
            </Button>
            <a
              href="#contact"
              className="text-sm font-semibold text-bg-surface-raised/80 underline-offset-4 transition hover:text-bg-surface-raised hover:underline"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-bg-surface-raised/20 pt-6 font-mono text-[12px] text-bg-surface-raised/70"
          >
            <p>
              <span className="text-accent-primary">700+</span> test scenarios
            </p>
            <p>
              <span className="text-accent-primary">645</span> forms validated
            </p>
            <p>
              <span className="text-accent-primary">167</span> learned mappings
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
