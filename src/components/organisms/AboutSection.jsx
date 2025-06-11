import React from 'react';

const AboutSection = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h2 className="font-mono text-white text-2xl mb-8">Sobre mí</h2>
      
      <div className="text-[#4361ee] font-mono mb-4">&lt;p&gt;</div>
      
      <p className="text-gray-300 text-lg max-w-[600px] mb-4">
        Soy un desarrollador de software con experiencia en el desarrollo de aplicaciones web
        y soluciones empresariales. Me apasiona crear software que no solo funcione bien,
        sino que también proporcione una experiencia excepcional al usuario.
      </p>
      
      <div className="text-[#4361ee] font-mono mb-12">&lt;/p&gt;</div>

      <div className="w-full max-w-[600px]">
        <div className="h-[1px] w-full bg-[#4361ee] mb-8"></div>
        
        <ul className="space-y-4">
          <li className="text-gray-300">•Desarrollo de aplicaciones web full-stack con React, Node.js y bases de datos SQL/NoSQL</li>
          <li className="text-gray-300">•Implementación de arquitecturas escalables y patrones de diseño modernos</li>
          <li className="text-gray-300">•Desarrollo de APIs RESTful y integración con servicios de terceros</li>
          <li className="text-gray-300">•Optimización de rendimiento y experiencia de usuario en aplicaciones web</li>
          <li className="text-gray-300">•Control de versiones con Git y metodologías ágiles</li>
          <li className="text-gray-300">•Despliegue y mantenimiento de aplicaciones en la nube (AWS, Azure)</li>
        </ul>

        <p className="text-gray-300 text-lg mt-8 mb-8">
          Mi enfoque se centra en escribir código limpio, mantenible y escalable,
          siempre buscando las mejores prácticas y tecnologías más actuales.
        </p>

        <button className="border border-gray-300 text-gray-300 px-8 py-2 hover:border-[#4361ee] hover:text-[#4361ee] transition-colors">
          Ver perfil completo
        </button>
      </div>
    </div>
  );
};

export default AboutSection; 