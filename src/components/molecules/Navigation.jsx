import React from 'react';

const Navigation = () => {
  return (
    <div className="flex justify-between items-center py-8">
      <div className="font-mono text-white">
        {'</ Antonio Arellanes'}
      </div>
      
      <div className="flex items-center space-x-6">
        <a href="#home" className="text-[#4361ee]">Home</a>
        <a href="#about" className="text-[#4361ee]">About</a>
        <a href="#work" className="text-[#4361ee]">Work</a>
        <a href="#contacts" className="text-[#4361ee]">Contacts</a>
        <button className="text-white border border-white px-6 py-2 hover:bg-white hover:text-[#1B1F2B] transition-colors">
          Let's talk
        </button>
      </div>

      <button className="md:hidden text-gray-300 hover:text-green-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default Navigation; 