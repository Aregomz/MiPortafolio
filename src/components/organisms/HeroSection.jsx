import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-mono text-white text-[2.5rem] leading-[1.4] tracking-wide mb-6">
        Transformando
        <br />
        ideas en
        <br />
        soluciones
        <br />
        digitales
      </h1>
      
      <p className="text-gray-400 text-lg max-w-[600px] mb-8">
        Como desarrollador de software apasionado, me especializo en crear
        experiencias digitales excepcionales y soluciones tecnológicas innovadoras.
      </p>
      
      <button className="mb-12 px-8 py-2 text-white border border-white hover:bg-white hover:text-[#1B1F2B] transition-colors">
        Contactar/>
      </button>

      <div className="flex justify-center space-x-8 mb-12">
        <a href="#" className="text-[#4361ee]">GitHub</a>
        <a href="#" className="text-[#4361ee]">LinkedIn</a>
        <a href="#" className="text-[#4361ee]">Twitter</a>
      </div>

      <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <img
          src="/profile.jpg"
          alt="Antonio Arellanes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection; 