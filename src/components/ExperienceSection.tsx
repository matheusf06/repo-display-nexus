
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    company: "Tech Company A",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Led the development of multiple web applications using React and TypeScript."
  },
  {
    company: "Design Agency B",
    role: "UX Designer & Developer",
    period: "2020 - 2022",
    description: "Designed and implemented user interfaces for various client projects."
  },
  {
    company: "Startup C",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: "Developed and maintained multiple React-based web applications."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Experience
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
