import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation();

  const experiences = [
    t("experience.items.santaMaria", { returnObjects: true }),
    t("experience.items.jaAmapa", { returnObjects: true }),
    t("experience.items.firerocket", { returnObjects: true }),
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {t("experience.title")}
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/50">
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
