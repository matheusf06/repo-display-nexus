
import { Card, CardContent } from "./ui/card";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git", level: "Advanced" }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
