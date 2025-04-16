
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <a href="mailto:matheuso06@hotmai.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                matheuso06@hotmai.com
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex gap-4 md:justify-end">
              <a href="https://github.com/matheusf06" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="www.linkedin.com/in/matheusfeijao" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Matheus Oliveira. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
