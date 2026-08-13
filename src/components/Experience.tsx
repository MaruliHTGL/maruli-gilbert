
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI & Machine Learning Tutor",
      company: "Freelance",
      location: "Surabaya, Indonesia (Hybrid)",
      duration: "May–Jul 2026",
      type: "Freelance",
      responsibilities: [
        "Provided intensive learning materials and mentoring on Natural Language Processing (NLP), text preprocessing techniques, and machine learning algorithms using Python, NLTK, and Scikit-learn",
        "Led hands-on sessions on designing and developing an AI chatbot capable of generating 5 dynamic outputs based on text processing",
        "Designed a functional website with 4 key features to demonstrate AI model implementation interactively"
      ],
      skills: ["Python", "NLTK", "Scikit-Learn", "NLP", "Mentoring"],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Artificial Intelligence Intern",
      company: "PT Salam Pacific Indonesia Lines",
      location: "Surabaya, Indonesia (On-site)",
      duration: "Aug 2025–Jan 2026",
      type: "Internship",
      responsibilities: [
        "Designed and implemented 5 automation systems using Python and the Laravel Framework",
        "Automated manual workflows, resulting in an 80% increase in employee operational efficiency",
        "Optimized an AI model for semantic similarity to validate company reports, achieving a 70% increase in accuracy"
      ],
      skills: ["Python", "Laravel Framework", "Automation System", "Web Development", "NLP"],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Data Scientist Intern",
      company: "Deepublish",
      location: "Surabaya, Indonesia (Remote)",
      duration: "Jun 2025–Jul 2025",
      type: "Internship",
      responsibilities: [
        "Processed and reformatted 5 raw datasets using Python and NLTK into structured, analysis-ready data",
        "Analyzed consumer behavior patterns and summarized 3 main factors driving book purchase decisions and customer conversion to resellers",
        "Developed a K-Nearest Neighbors (KNN) model with an F1-score of 86% and deployed an interactive web-based reseller prediction app using Streamlit"
      ],
      skills: ["Python", "NLTK", "Machine Learning", "Streamlit", "Customer Analytics"],
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
        "Established relationships with external parties, including schools and other IKASATU regions",
        "Collaborated with other divisions in organizing IKASATU Surabaya events"
      ],
      skills: ["Leadership", "Event Management", "Public Relations", "Team Collaboration"]
    },
    {
      title: "Expert Staff of Surveyor and License",
      organization: "Generasi Integralistik (GERIGI) ITS 2024",
      location: "Surabaya, Indonesia",
      duration: "May–Aug 2024",
      responsibilities: [
        "Evaluated and recruited 48 new staff members for the Surveyor and License Subdivision",
        "Led a team of 6 staff members during committee activities",
        "Supervised surveys and license management for 8 campus venues and facilities"
      ],
      skills: ["Team Leadership", "Recruitment", "Project Management", "Supervision"]
    },
    {
      title: "Operational Expert Staff",
      organization: "Schematics ITS 2024",
      location: "Surabaya, Indonesia",
      duration: "Feb–Nov 2024",
      responsibilities: [
        "Guided staff throughout the committee program",
        "Provided the necessities needed during the committee program",
        "Maintained the event to ensure it ran safely and conducively"
      ],
      skills: ["Operations", "Staff Guidance", "Event Management"]
    },
    {
      title: "Security and License Staff",
      organization: "Generasi Integralistik (GERIGI) ITS 2023",
      location: "Surabaya, Indonesia",
      duration: "Jul–Aug 2023",
      responsibilities: [
        "Managed permits for facilities needed during the committee program",
        "Ensured a safe event environment, including parking area and event security",
        "Coordinated with other subdivisions on facility permits"
      ],
      skills: ["Coordination", "Licensing", "Event Safety"]
    },
    {
      title: "Equipment, Security, and Licensing Staff",
      organization: "Schematics ITS 2023",
      location: "Surabaya, Indonesia",
      duration: "Feb–Oct 2023",
      responsibilities: [
        "Provided the necessary equipment for the committee program",
        "Managed various licenses for the facilities needed during the program",
        "Maintained security and conduct during the event"
      ],
      skills: ["Logistics", "Licensing", "Event Safety"]
    },
    {
      title: "Security, Facilitator, and Surveillance Staff",
      organization: "Ini Lho ITS! 2023",
      location: "Surabaya, Indonesia",
      duration: "Oct 2022–Feb 2023",
      responsibilities: [
        "Surveyed and obtained permits for event venues and other facilities",
        "Collaborated with various stakeholders, both verbally and in writing, to facilitate the event",
        "Conducted thorough supervision to ensure the event ran in an orderly and safe manner"
      ],
      skills: ["Stakeholder Communication", "Surveying", "Supervision"]
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
                            <span className="text-blue-600 mt-[2px] text-sm">•</span>
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
                            <span className="text-green-600 mt-[2px] text-sm">•</span>
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
