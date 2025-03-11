import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Fusion Technologies",
      location: "Mumbai, India",
      period: "January 2020 - August 2020",
      description: [
        "Developed interactive and responsive UI components using HTML, CSS, JavaScript.",
        "Transformed design mockups into functional web pages, improving load speed by 30%.",
        "Conducted research on emerging web technologies to enhance application performance."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"]
    },
    {
      title: "Trainee Web Developer",
      company: "Logical Solutions",
      location: "Mumbai, India",
      period: "June 2018 - January 2019",
      description: [
        "Assisted in developing and maintaining user-friendly websites with HTML, CSS, and JavaScript.",
        "Created and edited UI assets using Adobe Photoshop, Illustrator, and InDesign.",
        "Collaborated with designers and backend developers to optimize UI/UX."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Adobe Creative Suite", "UI/UX"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Professional Experience</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
              
              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Briefcase size={24} className="text-indigo-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-indigo-600">{exp.company}</p>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-600 italic">
          "Every experience, good or bad, is a priceless collector's item." — Isaac Marion
        </p>
      </div>
    </div>
  );
};

export default Experience;