import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold block mb-2">Recent Creations</span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-text-main">A Selection of Our Hand-Crafted Projects</h2>
          </div>
          <button className="bg-bg-light text-primary hover:bg-primary hover:text-white py-3 px-8 rounded-full transition-colors flex items-center gap-2 font-medium">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={`https://decoria.steelthemes.com/demo/wp-content/uploads/2026/01/project-${item}.jpg`} 
                  alt="Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-accent font-medium mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">Residential</span>
                <h3 className="text-white text-2xl font-bold font-sans opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">Modern Urban Apartment</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
