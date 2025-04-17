
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Circle, GitFork, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  link: string;
}

export function ProjectCard({ name, description, language, stars, forks, updatedAt, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-card/50 backdrop-blur-sm border-border/50 h-full group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <CardHeader className="pb-3 relative z-10">
          <h3 className="text-xl font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">{name}</h3>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-muted-foreground min-h-[60px] group-hover:text-foreground/90 transition-colors duration-300">{description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {language && (
              <div className="flex items-center gap-1">
                <Circle className="w-3 h-3 fill-current text-primary" />
                <span>{language}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 group-hover:text-yellow-400 transition-colors duration-300" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{forks}</span>
            </div>
            <div className="ml-auto text-xs">
              Updated {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
