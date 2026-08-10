import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import ImpactStrip from "@/components/sections/ImpactStrip";
import CaseStudies from "@/components/sections/CaseStudies";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import MoreProjects from "@/components/sections/MoreProjects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Credentials from "@/components/sections/Credentials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ImpactStrip />
        <CaseStudies />
        <Experience />
        <Projects />
        <MoreProjects />
        <Skills />
        <About />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
