import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">William</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-Stack Tech Professional specializing in Electronic Engineering, 
              Network & Server Systems, and Software Development. Building innovative 
              solutions that drive business success.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and</span>
              <Code className="h-4 w-4 text-blue-400" />
              <span>fueled by</span>
              <Coffee className="h-4 w-4 text-yellow-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>Network Systems</li>
              <li>Database Design</li>
              <li>System Integration</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; {currentYear} William - FyberLite Solutions. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;