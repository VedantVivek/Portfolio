"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Copy, LoaderCircle, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { contactInfo, personalInfo } from "@/data/portfolio";
import { Reveal } from "@/lib/motion";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setShowTooltip(true);
      window.setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 1200);
    } catch {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const subject = data.get("subject")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please email me directly.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: "Vedant Portfolio",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(
          result.message || "Could not send your message. Please try again.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    }
  }

  const fieldClass =
    "mt-2 w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent-primary disabled:opacity-60";

  return (
    <section id="contact" className="bg-bg-surface px-6 py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-label">Contact</p>
            <h2 className="mt-2 font-display font-semibold text-text-primary">
              {contactInfo.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              {contactInfo.description}
            </p>
            <p className="mt-5 text-sm text-text-muted">
              {contactInfo.availability}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal delay={0.08} y={20}>
            <div className="space-y-8 border-t border-border-subtle pt-8">
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="link-draw break-all text-base font-medium text-text-primary"
                  >
                    {contactInfo.email}
                  </a>
                  <span className="relative">
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="text-text-muted transition hover:text-accent-primary"
                    >
                      {copied ? (
                        <CheckCircle2 size={18} strokeWidth={1.75} />
                      ) : (
                        <Copy size={18} strokeWidth={1.75} />
                      )}
                    </button>
                    {showTooltip ? (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg-surface-raised px-2 py-1 font-mono text-[10px] text-accent-primary">
                        Copied
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-text-muted">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="mt-2 block text-base font-medium text-text-primary transition hover:text-accent-primary"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div>
                <p className="text-sm text-text-muted">Location</p>
                <p className="mt-2 text-base font-medium text-text-primary">
                  {contactInfo.location}
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-text-muted transition hover:text-accent-primary"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-text-muted transition hover:text-accent-primary"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={20}>
            <form onSubmit={handleSubmit} className="space-y-1">
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                <label className="block">
                  <span className="text-sm text-text-secondary">Your name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    disabled={status === "sending"}
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-text-secondary">Your email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    disabled={status === "sending"}
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-sm text-text-secondary">Subject</span>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Role or collaboration"
                  disabled={status === "sending"}
                  className={fieldClass}
                />
              </label>

              <label className="mt-6 block">
                <span className="text-sm text-text-secondary">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="What should we talk about?"
                  disabled={status === "sending"}
                  className={`${fieldClass} resize-none`}
                />
              </label>

              <MagneticButton
                type="submit"
                disabled={status === "sending"}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-[6px] bg-accent-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-bg-surface-raised transition hover:bg-text-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    Sending
                    <LoaderCircle
                      size={16}
                      strokeWidth={1.75}
                      className="animate-spin"
                    />
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={16} strokeWidth={1.75} />
                  </>
                )}
              </MagneticButton>

              {status === "success" ? (
                <p className="mt-4 text-sm leading-6 text-accent-primary">
                  Message sent. I’ll get back to you soon.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="mt-4 text-sm leading-6 text-red-600">
                  {errorMessage}{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="underline underline-offset-2"
                  >
                    Email me directly
                  </a>
                  .
                </p>
              ) : null}

              {status === "idle" || status === "sending" ? (
                <p className="mt-4 text-sm leading-6 text-text-muted">
                  Your message is sent directly from this form. Nothing is
                  stored on this site.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
