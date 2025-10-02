import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display font-bold text-xl text-primary hover:text-secondary transition-colors"
          >
            Bing Bing
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("order")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Order Online
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Find Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("order")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Order Online
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Find Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
