
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function NavBar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "+5585996126302";
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Portfolio
          </h1>
          
          {isMobile ? (
            <div className="flex gap-2 items-center">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu />
              </Button>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="outline">
                  <Phone className="h-4 w-4" />
                </Button>
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">{t('nav.home')}</a>
              <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
              <a href="#experience" className="hover:text-primary transition-colors">{t('nav.experience')}</a>
              <a href="#projects" className="hover:text-primary transition-colors">{t('nav.projects')}</a>
              <a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a>
              <a href="#skills" className="hover:text-primary transition-colors">{t('nav.skills')}</a>
              <LanguageSwitcher />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Phone className="mr-2 h-4 w-4" />
                  {t('nav.contact')}
                </Button>
              </a>
            </div>
          )}
        </div>
        
        {isMobile && isMenuOpen && (
          <div className="mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" className="hover:text-primary transition-colors">{t('nav.home')}</a>
              <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
              <a href="#experience" className="hover:text-primary transition-colors">{t('nav.experience')}</a>
              <a href="#projects" className="hover:text-primary transition-colors">{t('nav.projects')}</a>
              <a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a>
              <a href="#skills" className="hover:text-primary transition-colors">{t('nav.skills')}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
