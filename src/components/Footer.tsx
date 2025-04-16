
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:your@email.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                your@email.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +1 234 567 890
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4 md:justify-end">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
