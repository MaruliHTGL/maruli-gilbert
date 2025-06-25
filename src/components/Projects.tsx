import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, TrendingUp, Brain, Shield, MessageSquare, Calculator, Users, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      type: "Classification",
      date: "Jun 2025",
      description: "Developed a tool to predict the churn rate of telecommunications customers based on products purchased.",
      achievements: [
        "Identified key factors: tenure, product purchased, contract length, and payment method",
        "Deployed Multinomial Naïve Bayes model with 86% recall and 70% accuracy",
        "Built interactive dashboard using Python and Streamlit"
      ],
      technologies: ["Python", "Jupyter Notebook", "Streamlit", "Scikit-Learn"],
      icon: <TrendingUp className="h-6 w-6" />,
      image: "/churn.png",
      codeUrl: "https://github.com/MaruliHTGL/Binary-Classification-Churn-Prediction",
      demoUrl: "https://churncustomerprediction.streamlit.app/"
    },
    {
      title: "Traveloka Review Sentiment Analysis",
      type: "NLP",
      date: "Feb 2025",
      description: "Developed a tool to analyze sentiment based on Traveloka app user reviews with app version 5.X.X.",
      achievements: [
        "Analyzed 66% positive reviews with balanced negative and neutral reviews",
        "Discovered not all 5-star reviews are positive sentiments",
        "Deployed NLTK Vader for sentiment classification"
      ],
      technologies: ["Python", "NLTK", "Streamlit", "NLP"],
      icon: <MessageSquare className="h-6 w-6" />,
      image: "/traveloka.png",
      codeUrl: "https://github.com/MaruliHTGL/NLP-Sentiment-Analysis-of-Traveloka-App-Review",
      demoUrl: "https://travelokareview.streamlit.app/"
    },
    {
      title: "Flight Ticket Price Calculator",
      type: "Regression",
      date: "Jan 2025",
      description: "Developed a tool to estimate flight ticket prices based on airline flight data.",
      achievements: [
        "Identified key factors: airline service type and flight duration",
        "Achieved 82% R-squared score with Random Forest Regressor",
        "Created user-friendly price estimation interface"
      ],
      technologies: ["Python", "Random Forest", "Streamlit", "Data Analysis"],
      icon: <Calculator className="h-6 w-6" />,
      image: "/flight.png",
      codeUrl: "https://github.com/MaruliHTGL/Regression-Flight-Price",
      demoUrl: "https://flightpricecalculator.streamlit.app/"
    },
    {
      title: "Fraud Detection System",
      type: "Clustering & Classification",
      date: "Jan 2025",
      description: "Developed a tool to detect fraud in bank transactions using clustering and classification techniques.",
      achievements: [
        "Implemented K-means clustering to identify 4 customer segments",
        "Built Random Forest Classifier for fraud detection",
        "Analyzed transaction patterns and account balances"
      ],
      technologies: ["Python", "K-means", "Random Forest", "Anomaly Detection"],
      icon: <Shield className="h-6 w-6" />,
      image: "/fraud.png",
      codeUrl: "https://github.com/MaruliHTGL/Clustering-and-Binary-Classification-Fraud-Detection",
      demoUrl: "https://frauddetector.streamlit.app/"
    },
    {
      title: "Fake News Detection",
      type: "NLP & Classification",
      date: "Dec 2024–Jan 2025",
      description: "Developed a tool to detect fake news based on news headlines and content.",
      achievements: [
        "Identified key factors: typographical errors and article length",
        "Achieved 93% accuracy and 92% recall with C-Support Vector Classification",
        "Built comprehensive text analysis pipeline"
      ],
      technologies: ["Python", "SVM", "NLP", "Text Analysis"],
      icon: <Brain className="h-6 w-6" />,
      image: "/news.png",
      codeUrl: "https://github.com/MaruliHTGL/Binary-Classification-Fake-News",
      demoUrl: "https://fakenewschecker.streamlit.app/"
    },
    {
      title: "Customer Segmentation",
      type: "Clustering & Classification",
      date: "Dec 2024–Jan 2025",
      description: "Developed a tool to classify customers into 3 clusters based on personal data.",
      achievements: [
        "Created K-means model for customer segmentation",
        "Analyzed age, income, occupation, and settlement size",
        "Deployed Decision Tree Classifier for customer classification"
      ],
      technologies: ["Python", "K-means", "Decision Tree", "Customer Analytics"],
      icon: <Users className="h-6 w-6" />,
      image: "/segmentation.png",
      codeUrl: "https://github.com/MaruliHTGL/Clustering-and-Multiclass-Classification-Customer-Segmentation",
      demoUrl: "https://findcustomercluster.streamlit.app/"
    },
    {
      title: "E-Commerce Sales Dashboard",
      type: "Business Intelligence",
      date: "Nov 2024",
      description: "Developed a dashboard for visualizing e-commerce sales data.",
      achievements: [
        "Created comprehensive sales visualization dashboard",
        "Analyzed year-over-year sales performance",
        "Provided actionable insights for decision-making"
      ],
      technologies: ["Google Looker Studio", "Data Visualization", "BI"],
      icon: <BarChart3 className="h-6 w-6" />,
      image: "/dashboard.png",
      codeUrl: "https://github.com/MaruliHTGL/Business-Intelligence-E-Commerce-Sales-Dashboard-2022",
      demoUrl: "https://lookerstudio.google.com/s/r256GdUlv9E"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my data science and machine learning projects, 
            demonstrating expertise in various domains and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg p-2 text-blue-600">
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.type}
                      </Badge>
                      <CardTitle className="text-lg leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1 min-w-[4px]">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
