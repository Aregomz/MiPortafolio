import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-[#1B1F2B] border-b border-gray-800">
      <div className="container h-[80px] flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-white font-mono text-xl">
          {'</ Antonio Arellanes'}
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#acerca" className="text-[#4361ee] hover:text-[#4361ee]/80 transition-colors">
            Acerca de mí
          </a>
          <a href="#habilidades" className="text-[#4361ee] hover:text-[#4361ee]/80 transition-colors">
            Habilidades
          </a>
          <a href="#proyectos" className="text-[#4361ee] hover:text-[#4361ee]/80 transition-colors">
            Proyectos
          </a>
          <a href="#contacto" className="text-[#4361ee] hover:text-[#4361ee]/80 transition-colors">
            Contacto
          </a>
          <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-[#1B1F2B] transition-colors">
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 