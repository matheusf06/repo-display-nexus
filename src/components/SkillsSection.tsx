
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Git" }
];

export function SkillsSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-accent/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/3 opacity-30 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/3 opacity-20 blur-[120px] rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49.8%,rgba(255,255,255,0.05)_49.8%,rgba(255,255,255,0.05)_50.2%,transparent_50.2%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49.8%,rgba(255,255,255,0.05)_49.8%,rgba(255,255,255,0.05)_50.2%,transparent_50.2%,transparent_100%)] bg-[length:30px_30px] opacity-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={cn(
          "text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
          "transition-all duration-700",
          inView ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
        )}>
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={cn(
                "backdrop-blur-sm bg-card/50 border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-md hover:shadow-primary/5",
                "transition-all duration-500",
                inView 
                  ? "opacity-100 transform-none" 
                  : "opacity-0 translate-y-10",
                inView && "transition-delay-" + (index * 100) + "ms"
              )}
              style={{
                transitionDelay: inView ? `${index * 100}ms` : "0ms"
              }}
            >
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
