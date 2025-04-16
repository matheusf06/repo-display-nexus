
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
const experiences = [
  {
    company: "EM Santa Maria",
    role: "Auxiliar Pedagógico da Sala de Inovação",
    period: "2023 – 2024",
    description: "Apoiou professores na implementação de atividades digitais para 200+ alunos, utilizando ferramentas de tecnologia educacional. Organizou evidências e relatórios de projetos para auditorias institucionais, garantindo conformidade com diretrizes pedagógicas."
  },
  {
    company: "Junior Achievement Amapá",
    role: "Gestor de Projetos",
    period: "2022 – 2023",
    description: "Gerenciou trilhas educacionais em 12 escolas públicas, impactando 500+ estudantes. Mediou parcerias com 30+ voluntários e instituições, aumentando o engajamento em 40%. Coordenou treinamentos em ferramentas digitais como Google Classroom e Canva."
  },
  {
    company: "Firerocket",
    role: "Programador Web WordPress",
    period: "2020",
    description: "Desenvolveu temas personalizados com HTML/CSS, reduzindo o tempo de carregamento em 25%. Implementou plugins de segurança e desempenho para garantir estabilidade das plataformas."
  },
];

export function ExperienceSection() {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="py-20 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {t('experience.title')}
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
