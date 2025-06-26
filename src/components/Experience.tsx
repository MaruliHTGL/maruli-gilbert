
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Data Scientist Internship",
      company: "Deepublish",
      location: "Remote",
      duration: "Jun 2025–Jul 2025",
      type: "Internship",
      responsibilities: [
        "Reformatted 5 raw data into processable data for analysis using Python",
        "Analyzed factors influencing customer purchasing decisions for books, reseller programs, affiliate programs, and partner stores",
        "Developed an AdaBoost classifier model with an accuracy score of 92% and deployed a tool to predict customer conversion to resellers, affiliates, and partner stores"
      ],
      skills: ["Python", "Data Processing", "Machine Learning", "Customer Analytics"],
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  const organizations = [
    {
      title: "Head of External Division",
      organization: "Ikatan Alumni SMA Santo Thomas 1 (IKASATU) Surabaya",
      location: "Surabaya, Indonesia",
      duration: "May 2023–May 2025",
      responsibilities: [
        "Publicized post-school life information, including studying in Surabaya, to Saint Thomas 1 Senior High School students",
        "Collaborated with other divisions in organizing IKASATU Surabaya events",
        "Established relationships with external parties including schools and other IKASATU regions"
      ],
      skills: ["Leadership", "Event Management", "Public Relations", "Team Collaboration"]
    },
    {
      title: "Expert Staff of Surveyor and License",
      organization: "Generasi Integralistik (GERIGI) ITS",
      location: "Surabaya, Indonesia",
      duration: "May–Aug 2024",
      responsibilities: [
        "Evaluated and recruited 48 new staff members for the Surveyor and License Subdivision",
        "Led a team of 6 staff members during committee activities",
        "Supervised team activities including surveys and license management for 8 campus venues and facilities"
      ],
      skills: ["Team Leadership", "Recruitment", "Project Management", "Supervision"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience and leadership roles that have shaped my skills 
            in data science, team management, and organizational development
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-blue-600" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900 mb-1">
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-blue-600">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start lg:self-center">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-700 flex items-start gap-3">
                            <span className="text-blue-600 mt-1 text-sm">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="bg-blue-50 text-blue-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Organization Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="h-7 w-7 text-green-600" />
              Organization & Leadership Experience
            </h3>
            
            <div className="space-y-6">
              {organizations.map((org, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 rounded-lg p-3 text-green-600">
                          <Users className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900 mb-1">
                            {org.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-green-600">
                            {org.organization}
                          </p>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {org.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {org.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {org.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-700 flex items-start gap-3">
                            <span className="text-green-600 text-sm">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {org.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="bg-green-50 text-green-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
