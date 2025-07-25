
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-in-down ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - now clickable with hover animation */}
          <div className="flex-shrink-0 animate-fade-in">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              MG<span className="text-primary">.</span>
            </button>
          </div>

          {/* Desktop Menu - improved tablet breakpoint with animations */}
          <div className="hidden lg:block animate-fade-in animate-delay-200">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:drop-shadow-sm animate-slide-in-down"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA - improved tablet breakpoint with animation */}
          <div className="hidden lg:flex items-center space-x-4 animate-fade-in animate-delay-400">
            <ThemeToggle />
            <Button 
              size="sm" 
              onClick={() => scrollToSection('#contact')}
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button - now shows on tablet too with animation */}
          <div className="lg:hidden animate-fade-in animate-delay-200">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - improved for tablet with animations */}
        {isOpen && (
          <div className="lg:hidden animate-slide-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:scale-105 hover:bg-muted/50 rounded-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-2 animate-fade-in animate-delay-600">
                <ThemeToggle />
                <Button 
                  size="sm" 
                  onClick={() => scrollToSection('#contact')}
                  className="bg-primary hover:bg-primary/90 flex-1 ml-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
