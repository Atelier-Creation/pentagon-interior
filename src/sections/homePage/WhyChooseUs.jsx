import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Star, ShieldCheck, Clock, Users, Award } from 'lucide-react';
import signImg from '../../assets/sign.png';
import lampImg from '../../assets/lamp.png';
import content from '../../data/content';

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-24 bg-[#2a2d2a] relative font-text overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
         
         {/* HEADER AREA */}
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 justify-between items-start lg:items-end">
           <div className="lg:w-2/3">
             <div className="border border-white/20 rounded-full py-1.5 px-3 w-max flex items-center gap-2 mb-6">
                <X size={12} strokeWidth={3} className="text-white" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white font-sans">WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold font-sans mb-8 tracking-tight text-white leading-tight">
                {content.whyChooseUs.title}
              </h2>
           </div>
           <div className="lg:w-[45%] pb-2">
             <p className="text-white/70 text-lg md:text-xl font-text leading-relaxed mb-10 max-w-xl">
               {content.whyChooseUs.description}
             </p>
           </div>
         </div>

         {/* CONTENT AREA */}
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mt-16">
            
            {/* LEFT COLUMN: The Lamp */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[25%] relative flex flex-col items-center justify-center h-[520px] hidden md:flex"
            >
              <img src={lampImg} alt="Pendant Lamp Diagram" className="absolute top-0 w-auto h-full object-contain z-10 drop-shadow-xl" />
              
              <div className="absolute top-[30%] lg:top-[1%] left-1/2 -translate-x-1/2 z-20 w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
                  <path id="chooseUsPath" d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0" fill="transparent" />
                  <text className="text-[12px] font-bold tracking-[0.16em] uppercase fill-white font-sans text-shadow-sm">
                    <textPath href="#chooseUsPath" startOffset="0%">CREATIVE DESIGN SOLUTIONS • TIMELESS INTERIOR ELEGANCE •</textPath>
                  </text>
                </svg>
                <div className="w-[66px] h-[66px] bg-accent rounded-full flex items-center justify-center relative z-10 shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                    <circle cx="12" cy="7" r="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* MIDDLE COLUMN: Values Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[75%]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-12">
                {content.whyChooseUs.values.map((val, i) => (
                  <div key={i} className="flex flex-col gap-3 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        {i === 0 ? <Award className="text-white w-6 h-6" /> : i === 1 ? <ShieldCheck className="text-white w-6 h-6" /> : i === 2 ? <Clock className="text-white w-6 h-6" /> : <Users className="text-white w-6 h-6" />}
                      </div>
                      <h3 className="text-xl font-bold font-sans text-white">{val}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed pl-16">
                      {i === 0 ? "Premium quality across every layer of design and construction." : i === 1 ? "Craftsmanship that withstands the test of time." : i === 2 ? "Efficient delivery within 6 months." : "Personalized approach for every elite client."}
                    </p>
                  </div>
                ))}
              </div>

               {/* Bottom Signature Endorsement */}
               <div className="mt-10 flex items-center gap-6 border-t border-gray-200 pt-7 w-[90%]">
                 <div className="w-[110px] shrink-0 opacity-80">
                   <img src={signImg} alt="Signature" className="w-full object-contain" />
                 </div>
                 <div>
                   <h5 className="text-[15px] font-bold text-[#2a2d2a] font-sans">Ilam Bharathi,</h5>
                   <p className="text-gray-400 text-[13.5px]">Founder & Lead Designer</p>
                 </div>
               </div>
            </motion.div>

         </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
