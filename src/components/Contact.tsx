
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:maruligilbert@outlook.com" className="text-blue-600 hover:underline">
                      maruligilbert@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 rounded-lg p-3 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="https://wa.me/6281995075262" className="text-green-600 hover:underline">
                      +62 819 9507 5262
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 rounded-lg p-3 text-purple-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:maruligilbert@outlook.com" 
                  className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700">Strong academic background in Informatics (GPA: 3.55/4.00)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700">Hands-on experience with 7+ data science projects</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700">Proven ability to deploy ML models with high accuracy</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700">Leadership experience and strong communication skills</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Let's discuss a project..." />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                  />
                </div>

                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
