
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className ?? ""}`}
    />
  );
}

export function HeroSection() {
  const whatsappNumber = "+5585996126302";
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 text-center min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Gradient className="top-[-20%] left-[10%] opacity-30 w-[600px] h-[600px]" conic />
        <Gradient className="bottom-[-10%] right-[5%] opacity-20 w-[500px] h-[500px]" small />
        
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49.5%,rgba(255,255,255,0.03)_49.5%,rgba(255,255,255,0.03)_50.5%,transparent_50.5%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49.5%,rgba(255,255,255,0.03)_49.5%,rgba(255,255,255,0.03)_50.5%,transparent_50.5%,transparent_100%)] bg-[length:40px_40px] opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
            {t('hero.title')}
          </h1>
          {/* Decorative element */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <Button 
              size="lg" 
              className="relative overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Phone className="mr-2 h-5 w-5" />
              <span className="relative z-10">{t('hero.cta')}</span>
            </Button>
          </a>
          
          <a href="#projects" className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-300">
            <span>{t('nav.projects')}</span>
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
