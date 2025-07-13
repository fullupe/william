//import React from 'react';
import { Building2, Network, Database, Laptop, Lightbulb, LucideGitGraph } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: "Editec UK",
      role: "IT Consultant and Support",
      description: "I'm responsible for delivering strategic IT consulting services to enterprise clients across diverse department. This involved focusing on system optimization, infrastructure planning, and technology implementation, while also providing hands-on comprehensive IT support, application software administration, and robust database management..",
      icon: <Laptop className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      company: "FyberLite Solutions",
      role: "Founder & Lead Tech Consultant",
      description: "Established and lead my own IT consultancy, delivering comprehensive technology solutions to diverse clients. Specializing in system architecture, software development, and digital transformation initiatives.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      company: "Simnet Ghana Ltd",
      role: "Software & Database Coordinator",
      description: "Managed critical database systems and coordinated IT infrastructure operations. Ensured data integrity, system performance optimization, and seamless integration across platforms.",
      icon: <Database className="h-6 w-6" />,
      color: "from-teal-500 to-teal-600"
    },
    {
      company: "MPI Ghana",
      role: "Data Coordinator  Engineer",
      description: "Specializing in collecting and analyzing cell site data for business needs across giant telecommunication sites in  Ghana.",
      icon: <LucideGitGraph className="h-6 w-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      company: "MarfTech",
      role: "Network Systems Engineer",
      description: "Specialized in network infrastructure design, cabling installation, and comprehensive maintenance of IT systems including computers, photocopiers, printers, and network communication devices.",
      icon: <Network className="h-6 w-6" />,
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">William</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A versatile tech professional with extensive experience across multiple domains, 
            from electronic engineering foundations to cutting-edge software development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                My career journey spans the full spectrum of technology, from the foundational principles 
                of electronic engineering to the dynamic world of modern software development. This unique 
                combination gives me a rare perspective on how hardware and software integrate to create 
                powerful solutions.
              </p>
              <p>
                Throughout my experience across four key organizations, I've developed expertise in 
                network infrastructure, database management, system administration, and full-stack 
                development. Each role has contributed to my comprehensive understanding of technology 
                ecosystems and business requirements.
              </p>
              <p>
                Today, through FyberLite Solutions, I leverage this diverse background to help 
                organizations navigate complex technical challenges and implement innovative solutions 
                that drive real business value.
              </p>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Electronic Engineering</h4>
                  <p className="text-gray-600">Foundation in hardware systems, circuit design, and electronic principles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-3">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Computer Networking & Server Systems</h4>
                  <p className="text-gray-600">Infrastructure design, implementation, and maintenance expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-3">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Software Development</h4>
                  <p className="text-gray-600">Full-stack development across web, mobile, and desktop platforms</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${exp.color} rounded-lg p-3 mr-4`}>
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
                      <p className="text-blue-600 font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;