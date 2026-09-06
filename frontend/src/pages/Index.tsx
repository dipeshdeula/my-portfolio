import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Highlights from "@/components/portfolio/Highlights";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Journey from "@/components/portfolio/Journey";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import IntroOverlay from "@/components/portfolio/IntroOverlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <IntroOverlay />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
