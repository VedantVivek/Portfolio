"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { easeOut, usePrefersReducedMotion } from "@/lib/motion";
import { getLenisInstance, getScrollY, scrollToSection, scrollToTop } from "@/lib/scroll";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function onScroll() {
      const y = getScrollY();
      const heroHeight =
        document.getElementById("home")?.offsetHeight ?? window.innerHeight;

      setScrolled(y > 40);
      setOnHero(y < heroHeight * 0.55);
      setShowTop(y > window.innerHeight * 0.65);

      const sectionIds = [
        "case-studies",
        "experience",
        "projects",
        "skills",
        "about",
        "contact",
      ];
      const offset = y + 140;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= offset) current = `#${id}`;
      }
      setActive(current);
    }

    let unsubscribeLenis: (() => void) | undefined;

    function bindLenis() {
      unsubscribeLenis?.();
      const lenis = getLenisInstance();
      unsubscribeLenis = lenis?.on("scroll", onScroll);
    }

    onScroll();
    bindLenis();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("lenis:ready", bindLenis);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis:ready", bindLenis);
      unsubscribeLenis?.();
    };
  }, []);

  function handleNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  }

  function handleBackToTop(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    scrollToTop();
    setOnHero(true);
    setScrolled(false);
    setShowTop(false);
    setActive("");
  }

  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
          onHero
            ? "border-b border-white/10 bg-text-primary/70 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-b border-border-subtle bg-bg-base/90 shadow-[0_8px_24px_rgba(26,29,33,0.06)] backdrop-blur-xl",
        )}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] origin-left bg-accent-primary"
          style={{ scaleX: scrollYProgress }}
        />

        <Container
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            scrolled ? "h-14" : "h-16 sm:h-[4.25rem]",
          )}
        >
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "#home")}
            className={cn(
              "group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight",
              onHero ? "text-bg-surface-raised" : "text-text-primary",
            )}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-accent-primary text-sm font-bold text-bg-surface-raised transition group-hover:scale-105">
              V
            </span>
            <span className="hidden sm:inline">Vedant Vivek</span>
          </a>

          <nav
            className={cn(
              "hidden items-center gap-1 rounded-full p-1 lg:flex lg:px-1.5 lg:py-1",
              onHero
                ? "border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                : "border border-border-subtle bg-bg-surface/80",
            )}
          >
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    onHero
                      ? isActive
                        ? "bg-white/20 text-bg-surface-raised shadow-sm"
                        : "text-bg-surface-raised/80 hover:bg-white/12 hover:text-bg-surface-raised"
                      : isActive
                        ? "bg-accent-primary/12 text-accent-primary"
                        : "text-text-secondary hover:bg-bg-surface hover:text-text-primary",
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={personalInfo.resumeUrl}
              download
              className={cn(
                "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition",
                onHero
                  ? "bg-accent-primary text-bg-surface-raised shadow-[0_8px_20px_rgba(15,110,86,0.35)] hover:brightness-110"
                  : "bg-accent-primary text-bg-surface-raised shadow-[0_8px_20px_rgba(15,110,86,0.25)] hover:bg-text-primary",
              )}
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              onHero
                ? "border-white/20 text-bg-surface-raised"
                : "border-border-subtle text-text-primary",
            )}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </Container>

        <AnimatePresence>
          {isOpen ? (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="overflow-hidden border-t border-border-subtle bg-bg-surface lg:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={cn(
                      "rounded-md px-2 py-3 text-base",
                      active === link.href
                        ? "text-accent-primary"
                        : "text-text-primary",
                    )}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={personalInfo.resumeUrl}
                  download
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-full bg-accent-primary px-4 py-3 text-center text-sm font-semibold text-bg-surface-raised"
                >
                  Download resume
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            whileHover={reducedMotion ? undefined : { y: -3, scale: 1.05 }}
            className="fixed bottom-6 right-6 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-accent-primary bg-accent-primary text-bg-surface-raised shadow-[0_12px_30px_rgba(15,110,86,0.35)]"
          >
            <ArrowUp size={18} strokeWidth={1.75} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
