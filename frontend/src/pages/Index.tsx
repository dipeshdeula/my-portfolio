import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Journey from "@/components/portfolio/Journey";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import WhatsAppPopper from "@/components/portfolio/WhatsAppPopper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <WhatsAppPopper />
    </div>
  );
};

export default Index;
