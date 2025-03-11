import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          <p className="text-gray-600 mb-8">
            Feel free to reach out to me for any questions, opportunities, or just to say hello. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Mail size={24} className="text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <a href="mailto:Prajapati.ru@northeastern.edu" className="text-indigo-600 hover:underline">
                  Prajapati.ru@northeastern.edu
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Phone size={24} className="text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <a href="tel:4083408714" className="text-indigo-600 hover:underline">
                  (408) 340-8714
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <MapPin size={24} className="text-indigo-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">San Fracisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-100 p-3 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
          
          {submitSuccess ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Job Opportunity"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;