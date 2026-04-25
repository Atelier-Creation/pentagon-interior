import React from 'react';
import Header from './sections/homePage/Header';
import Footer from './sections/homePage/Footer';
import { motion } from 'framer-motion';
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Calendar, User, MapPin, Maximize, Clock, Tag, Share2, Download } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import content from "./data/content";

import { Helmet } from 'react-helmet-async';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = content.projectDetails[id] || content.projectDetails.default;

  return (
    <div className="font-text text-text-main selection:bg-primary selection:text-white overflow-hidden">
      <Helmet>
        <title>{`${project.title} | Projects | Pentagon Interior`}</title>
        <meta name="description" content={`Case study: ${project.title}. A ${project.category} project by Pentagon Interior. ${project.description.substring(0, 150)}...`} />
        <link rel="canonical" href={`https://pentagoninteriors.in/project/${id}`} />
      </Helmet>
      <Header />
      
      <main>
        {/* 🔹 HERO SECTION */}
        <section className="relative h-[260px] md:h-[450px] flex items-center justify-center text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('${project.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative text-center z-10 pt-10 md:pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-7xl font-bold font-sans tracking-tight mb-6"
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center gap-3 text-white/70 text-sm font-medium tracking-widest uppercase"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-primary">•</span>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <span className="text-primary">•</span>
              <span className="text-white">{project.title}</span>
            </motion.div>
          </div>
        </section>

        {/* 🔹 PROJECT INFO GRID */}
        <section className="py-10 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8f8f8] rounded-[2rem] p-6 md:p-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">Client</span>
                    <span className="block text-lg font-bold font-sans">{project.client}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">Date</span>
                    <span className="block text-lg font-bold font-sans">{project.date}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Maximize size={24} />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">Area</span>
                    <span className="block text-lg font-bold font-sans">{project.area}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Tag size={24} />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">Category</span>
                    <span className="block text-lg font-bold font-sans">{project.category}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">Location</span>
                    <span className="block text-lg font-bold font-sans">{project.location}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">Duration</span>
                    <span className="block text-lg font-bold font-sans">{project.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 🔹 OVERVIEW SECTION */}
        <section className="py-8 md:py-14 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold font-sans mb-10 tracking-tight">Project Overview</h2>
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed text-gray-600 font-medium">
                    {project.description}
                  </p>
                  <p className="text-[16px] leading-[1.8] text-gray-500">
                    {project.overview}
                  </p>
                </div>

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center gap-10">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Share This:</span>
                    <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <FaFacebookF size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <FaTwitter size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <FaInstagram size={18} />
                      </button>
                    </div>
                  </div>

                  <button className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs hover:text-text-main transition-colors duration-300 group">
                    <Download size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
                    Download Project Factbook
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#fff9f5] border border-gray-100 rounded-[3rem] p-10 md:p-14"
              >
                <h3 className="text-3xl font-bold font-sans mb-12 tracking-tight">Key Highlights</h3>
                <div className="space-y-8">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary font-bold shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        0{i+1}
                      </div>
                      <p className="flex-1 text-[16px] text-gray-500 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 🔹 GALLERY SECTION */}
        <section className="py-10 bg-[#fffbf3]">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 5000 }}
                loop={project.gallery.length > 2}
                className="rounded-[2rem] overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[750px]"
              >
                {project.gallery.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </section>

        {/* 🔹 RELATED PROJECTS */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[11px] block mb-4">Discover More</span>
                <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">Our Exceptional Portfolios</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/projects" className="flex items-center gap-3 bg-gray-50 hover:bg-primary text-text-main hover:text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 group">
                  All Projects
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {content.projects.featured.filter(p => p.id !== parseInt(id)).slice(0, 3).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={`/project/${item.id}`} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute inset-x-8 bottom-8 p-1 flex flex-col justify-end text-white">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-70">{item.category}</span>
                        <h4 className="text-xl md:text-2xl font-bold font-sans group-hover:-translate-y-2 transition-transform duration-300">{item.title}</h4>
                        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[10px] font-bold uppercase tracking-widest">View Case Study</span>
                          <ArrowRight size={14} />
                        </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
