import React from 'react';
import { User, MapPin, Mail, Phone, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Who am I?</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am an aspiring Full Stack Developer currently pursuing my Master's in Information Systems at Northeastern University. 
            With hands-on experience in web development, UI/UX principles, and cloud computing, I am passionate about creating 
            scalable and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            My journey in technology began during my undergraduate studies in Information Technology, where I developed a strong 
            foundation in programming and software development. Since then, I've worked on various projects and gained professional 
            experience that has shaped my skills and approach to development.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies and best practices in the industry. 
            When I'm not coding, you can find me contributing to open-source projects, reading tech blogs, or enjoying football and music.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin size={20} className="text-indigo-600 mr-2" />
              <span className="text-gray-700">San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-indigo-600 mr-2" />
              <span className="text-gray-700">Prajapati.ru@northeastern.edu</span>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="text-indigo-600 mr-2" />
              <span className="text-gray-700">(408) 340-8714</span>
            </div>
            <div className="flex items-center">
              <Award size={20} className="text-indigo-600 mr-2" />
              <span className="text-gray-700">MS in Information Systems</span>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-lg transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
              alt="About Rushikesh" 
              className="relative z-10 rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">My Interests</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Web Development</h4>
            <p className="text-gray-600">Building responsive and interactive web applications</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">UX/UI Design</h4>
            <p className="text-gray-600">Creating intuitive and beautiful user interfaces</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Open Source</h4>
            <p className="text-gray-600">Contributing to open-source projects and communities</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Football & Music</h4>
            <p className="text-gray-600">Enjoying sports and music in my free time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;