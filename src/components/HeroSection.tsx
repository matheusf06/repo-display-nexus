
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const whatsappNumber = "+5585996126302";
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 text-center min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 pointer-events-none"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          {t('hero.description')}
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            size="lg" 
            className="relative overflow-hidden group transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Phone className="mr-2 h-5 w-5 animate-fade-in" />
            <span className="relative z-10">{t('hero.cta')}</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
