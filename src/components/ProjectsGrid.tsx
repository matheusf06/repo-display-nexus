
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

const MOCK_PROJECTS = [
  {
    name: "React News",
    description: "PWA que consome uma API pública para mostrar as principais notícias do dia. Projeto moderno com ReactJS e integração com serviços externos.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    updatedAt: "2023-01-06T00:00:00Z"
  },
  {
    name: "Spring boot API",
    description: "API simples de produtos feita com Java e Spring Boot. Demonstra habilidades backend e estruturação de serviços RESTful.",
    language: "Java",
    stars: 1,
    forks: 0,
    updatedAt: "2024-08-26T00:00:00Z"
  },
  {
    name: "NodeJs API",
    description: "API em Node.js com CRUD completo de pacientes. Projeto fullstack que mostra integração backend com Express e rotas organizadas.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    updatedAt: "2021-09-29T00:00:00Z"
  }
];


export function ProjectsGrid() {
  const { t } = useTranslation();
  
  return (
    <section id="projects" className="py-20 px-4">
<div className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {t('projects.title')}
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {MOCK_PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
    </section>
  );
}
