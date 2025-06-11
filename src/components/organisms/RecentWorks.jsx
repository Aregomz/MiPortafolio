import React from 'react';

const ProjectCard = ({ title, image, className }) => (
  <div className={`relative group overflow-hidden rounded-xl aspect-[4/3] ${className}`}>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
      </div>
    </div>
  </div>
);

const RecentWorks = () => {
  const projects = [
    {
      title: 'Messenger',
      image: '/projects/messenger.jpg',
    },
    {
      title: 'Tracker',
      image: '/projects/tracker.jpg',
    },
    {
      title: 'Online Shopping',
      image: '/projects/shopping.jpg',
    },
  ];

  return (
    <section className="py-24" id="work">
      <h2 className="text-2xl font-mono text-white mb-12">Recent works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            className={index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentWorks; 