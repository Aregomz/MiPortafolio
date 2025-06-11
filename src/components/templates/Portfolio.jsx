import React from 'react';
import Navigation from '../molecules/Navigation';
import HeroSection from '../organisms/HeroSection';
import AboutSection from '../organisms/AboutSection';
import RecentWorks from '../organisms/RecentWorks';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1B1F2B] text-center">
      <div className="max-w-[800px] mx-auto px-4">
        <Navigation />
        <div className="flex flex-col items-center justify-center">
          <HeroSection />
          <AboutSection />
          <RecentWorks />
        </div>
        
        <footer className="py-8 mt-16 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Antonio Arellanes. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4361ee]">GitHub</a>
              <a href="https://linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4361ee]">LinkedIn</a>
              <a href="mailto:tu@email.com" className="text-gray-400 hover:text-[#4361ee]">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio; 