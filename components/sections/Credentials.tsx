"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import { credentials } from "@/data/portfolio";
import {
  CountUp,
  Reveal,
  easeOut,
  usePrefersReducedMotion,
} from "@/lib/motion";

const leadershipMetrics = [
  { value: 170, suffix: "+", label: "Colleges reached" },
  { value: 550, suffix: "+", label: "Event participants" },
  { value: 20, suffix: "%", label: "Participation lift" },
  { value: 9, suffix: "", label: "Competitions coordinated" },
];

export default function Credentials() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-bg-base px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent-primary/10 blur-[100px]"
      />

      <Container className="relative z-10">
        <Reveal>
          <p className="section-label">Background</p>
          <h2 className="mt-2 font-display font-semibold text-text-primary">
            Education, certs & leadership
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-text-secondary">
            School, verified analytics credentials, and campus leadership with
            real numbers.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal y={16}>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-accent-primary text-bg-surface-raised">
                <GraduationCap size={18} strokeWidth={1.75} />
              </span>
              <h3 className="text-sm font-medium text-text-muted">Education</h3>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {credentials.education.map((item, index) => {
              const isPrimary = index === 0;
              return (
                <Reveal key={item.institution} delay={index * 0.06}>
                  <motion.article
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: -6,
                            transition: { duration: 0.25, ease: easeOut },
                          }
                    }
                    className={`group relative h-full overflow-hidden border p-6 sm:p-7 ${
                      isPrimary
                        ? "border-accent-primary/30 bg-text-primary text-bg-surface-raised"
                        : "border-border-subtle bg-bg-surface-raised hover:border-accent-primary/40"
                    }`}
                  >
                    {isPrimary ? (
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(15,110,86,0.35),transparent_50%)]"
                      />
                    ) : null}

                    <div className="relative z-10">
                      <p
                        className={`font-mono text-xs ${
                          isPrimary
                            ? "text-bg-surface-raised/55"
                            : "text-text-muted"
                        }`}
                      >
                        {item.period}
                      </p>
                      <h4
                        className={`mt-3 font-display text-lg font-semibold ${
                          isPrimary
                            ? "text-bg-surface-raised"
                            : "text-text-primary"
                        }`}
                      >
                        {item.institution}
                      </h4>
                      <p
                        className={`mt-2 text-sm leading-7 ${
                          isPrimary
                            ? "text-bg-surface-raised/70"
                            : "text-text-secondary"
                        }`}
                      >
                        {item.qualification}
                      </p>
                      <div
                        className={`mt-5 flex items-end justify-between border-t pt-4 ${
                          isPrimary
                            ? "border-white/15"
                            : "border-border-subtle"
                        }`}
                      >
                        <p
                          className={`font-mono text-2xl font-bold ${
                            isPrimary
                              ? "text-accent-primary"
                              : "text-accent-primary"
                          }`}
                        >
                          {item.score.replace("CGPA: ", "")}
                        </p>
                        <p
                          className={`text-sm ${
                            isPrimary
                              ? "text-bg-surface-raised/55"
                              : "text-text-muted"
                          }`}
                        >
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <Reveal y={16}>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-accent-primary text-bg-surface-raised">
                <Award size={18} strokeWidth={1.75} />
              </span>
              <h3 className="text-sm font-medium text-text-muted">
                Certifications
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            {credentials.certifications.map((certificate, index) => (
              <Reveal key={certificate.title} delay={index * 0.06}>
                <motion.article
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -6,
                          transition: { duration: 0.25, ease: easeOut },
                        }
                  }
                  className="group flex h-full flex-col border border-border-subtle bg-bg-surface-raised p-6 transition-colors duration-300 hover:border-accent-primary/40 hover:shadow-[var(--shadow-elevated)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent-primary/25 bg-accent-primary/10 font-display text-sm font-bold text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-bg-surface-raised">
                      {certificate.issuer.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="chip !text-[10px]">
                      {certificate.credential}
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-medium text-accent-primary">
                    {certificate.issuer}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-text-primary">
                    {certificate.title}
                  </h4>
                  <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
                    {certificate.description}
                  </p>
                  {/* TODO: add certificate verification link when available */}
                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                    {certificate.skills.slice(0, 5).map((skill) => (
                      <li key={skill} className="chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal y={16}>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-accent-primary text-bg-surface-raised">
                <Users size={18} strokeWidth={1.75} />
              </span>
              <h3 className="text-sm font-medium text-text-muted">Leadership</h3>
            </div>
          </Reveal>

          <Reveal>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easeOut }}
              className="overflow-hidden border border-border-subtle bg-text-primary text-bg-surface-raised shadow-[var(--shadow-elevated)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(15,110,86,0.3),transparent_50%)]"
                  />
                  <div className="relative z-10">
                    <p className="font-mono text-[12px] text-accent-primary">
                      Campus leadership
                    </p>
                    <h4 className="mt-3 font-display text-2xl font-semibold">
                      {credentials.leadership.role}
                    </h4>
                    <p className="mt-2 text-base text-bg-surface-raised/70">
                      {credentials.leadership.organization}
                    </p>
                    <p className="mt-2 font-mono text-xs text-bg-surface-raised/45">
                      {credentials.leadership.period}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-bg-surface-raised/70">
                      {credentials.leadership.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {credentials.leadership.highlights.map((highlight, i) => (
                        <motion.li
                          key={highlight}
                          initial={
                            reducedMotion ? false : { opacity: 0, x: -8 }
                          }
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: reducedMotion ? 0 : 0.08 + i * 0.05,
                          }}
                          className="flex gap-3 text-sm leading-6 text-bg-surface-raised/90"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  {leadershipMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: reducedMotion ? 0 : 0.1 + index * 0.07,
                      }}
                      whileHover={
                        reducedMotion
                          ? undefined
                          : {
                              backgroundColor: "rgba(15,110,86,0.18)",
                            }
                      }
                      className="border-b border-r border-white/10 p-5 even:border-r-0 sm:p-6 [&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <p className="font-mono text-3xl font-bold text-accent-primary sm:text-4xl">
                        <CountUp value={metric.value} suffix={metric.suffix} />
                      </p>
                      <p className="mt-2 text-sm leading-6 text-bg-surface-raised/55">
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
