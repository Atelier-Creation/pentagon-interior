import React, { useState } from 'react';
import Header from './sections/homePage/Header';
import Footer from './sections/homePage/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Layout, Coffee } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Modern Urban Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    icon: <Home size={16} />
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 size={16} />
  },
  {
    id: 3,
    title: "Luxury Boutique Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    icon: <Coffee size={16} />
  },
  {
    id: 4,
    title: "Minimalist Loft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    icon: <Home size={16} />
  },
  {
    id: 5,
    title: "Co-working Space",
    category: "Space Planning",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
    icon: <Layout size={16} />
  },
  {
    id: 6,
    title: "Tech Startup Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 size={16} />
  },
  {
    id: 7,
    title: "Contemporary Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    icon: <Home size={16} />
  },
  {
    id: 8,
    title: "Chic Café Interior",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    icon: <Coffee size={16} />
  },
  {
    id: 9,
    title: "Executive Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    icon: <Home size={16} />
  }
];

const categories = [
  "Show All",
  "Commercial",
  "Hospitality",
  "Residential",
  "Space Planning"
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Show All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === "Show All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div className="font-text text-text-main selection:bg-primary selection:text-white overflow-hidden">
      <Header />
      
      <main>
        {/* 🔹 HERO SECTION */}
        <section className="relative h-[450px] flex items-center justify-center text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative text-center z-10 pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold font-sans tracking-tight mb-6"
            >
              Projects
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center gap-3 text-white/70 text-sm font-medium tracking-widest uppercase"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-primary">•</span>
              <span className="text-white">Projects</span>
            </motion.div>
          </div>
        </section>

        {/* 🔹 FILTER SECTION */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {categories.map((cat) => {
                const count = cat === "Show All" 
                  ? projectsData.length 
                  : projectsData.filter(p => p.category === cat).length;
                
                const isActive = activeCategory === cat;
                
                return (
                  <button
                    key={cat}
                    onClick={() => {
                        setActiveCategory(cat);
                        setVisibleProjects(6);
                    }}
                    className={`group relative text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-gray-400 hover:text-text-main'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {isActive && <span className="opacity-60">[</span>}
                      {cat} ({count})
                      {isActive && <span className="opacity-60">]</span>}
                    </span>
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 🔹 PROJECTS GRID */}
        <section className="py-24 bg-[#fffbf3]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.slice(0, visibleProjects).map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                      
                      {/* Inner Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                {project.icon}
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-80">
                                {project.category}
                            </span>
                        </div>
                        
                        <div className="flex items-end justify-between gap-4">
                          <h3 className="text-2xl font-bold font-sans leading-tight transition-transform duration-300 group-hover:translate-x-2">
                            {project.title}
                          </h3>
                          
                          <Link 
                            to={`/project/${project.id}`} 
                            className="bg-white/10 hover:bg-primary border border-white/20 hover:border-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                          >
                            <ArrowRight size={20} className="text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button */}
            {visibleProjects < filteredProjects.length && (
              <div className="mt-20 flex justify-center">
                <button 
                  onClick={loadMore}
                  className="bg-white border border-gray-200 text-text-main hover:bg-primary hover:text-white hover:border-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 flex items-center gap-3 group shadow-sm"
                >
                  Load More Projects
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
