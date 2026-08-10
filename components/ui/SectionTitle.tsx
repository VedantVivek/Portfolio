import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTitleProps = {
  title: string;
  lead?: string;
  eyebrow?: string;
  className?: string;
  children?: ReactNode;
};

export default function SectionTitle({
  title,
  lead,
  eyebrow,
  className,
  children,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display font-bold text-text-primary",
          eyebrow ? "mt-3" : "",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}
