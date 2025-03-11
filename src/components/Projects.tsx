import React, { useState } from 'react';
import { ExternalLink, Github, ShoppingCart, Globe } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "E-Commerce Web App",
      description: "A full-stack e-commerce website with user authentication, shopping cart, and Stripe payments.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Stripe API"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart functionality",
        "Secure payment processing with Stripe",
        "Order history and tracking",
        "Admin dashboard for product management"
      ],
      links: {
        live: "#",
        github: "#"
      },
      icon: <ShoppingCart size={24} />
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects and resume, optimized for SEO and mobile responsiveness.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive design for all device sizes",
        "Interactive UI elements",
        "Project showcase with filtering",
        "Contact form with validation",
        "SEO optimized content",
        "Fast loading performance"
      ],
      links: {
        live: "#",
        github: "#"
      },
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Projects</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-full text-left p-4 border-b border-gray-200 flex items-center ${
                  activeProject === index 
                    ? 'bg-indigo-50 border-l-4 border-l-indigo-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`mr-3 ${activeProject === index ? 'text-indigo-600' : 'text-gray-500'}`}>
                  {project.icon}
                </div>
                <div>
                  <h3 className={`font-medium ${activeProject === index ? 'text-indigo-600' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">{project.description.substring(0, 60)}...</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Project details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{projects[activeProject].title}</h3>
                <div className="flex space-x-2">
                  <a 
                    href={projects[activeProject].links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={projects[activeProject].links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{projects[activeProject].description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
        <a 
          href="https://github.com/rushyyprajapati" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
        <Github size={20} className="mr-2" />
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;