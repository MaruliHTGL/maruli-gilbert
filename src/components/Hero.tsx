
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-[fade-in_0.6s_ease-out]">
              Maruli Gilbert
              <span className="block text-3xl lg:text-5xl text-blue-600 animate-[fade-in_0.8s_ease-out]">
                Cristopel Hutagaol
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium animate-[fade-in_1s_ease-out]">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl text-justify animate-[fade-in_1.2s_ease-out]">
            Third-year Informatics student with expertise in data science, machine learning, 
            and data analysis. Passionate about extracting valuable insights and making 
            strategic decisions through advanced analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start animate-[fade-in_1.4s_ease-out]">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="https://linkedin.com/in/maruligilbert/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="https://github.com/MaruliHTGL" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="mailto:maruligilbert@outlook.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start text-gray-600 animate-[fade-in_1.6s_ease-out]">
            <div className="flex items-center gap-2 transition-colors duration-300 hover:text-blue-600">
              <MapPin className="h-4 w-4" />
              <a 
                href="https://maps.app.goo.gl/NMKjrNLZUu9k3ExN8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <span>Surabaya, Indonesia</span>
              </a>
            </div>
            <div className="flex items-center gap-2 transition-colors duration-300 hover:text-blue-600">
              <Phone className="h-4 w-4" />
              <a 
                href="https://wa.me/6281995075262" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                +6281995075262
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-start lg:ml-[120px] animate-[fade-in_1.8s_ease-out]">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 shadow-2xl overflow-hidden transform -translate-y-8 transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-pulse">
              <img 
                src="/Maruli.JPG" 
                alt="Maruli Gilbert Cristopel Hutagaol"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
