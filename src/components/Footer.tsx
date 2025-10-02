import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-3xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bing Bing Boba
            </h3>
            <p className="text-muted-foreground">
              Fremont's freshest bubble tea experience
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bing Bing Boba. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Near American • Fremont, CA 94536
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
