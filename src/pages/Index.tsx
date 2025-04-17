
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
    <div id="home" className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90"></div>
        
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 opacity-50 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/5 opacity-30 blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[600px] h-[600px] rounded-full bg-primary/3 opacity-20 blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0xaDJ2MWgtMnYtMXptLTItN2g0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMWgydjFoLTJ2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-25"></div>
      </div>
      
      <NavBar />
      <main className="pt-16 relative z-10">
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
