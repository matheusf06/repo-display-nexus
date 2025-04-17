
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const whatsappNumber = "+5585996126302";
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 text-center min-h-[80vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {t('hero.description')}
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="animate-fade-in">
            <Phone className="mr-2 h-5 w-5" />
            {t('hero.cta')}
          </Button>
        </a>
      </div>
    </section>
  );
}
