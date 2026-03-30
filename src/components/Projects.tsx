import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Globe, Database, Smartphone, Monitor, Cpu, Shield, BarChart } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsProps[] | any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  interface ProjectsProps {
    title: string;
    description: string;
    tech: string[];
    category: string;
    icon: JSX.Element;
    image: string;
    vimeoUrl: string;
    liveUrl: string;
    githubUrl: string;
    color: string;
        }

  const projects = [
    // {
    //   title: "Enterprise Network Management System",
    //   description: "Comprehensive network monitoring and management platform for large-scale enterprise environments. Features real-time monitoring, automated alerts, and performance analytics.",
    //   tech: ["Switching", "Routing", "Cabling", "Design", "Monitoring","Maintenance","Troubleshooting"],
    //   category: "Network Systems",
    //   icon: <Shield className="h-6 w-6" />,
    //   image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    //   vimeoUrl: "#",
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   color: "from-blue-500 to-blue-600"
    // },
    {
      title: "Banking Mobile Application",
      description: "Full-featured mobile banking application with secure payment and transfer integration, real-time account and transaction management, and an advanced financial analytics dashboard.",
      tech: ["React Native", "Firebase", "Node.js", "Expo", "Redux"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1750852911/bankAp_xf0j2e.png",
      vimeoUrl:"https://player.vimeo.com/video/936036378?h=0b9c0f183b",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Lottery Application",
      description: "Full-Featured Lottery Application: Securely integrated with Paystack for payments and offering real-time 12/90 instant betting.",
      tech: ["React Native", "Spabase", "Node.js", "Expo", "Zustand"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1759759656/IMG_8993_2_vlcunm.png",
      // image: "https://res.cloudinary.com/fullupe/image/upload/v1759759650/IMG_8994_2_yujjue.png",
      vimeoUrl:"https://player.vimeo.com/video/1124840598?h=0b9c0f183b",  
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Portable Point Of Sales ",
      description: "A full-featured handheld Android Point-of-Sale (POS) system tailored for pizza shops. It provides intuitive order entry (including custom pizza configurations), integrated secure payment options, efficient transaction management, and real-time sales reporting for streamlined operations..",
      tech: ["React Native", "SQLite", "Node.js", "Expo", "Zustand"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1751328416/F4979458-406C-4FCF-89FF-F67FEC6F81DC_t5fhge.jpg",
      vimeoUrl:"https://player.vimeo.com/video/1003765407?h=37e40fb782",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Portable Point Of Sales ",
      description: "We’ve designed this solution to be fast, reliable, and incredibly simple to use, so you can focus on what matters most: serving your customers. Part 2: Key Features and Benefits,  Our system is packed with features to help you manage your business more efficiently.",
      tech: ["React Native", "SQLite", "Node.js", "Expo", "Zustand"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1766591445/pos_egcqi1.png",
      vimeoUrl:"https://player.vimeo.com/video/1124828326?fl=tl&fe=ec",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-500 to-teal-600"
    },

     {
     
      title: "Ballot System",
      description: "It’s a web app where anyone can sign up and get their own dashboard to create a ballot in minutes, You create a ballot, give it a title, and choose the number of participants—anywhere from 2 to 12 people,  Once that’s done, the app generates a unique link that you share with the participants.",
      tech: ["Nextjs", "TypeScript", "Node.js", "React"],
      category: "Web Application",
      icon: <Monitor className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1766580905/simpleballot_ecyi7s.png",     
      vimeoUrl: "https://player.vimeo.com/video/1149170927?fl=tl&fe=ec",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-orange-600"
    },
     {
     
      title: "P.O.S on Desktop & Web ",
      description: " It’s a comprehensive POS and Inventory Management platform designed specifically for grocery shop owners. Owners can manage their entire product catalog, track real-time stock levels, and process sales through a lightning-fast checkout interface optimized for both Desktop and Web. Beyond the counter, the app automatically generates detailed financial reports and inventory insights, giving you total transparency over your shop's performance and stock health..",
      tech: ["Nextjs", "TypeScript", "Node.js", "React","SQLite"],
      category: "Web Application & Desktop",
      icon: <Monitor className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1769356866/Screenshot_2026-01-25_at_4.24.20_PM_zww89b.png",  
      vimeoUrl: "https://player.vimeo.com/video/1158141974?fl=ip&fe=ec",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-orange-600"
    },

      {
      title: " I.T Ticketing System",
      description: "Designed as a robust web application, this system streamlines customer support and technical issue resolution. It provides an intuitive workflow builder for ticket lifecycle management, intelligent task routing and scheduling, and strong integration capabilities with CRM and internal documentation systems.",
      tech: ["Nextjs", "TypeScript", "Node.js", "React"],
      category: "Web Application",
      icon: <Monitor className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1750863180/ticketing-sys_xny1o4.png",
      vimeoUrl: "https://player.vimeo.com/video/849787025?h=86b664874b",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "IoT Device Management Platform",
      description: "Centralized platform for managing and monitoring IoT devices across multiple locations. Includes device provisioning, firmware updates, and data visualization.",
      tech: ["C++", "Appinventor.", "Blynk"],
      category: "IoT & Electronics",
      icon: <Cpu className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1750855248/1601695883622_tmtgt2.jpg",
      vimeoUrl: "https://player.vimeo.com/video/460382810?h=270b61b21c",  
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Simple E-commerce ",
      description: "This is a streamlined WhatsApp-First E-Commerce Platform designed to bridge the gap between digital browsing and personalized conversational selling. By removing complex third-party payment gateways, the system focuses on direct customer-to-vendor engagement and local payment methods.",
      tech: ["Nextjs", "Reactjs","JavaScript", "shadcn/ui", "Supabase"],
      category: "Web Application",
      icon: <BarChart className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1774830576/Screenshot_2026-03-30_at_1.27.52_AM_cgogu6.png",
      vimeoUrl: "",
      // liveUrl: "https://randsworkorder.vercel.app/MONITOR/uyo",
      liveUrl: "https://shop-me-online-nheq324s0-fullupes-projects.vercel.app/",
      githubUrl: "#",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Online Wedding Photo Album",
      description: "A beautiful web application designed to host and share wedding memories. It features a curated photo album with an interactive comment section for every picture, seamlessly integrating short videos directly onto the page for a comprehensive viewing experience.",
      tech: ["Nextjs", "Reactjs","JavaScript", "shadcn/ui", "SupaBase","cloudinary"],
      category: "Web Application",
      icon: <BarChart className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1750864121/Screenshot_2025-06-25_at_4.07.08_PM_jxwly9.png",
      vimeoUrl: "",
      liveUrl: "https://freedomalbum.vercel.app/",
      githubUrl: "#",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Restaurant Management System",
      description: " This Restaurant Management System is a high-performance, digital ecosystem designed to eliminate kitchen chaos and streamline the dining experience. Built with a modern tech stack, it connects the front-of-house, the kitchen, and the customer through a seamless, real-time data flow.",
      tech: ["Nextjs", "TypeScript", "MySQl", "Node.js", "React"],
      category: "web & Desktop Application",
      icon: <Monitor className="h-6 w-6" />,
      image: "https://res.cloudinary.com/fullupe/image/upload/v1774824819/Whisk_ef76bc6bbcf5708823944cc009347875dr_ywc754.jpg",    
      vimeoUrl: "https://player.vimeo.com/video/1178271533?fl=ip&fe=ec",
      liveUrl: "#",  
      githubUrl: "#",
      color: "from-orange-500 to-orange-600"
    },
  
    // 

// Core Modules
// Dynamic POS Station: A fast, intuitive interface for cashiers to process walk-in orders, handle payments, and instantly trigger kitchen preparation.

// Smart Kitchen Monitor (KDS): A digital replacement for paper tickets, providing chefs with an organized, live view of incoming orders to improve prep speed and accuracy.

// Live Customer Status Board: A high-visibility monitor that keeps diners informed with real-time "Preparing" and "Ready" status updates, reducing counter congestion.
    
   
    // {
    //   title: "Cloud Infrastructure Orchestrator",
    //   description: "DevOps platform for automated cloud infrastructure deployment and management across multiple cloud providers with cost optimization features.",
    //   tech: ["Terraform", "Kubernetes", "Go", "AWS", "Azure"],
    //   category: "Cloud & DevOps",
    //   icon: <Globe className="h-6 w-6" />,
    //   image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    //   vimeoUrl: "#",
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   color: "from-indigo-500 to-indigo-600"
    // },
    // {
    //   title: "Database Migration & Optimization Tool",
    //   description: "Enterprise-grade tool for database migration, performance optimization, and data integrity validation across different database systems.",
    //   tech: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "Oracle"],
    //   category: "Database Systems",
    //   icon: <Database className="h-6 w-6" />,
    //   image: "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    //   vimeoUrl: "#",
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   color: "from-red-500 to-red-600"
    // }
  ];

  const openModal = (project:ProjectsProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my diverse technical expertise across various domains, 
            from enterprise systems to innovative applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {project.category}
                </div>

                {/* Project Icon */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${project.color} rounded-lg p-2`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openModal(project)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      title="View Demo"
                    >
                      <Play className="h-5 w-5" />
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                    <a 
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors duration-200"
                      title="Live Site"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      title="Source Code"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                  
                  <button 
                    onClick={() => openModal(project)}
                    className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Interested in collaborating on a project or learning more about my work?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
     
      />
    </section>
  );
};

export default Projects;