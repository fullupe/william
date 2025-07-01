import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/fullupe/image/upload/v1618259553/passport_xnxpkv.jpg"
                  alt="William - Tech Professional"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white/30"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">William Gyekye</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Full-Stack Tech Professional specializing in 
              <span className="text-teal-300 font-semibold"> Electronic Engineering</span>, 
              <span className="text-teal-300 font-semibold"> I.T Support Specialist</span> and 
              <span className="text-teal-300 font-semibold"> Software Development</span>
            </p>

            <p className="text-lg text-blue-200 mb-12 max-w-xl mx-auto lg:mx-0">
              Transforming complex technical challenges into elegant solutions across web, mobile, and desktop platforms. 
              Building robust systems and innovative applications that drive business success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/fullupe" target="_blank" className="text-white hover:text-teal-300 transform hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/williamgkyekye/" target="_blank" className="text-white hover:text-teal-300 transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:wnk.gyekye@gmail.com" className="text-white hover:text-teal-300 transform hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-teal-300 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;