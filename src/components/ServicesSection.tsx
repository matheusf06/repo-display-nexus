
import { Card, CardContent } from "./ui/card";
import { Code2, Monitor, Plug, Layers, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Desenvolvimento Frontend Moderno",
    description: "Criação de interfaces responsivas, acessíveis e performáticas utilizando React, JavaScript, HTML e CSS.",
    icon: Monitor
  },
  {
    title: "Integração com APIs e Backend",
    description: "Consumo e integração com APIs REST usando Axios, Fetch ou bibliotecas modernas. Comunicação eficiente com backends em Node.js e Java (Spring Boot).",
    icon: Plug
  },
  {
    title: "Desenvolvimento Fullstack Web",
    description: "Construção de aplicações completas com frontend em React e backend em Node.js ou Spring Boot, seguindo boas práticas e estrutura de código limpa.",
    icon: Code2
  },
  {
    title: "Componentização e Reutilização de Código",
    description: "Criação de componentes reutilizáveis e escaláveis com React e Styled Components, mantendo organização e produtividade em projetos grandes.",
    icon: Layers
  },
  {
    title: "Otimização de Performance e SEO",
    description: "Aprimoramento de desempenho com lazy loading, compressão de assets e estruturação para SEO técnico básico em aplicações SPA e PWA.",
    icon: Zap
  }
];


export function ServicesSection() {
  const { t } = useTranslation();
  
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
