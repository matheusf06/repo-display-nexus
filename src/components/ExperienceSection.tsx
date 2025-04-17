
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

// Define the interface for experience items
interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export function ExperienceSection() {
  const { t } = useTranslation();
  
  // Add animation hooks for elements
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use the correct type assertion for translation objects
  const experiences = [
    t("experience.items.santaMaria", { returnObjects: true }) as ExperienceItem,
    t("experience.items.jaAmapa", { returnObjects: true }) as ExperienceItem,
    t("experience.items.firerocket", { returnObjects: true }) as ExperienceItem,
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 px-4 bg-accent/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent
          transition-all duration-700 ${sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {t("experience.title")}
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`backdrop-blur-sm bg-card/50 transition-all duration-700 delay-${index * 100}
                ${sectionInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
                <p className="text-primary mb-2">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
