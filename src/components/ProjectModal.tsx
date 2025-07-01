import React from 'react';
import { X, Play, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  vimeoUrl: string;
  liveUrl: string;
  githubUrl: string;
  color: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  //video:string,
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, }) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold mt-2`}>
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Video Section */}
          <div className="mb-8">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                {
                    project?.vimeoUrl ? (

                        <iframe title="vimeo-player" src={project?.vimeoUrl} width="100%" height="100%" ></iframe>

                    ):(
                        <>
                        
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <button 
                                  onClick={() => window.open(project.liveUrl, '_blank')}
                                  className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                                >
                                  <Play className="h-12 w-12 text-white ml-1" />
                                </button>
                              </div>
                              <div className="absolute top-4 right-4">
                                <button
                                  onClick={() => window.open(project.liveUrl, '_blank')}
                                  className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-70 transition-all duration-200 flex items-center space-x-2"
                                >
                                  <Play className="h-4 w-4" />
                                  <span>Watch Demo</span>
                                </button>
                              </div>
                        </>

                        
                    )
                    
                    
                }
          </div>
                             
                
                
                            </div>

          {/* Project Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {project.description}
            </p>
            
            {/* Extended Description */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features & Achievements</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented scalable architecture supporting high-volume operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated advanced security measures and data protection protocols</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimized performance resulting in 40% improvement in response times</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered comprehensive testing suite with 95% code coverage</span>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={() => window.open(project.liveUrl, '_blank')}
              className={`flex-1 bg-gradient-to-r ${project.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
            
            <button
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="h-5 w-5" />
              <span>View Live Site</span>
            </button>
            
            <button
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;