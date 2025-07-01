import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Server, 
  Shield, 
  Award,
  CheckCircle,
  Star
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 50 },
        { name: "Java", level: 28 },
        // { name: "C#", level: 80 },
        // { name: "Go", level: 75 },
        // { name: "PHP", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "React/Next.js", level: 95 },
        // { name: "Vue.js/Nuxt.js", level: 85 },
        // { name: "Angular", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        // { name: "SASS/SCSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Node.js/Express", level: 85 },
        // { name: "Django/FastAPI", level: 85 },
        // { name: "Spring Boot", level: 80 },
        { name: "Backend As a Service (Firebase, SupaBase )", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Database Systems",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "SupaBase", level: 90 },
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MS SQL", level: 80 },
        // { name: "Oracle", level: 75 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Expo", level: 80 },
        // { name: "iOS (Swift)", level: 75 },
        // { name: "Android (Kotlin)", level: 75 },
        // { name: "Ionic", level: 70 },
        // { name: "Xamarin", level: 70 }
      ]
    },
    {
      title: "Network & Systems",
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "Network Design", level: 95 },
        { name: "Linux Administration", level: 80 },
        { name: "Windows Server", level: 85 },
        // { name: "Docker/Kubernetes", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Security Systems", level: 85 }
      ]
    }
  ];

  const certifications = [
    // {
    //   name: "Cisco Certified Network Associate (CCNA)",
    //   issuer: "Cisco Systems",
    //   year: "2023",
    //   color: "from-blue-500 to-blue-600"
    // },
    // {
    //   name: "ITIL Foundation",
    //   issuer: "AXELOS",
    //   year: "2022",
    //   color: "from-teal-500 to-teal-600"
    // },
    {
      name: "CompTIA A+",
      issuer: "CompTIA",
      year: "2005",
     color: "from-green-500 to-green-600"
    },
    {
      name: "CompTIA N+",
      issuer: "CompTIA",
      year: "2006",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Google I.T Support Specialist ",
      issuer: "Google",
      year: "2024",
      color: "from-purple-500 to-purple-600"
    },
    {
    
      name: "MicroSoft Window Server ",
      issuer: "MCSA, MCITP, MCTS",
      year: "2009",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "JavaScript ",
      issuer: "SoloLearn",
      year: "2014",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Web Development ",
      issuer: "SoloLearn",
      year: "2016",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "AWS Cloud Quest Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      color: "from-green-500 to-green-600"
    },
    {
      name: "AWS Training and Certification (DevOps)",
      issuer: "Amazon Web Services",
      year: "2025",
      color: "from-red-500 to-red-600"
    }
  ];

  const additionalSkills = [
    "MS Excel",
    "VBA",
    // "DevOps & CI/CD",
    "MS Access Database",
    "Visual Basic",
    // "Microservices Architecture",
    // "API Design & Development",
    // "Test-Driven Development",
    "Agile/Scrum Methodologies",
    // "System Integration",
    // "Performance Optimization",
    "Security Best Practices",
    // "Technical Leadership",
    // "Solution Architecture"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical competencies across various technologies, 
            frameworks, and industry certifications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-3">
                  <div className="text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-500 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${cert.color} rounded-lg p-3 flex-shrink-0`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">Obtained: {cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
            <Star className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm committed to staying current with emerging 
              technologies, industry best practices, and innovative solutions that drive business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;