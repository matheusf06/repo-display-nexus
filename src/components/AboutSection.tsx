
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {t('about.title')}
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{t('about.subtitle')}</h3>
          <p className="text-muted-foreground">
            {t('about.description')}
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
