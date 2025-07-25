
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="text-2xl font-bold cursor-default">
              Maruli Gilbert <span className="text-blue-400">Cristopel Hutagaol</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-justify">
              Data Scientist passionate about machine learning, data analysis, 
              and extracting valuable insights from complex datasets.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/maruligilbert/" 
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-all duration-300 hover-scale hover-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MaruliHTGL" 
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-all duration-300 hover-scale hover-glow"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:maruligilbert@outlook.com" 
                className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-all duration-300 hover-scale hover-glow"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Updated order */}
          <div className="space-y-4 animate-fade-in animate-delay-200">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-slide-in-right">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                <span className="text-lg leading-none mt-0.5">📧</span>
                <a href="mailto:maruligilbert@outlook.com" className="hover:underline">
                  maruligilbert@outlook.com
                </a>
              </div>
              <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                <span className="text-lg leading-none mt-0.5">📱</span>
                <a href="https://wa.me/6281995075262" className="hover:underline">
                  +62 819 9507 5262
                </a>
              </div>
              <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                <span className="text-lg leading-none mt-0.5">📍</span>
                <a href="https://maps.app.goo.gl/NMKjrNLZUu9k3ExN8" className="hover:underline">
                  Surabaya, Indonesia
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">
                Available for freelance projects and full-time opportunities
              </p>
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover-scale hover-glow"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 animate-fade-in animate-delay-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Maruli Gilbert Cristopel Hutagaol. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>in Indonesia</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-all duration-300 hover-scale hover:bg-gray-800"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
