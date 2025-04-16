
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Frontend Developer & UX Designer</h3>
          <p className="text-muted-foreground">
            I'm a passionate frontend developer and UX designer with a keen eye for creating
            beautiful, functional, and user-friendly web applications. With years of experience
            in the field, I combine technical expertise with design thinking to deliver
            exceptional digital experiences.
          </p>
        </div>
        
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
