"use client";

import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/portfolio";
import { Reveal } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="bg-bg-base px-6 py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">
          <Reveal>
            <p className="section-label">About</p>
            <h2 className="mt-2 max-w-xl font-display font-semibold text-text-primary">
              I test with the business in mind, not just a checklist.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              {personalInfo.about}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} strokeWidth={1.75} />
                Download resume
              </Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.06} y={16}>
            <aside className="border border-border-subtle bg-bg-surface-raised p-6 sm:p-7">
              <p className="font-mono text-[12px] text-text-muted">
                {personalInfo.location}
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-text-primary">
                {personalInfo.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Software Quality Engineer at Zinnia
              </p>

              <div className="mt-6 flex gap-5 border-t border-border-subtle pt-5">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-draw inline-flex items-center gap-2 text-sm text-text-secondary"
                >
                  <FaLinkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-draw inline-flex items-center gap-2 text-sm text-text-secondary"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
