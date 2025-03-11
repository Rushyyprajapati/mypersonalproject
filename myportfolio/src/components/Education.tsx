import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University – Mills College",
      location: "Oakland, CA",
      period: "July 2023 – Present",
      courses: [
        "Web Development: Tools and Methods",
        "Web Design and User Experience Engineering"
      ],
      achievements: []
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Universal College of Engineering",
      location: "Mumbai, India",
      period: "June 2016 – May 2022",
      gpa: "3.10/4.00",
      courses: [],
      achievements: [
        "Volunteer Head at National Level Paper Presentation",
        "Technical Event Manager"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Education</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <GraduationCap size={28} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-indigo-600 font-semibold">{edu.institution}</p>
              </div>
            </div>
            
            <div className="mb-6 space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-2" />
                <span>{edu.period}</span>
              </div>
              {edu.gpa && (
                <div className="flex items-center text-gray-600">
                  <BookOpen size={18} className="mr-2" />
                  <span>GPA: {edu.gpa}</span>
                </div>
              )}
            </div>
            
            {edu.courses.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Relevant Coursework</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {edu.achievements.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Leadership & Achievements</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications & Additional Training</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-lg shadow-md text-white">
            <h4 className="text-xl font-bold mb-4">Python Certification</h4>
            <p className="mb-4">Gained proficiency in coding, debugging, and applying Python in projects.</p>
            <div className="flex justify-between items-center">
              <span className="text-indigo-200">Completed</span>
              <span className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Verified</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-lg shadow-md text-white">
            <h4 className="text-xl font-bold mb-4">AWS Cloud Practitioner</h4>
            <p className="mb-4">Learning cloud infrastructure and deployment strategies.</p>
            <div className="flex justify-between items-center">
              <span className="text-indigo-200">In Progress</span>
              <span className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;