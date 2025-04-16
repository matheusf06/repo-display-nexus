
import { Card, CardContent } from "./ui/card";
import { Code2, Monitor, Plug, Layers, Zap, GitBranch } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.frontend.title"),
      description: t("services.frontend.description"),
      icon: Monitor
    },
    {
      title: t("services.apiIntegration.title"),
      description: t("services.apiIntegration.description"),
      icon: Plug
    },
    {
      title: t("services.fullstack.title"),
      description: t("services.fullstack.description"),
      icon: Code2
    },
    {
      title: t("services.components.title"),
      description: t("services.components.description"),
      icon: Layers
    },
    {
      title: t("services.performance.title"),
      description: t("services.performance.description"),
      icon: Zap
    },
    {
      title: t("services.git.title"),
      description: t("services.git.description"),
      icon: GitBranch
    }
  ];
  
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {t('services.title')}
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
