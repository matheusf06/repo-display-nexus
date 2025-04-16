
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function HeroSection() {
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number

  return (
    <section id="home" className="py-20 px-4 text-center min-h-[80vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Frontend Developer & UX Designer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          I create beautiful, functional, and user-friendly web applications.
          Let's work together to bring your ideas to life!
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="animate-fade-in">
            <Phone className="mr-2 h-5 w-5" />
            Let's Talk on WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
}
