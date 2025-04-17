
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsGrid />
        <ServicesSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
