import React from 'react';
import SkillTag from '../atoms/SkillTag';

const SkillsSection = () => {
  const skillCategories = {
    'Lenguajes de Programación': ['JavaScript', 'Python', 'HTML', 'CSS'],
    'Frameworks & Librerías': ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    'Herramientas & Otros': ['Git', 'VS Code', 'Figma', 'Responsive Design']
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Habilidades</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">{category}</h3>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection; 