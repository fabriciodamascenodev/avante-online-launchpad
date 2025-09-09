import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="pillars">
        <Pillars />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
