import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vedant Vivek | SDET & Full-Stack Software Engineer",
  description:
    "SDET and full-stack engineer building Playwright and TypeScript test automation, API testing, CI/CD with Docker and AI-assisted testing, plus Next.js apps.",
  keywords: [
    "Vedant Vivek",
    "Software Quality Engineer",
    "SDET",
    "Test Automation Engineer",
    "Software Development Engineer in Test",
    "Software Engineer",
    "AI-Assisted Testing",
    "API Testing",
    "CI/CD",
    "Docker",
    "Playwright",
    "Selenium",
    "TypeScript",
    "Next.js",
  ],
  openGraph: {
    title: "Vedant Vivek | SDET & Full-Stack Software Engineer",
    description:
      "SDET and full-stack engineer building Playwright and TypeScript test automation, API testing, CI/CD with Docker and AI-assisted testing, plus Next.js apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} ${plexMono.variable}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
