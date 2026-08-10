import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "rounded-[6px] bg-accent-primary text-bg-surface-raised hover:bg-text-primary focus-visible:outline-accent-primary",
  secondary:
    "rounded-[6px] border border-border-strong bg-transparent text-text-primary hover:border-accent-primary hover:text-accent-primary focus-visible:outline-accent-primary",
  ghost:
    "rounded-[6px] bg-transparent text-text-secondary underline-offset-4 hover:text-accent-primary hover:underline focus-visible:outline-accent-primary",
};

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ease-out";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={props.href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const { type = "button", ...buttonRest } = buttonProps;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
