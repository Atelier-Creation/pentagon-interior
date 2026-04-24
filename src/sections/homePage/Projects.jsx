import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import content from '../../data/content';

const Projects = () => {
  const navigate = useNavigate();
  const projects = content.projects.featured.slice(0, 3);

  return (
    <section className="py-5 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold block mb-2">Recent Creations</span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-text-main">A Selection of Our Hand-Crafted Projects</h2>
          </div>
          <button onClick={()=>navigate('/projects')} className="bg-bg-light text-primary hover:bg-primary hover:text-white py-3 px-8 rounded-full transition-colors flex items-center gap-2 font-medium">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={`${project.image}?auto=format&fit=crop&w=800&q=80`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold font-sans opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
