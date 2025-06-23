
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Maruli Gilbert
              <span className="block text-3xl lg:text-5xl text-blue-600">
                Cristopel Hutagaol
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl">
            Third-year Informatics student with expertise in data science, machine learning, 
            and data analysis. Passionate about extracting valuable insights and making 
            strategic decisions through advanced analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Surabaya, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+6281995075262</span>
            </div>
            <div className="flex gap-4">
              <a href="mailto:maruligilbert@outlook.com" className="hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Maruli Gilbert Cristopel Hutagaol"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
