
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Data Analysis", level: 92 },
        { name: "NLP", level: 85 },
        { name: "Model Deployment", level: 82 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Cog className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Scikit-Learn", level: 85 },
        { name: "Streamlit", level: 80 }
      ]
    },
    {
      title: "Analytics Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Google Looker Studio", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Excel", level: 88 },
        { name: "Jupyter Notebook", level: 92 }
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical skills and knowledge gained through academic coursework, 
            practical projects, and professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Relevant Coursework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {coursework.map((course, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
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
