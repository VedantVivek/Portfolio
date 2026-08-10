import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/portfolio";

const links = [
  {
    href: personalInfo.socialLinks.github,
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: personalInfo.socialLinks.linkedin,
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: personalInfo.socialLinks.leetcode,
    label: "LeetCode",
    icon: SiLeetcode,
  },
  {
    href: personalInfo.socialLinks.geeksForGeeks,
    label: "GFG",
    icon: SiGeeksforgeeks,
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-surface px-6 py-5">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="font-display text-base font-semibold text-text-primary transition hover:text-accent-primary"
          >
            Vedant Vivek
          </a>
          <p className="mt-0.5 text-xs text-text-muted">
            © {currentYear} · Software Quality Engineer
          </p>
        </div>

        <nav
          aria-label="Social profiles"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[6px] border border-border-subtle bg-bg-surface-raised px-3 py-1.5 text-xs font-medium text-text-secondary shadow-[var(--shadow-resting)] transition hover:border-accent-primary/45 hover:text-accent-primary"
            >
              <Icon size={14} aria-hidden />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
