
import { Card, CardContent } from "./ui/card";
import { Code2, Layout, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and performant web applications using modern technologies.",
    icon: Code2
  },
  {
    title: "UX Design",
    description: "Creating intuitive and engaging user experiences that solve real problems.",
    icon: Layout
  },
  {
    title: "UI Design",
    description: "Designing beautiful and functional interfaces that users love to interact with.",
    icon: Paintbrush
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
