
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const MOCK_PROJECTS = [
    {
      name: t("projects.reactNews.name"),
      description: t("projects.reactNews.description"),
      language: "JavaScript",
      stars: 1,
      forks: 0,
      updatedAt: "2023-01-06T00:00:00Z",
      link: "https://github.com/matheusf06/React-News"
    },
    {
      name: t("projects.springBoot.name"),
      description: t("projects.springBoot.description"),
      language: "Java",
      stars: 1,
      forks: 0,
      updatedAt: "2024-08-26T00:00:00Z",
      link: "https://github.com/matheusf06/spring-boot-api-produtos"
    },
    {
      name: t("projects.nodeApi.name"),
      description: t("projects.nodeApi.description"),
      language: "JavaScript",
      stars: 0,
      forks: 0,
      updatedAt: "2021-09-29T00:00:00Z",
      link: "https://github.com/matheusf06/node-js-api-CRUD-pacientes"
    }
  ];
  
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none"></div>
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
        {t('projects.title')}
      </h2>
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {MOCK_PROJECTS.map((project, index) => (
          <div 
            key={project.name}
            className={cn(
              "transition-all duration-700 transform",
              inView 
                ? "translate-y-0 opacity-100" 
                : "translate-y-20 opacity-0",
              inView && `delay-${index * 150}`
            )}
            style={{
              transitionDelay: inView ? `${index * 150}ms` : "0ms"
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
