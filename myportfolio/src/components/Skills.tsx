import React, { useState } from 'react';
import { Code, Server, Database, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Bootstrap', level: 85 },
        { name: 'jQuery', level: 70 },
        { name: 'WordPress', level: 65 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
        { name: 'Nest.js', level: 50},
        { name: 'Python', level: 60 },
        { name: 'REST APIs', level: 75 }
       
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: <Database size={24} />,
      skills: [
        { name: 'SQL', level: 75 },
        { name: 'MongoDB', level: 65 },
        { name: 'Firebase', level: 60 },
        { name: 'AWS (S3, Lambda, EC2)', level: 55 }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Tool size={24} />,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Docker', level: 60 },
        { name: 'Postman', level: 75 },
        { name: 'VS Code', level: 90 },
        { name: 'Adobe XD', level: 65 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];
  
  const softSkills = [
    { name: 'Communication', description: 'Effective verbal and written communication skills' },
    { name: 'Problem Solving', description: 'Analytical thinking and creative problem-solving abilities' },
    { name: 'Agile Development', description: 'Experience with Agile methodologies and practices' },
    { name: 'Team Collaboration', description: 'Strong teamwork and collaborative skills' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Technical Skills</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-12">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex items-center px-6 py-3 m-2 rounded-full font-medium transition-colors ${
              activeTab === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>
      
      {/* Skills content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={activeTab === category.id ? 'block' : 'hidden'}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="text-indigo-600 mr-3">{category.icon}</span>
              <span>{category.title}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Soft Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-indigo-600 mb-3">{skill.name}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;