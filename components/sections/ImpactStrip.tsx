"use client";

import Container from "@/components/ui/Container";
import { portfolioStats } from "@/data/portfolio";
import { CountUp, Reveal } from "@/lib/motion";

export default function ImpactStrip() {
  return (
    <section
      id="impact"
      className="border-y border-border-subtle bg-bg-surface px-6 py-14 sm:py-16"
    >
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Measured impact</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                What the work actually moved
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {portfolioStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} y={14}>
              <div
                className={
                  index > 0
                    ? "lg:border-l lg:border-border-subtle lg:pl-8"
                    : ""
                }
              >
                <p className="font-mono text-[2rem] font-medium leading-none tracking-tight text-text-primary sm:text-[2.4rem]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 max-w-[14rem] text-sm leading-6 text-text-secondary">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
