import BootSequence from "@/components/BootSequence";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BootSequence />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
