import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "🗃️" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🗄️" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Cog className="h-6 w-6" />,
      skills: [
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Scikit-Learn", icon: "🤖" },
        { name: "Streamlit", icon: "⚡" }
      ]
    },
    {
      title: "Analytics Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Google Looker Studio", icon: "📊" },
        { name: "Tableau", icon: "📈" },
        { name: "Excel", icon: "📋" },
        { name: "Jupyter Notebook", icon: "📓" }
      ]
    }
  ];

  const coursework = [
    "Data Science", "Machine Learning", "Python", "Model Deployment",
    "Data Analysis", "Business Intelligence", "SQL", "Data Visualization"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical skills and knowledge gained through academic coursework, 
            practical projects, and professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105"
                    >
                      <span className="text-2xl">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white animate-fade-in animate-delay-600">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Relevant Coursework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {coursework.map((course, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-800 transition-all duration-300 hover:bg-blue-200 hover:scale-105"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
