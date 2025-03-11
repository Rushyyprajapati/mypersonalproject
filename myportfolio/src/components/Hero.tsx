import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Intro and Links */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Rushikesh Prajapati</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
            <p className="text-lg mb-8 text-gray-100">
              Aspiring Full Stack Developer with hands-on experience in web development, UI/UX principles, and cloud computing. 
              Strong foundation in JavaScript, React.js, Node.js, and SQL. Passionate about building scalable and user-friendly applications.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <GitHub size={20} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="mailto:Prajapati.ru@northeastern.edu"
                className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <Mail size={20} />
                Email
              </a>
              <a 
                href="tel:4083408714"
                className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                Call
              </a>
            </div>

            {/* Download Resume Button */}
            <button 
              className="flex items-center gap-2 bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors"
              onClick={() => window.open('/Rushikesh Prajapati(Resume).pdf', '_blank')}
            >
              <Download size={20} />
              Download Resume 
            </button>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img 
               src="/IMG_6484.jpg" 
               alt="Your Name" 
                className="rounded-md w-full h-auto object-cover"
              />

              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-800">Rushikesh Prajapati</h3>
                <p className="text-gray-600">San Francisco, CA</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Mail size={16} className="mr-1" />
                  <span>Prajapati.ru@northeastern.edu</span>
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <Phone size={16} className="mr-1" />
                  <span>(408) 340-8714</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center">
            <span className="mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
