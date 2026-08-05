import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-8 md:px-24 lg:px-48 bg-slate-900">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          Proyek Unggulan
        </h2>
        <div className="h-px bg-slate-700 flex-grow rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-800 rounded-lg p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(251,191,36,0.3)] transition-all duration-300 border border-slate-700 hover:border-amber-400 group"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-amber-400 text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech, techIndex) => (
                <li 
                  key={techIndex} 
                  className="text-xs font-mono text-amber-300 bg-amber-900/30 px-3 py-1 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;