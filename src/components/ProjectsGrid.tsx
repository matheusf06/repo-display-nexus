
import { ProjectCard } from "./ProjectCard";

const MOCK_PROJECTS = [
  {
    name: "Project Manager",
    description: "A React-based project management tool with real-time updates and team collaboration features.",
    language: "TypeScript",
    stars: 45,
    forks: 12,
    updatedAt: "2024-04-10T10:00:00Z"
  },
  {
    name: "Weather App",
    description: "A weather application that provides accurate forecasts using modern weather APIs.",
    language: "JavaScript",
    stars: 32,
    forks: 8,
    updatedAt: "2024-04-08T15:30:00Z"
  },
  {
    name: "E-commerce Backend",
    description: "A robust backend system for e-commerce platforms built with Node.js and Express.",
    language: "TypeScript",
    stars: 67,
    forks: 15,
    updatedAt: "2024-04-12T09:15:00Z"
  }
];

export function ProjectsGrid() {
  return (
    <div className="px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {MOCK_PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
