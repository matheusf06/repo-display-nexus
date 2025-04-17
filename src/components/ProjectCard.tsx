
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
    <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground min-h-[60px]">{description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          {language && (
            <div className="flex items-center gap-1">
              <Circle className="w-3 h-3 fill-current" />
              <span>{language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
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
