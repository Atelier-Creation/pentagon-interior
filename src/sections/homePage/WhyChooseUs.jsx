import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import signImg from '../../assets/sign.png';
import lampImg from '../../assets/lamp.png';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Designers',
      desc: 'Skilled professionals crafting unique, functional, and stylish spaces.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 14c-4.418 0-8 3.134-8 7h16c0-3.866-3.582-7-8-7z" />
          <path d="M12 3c-2.761 0-5 2.239-5 5 0 2.228 1.455 4.116 3.463 4.79C10.957 12.923 11.464 13 12 13s1.043-.077 1.537-.21C15.545 12.116 17 10.228 17 8c0-2.761-2.239-5-5-5z" />
          <path d="M8.5 4h7" />
          <path d="M10 2h4" />
        </svg>
      )
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear, upfront costs with absolutely no hidden charges or surprises.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="12" cy="10" r="7" />
          <path d="M8 15l-2 7 6-3 6 3-2-7" />
          <path d="M12 7v6M10 10h4" />
        </svg>
      )
    },
    {
      title: 'Quality Materials',
      desc: 'We use durable, premium materials for lasting beauty and comfort.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <line x1="8" y1="14" x2="8" y2="16" />
          <line x1="16" y1="14" x2="16" y2="16" />
        </svg>
      )
    },
    {
      title: 'On-Time Delivery',
      desc: 'Projects completed on schedule without compromising quality.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="12" cy="12" r="7" />
          <polyline points="12 8 12 12 15 15" />
          <path d="M4 20h16" />
          <path d="M22 17c-2 2-6 3-10 3s-8-1-10-3" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative font-text overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
         
         {/* HEADER AREA */}
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 justify-between items-start lg:items-end">
           <div className="lg:w-2/3">
             <div className="border border-gray-200 rounded-full py-1.5 px-3 w-max flex items-center gap-2 mb-6">
                <X size={12} strokeWidth={3} className="text-gray-800" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 font-sans">WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-sans font-bold leading-[1.1] text-[#2a2d2a] tracking-tight">
                Discover the Difference We Can Make
              </h2>
           </div>
           <div className="lg:w-[45%] pb-2">
             <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
               Simple and easy to distinguish in a free hour, when our all power choices is untrammelled when no thing reject being able to do what we like best, every pleasures is to be welcomed every avoided.
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
              {/* Lamp Image */}
              <img src={lampImg} alt="Pendant Lamp Diagram" className="absolute top-0 w-auto h-full object-contain z-10 drop-shadow-xl" />
              
              {/* Circular Text Badge placed directly on the cord */}
              <div className="absolute top-[30%] lg:top-[1%] left-1/2 -translate-x-1/2 z-20 w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
                  <path id="chooseUsPath" d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0" fill="transparent" />
                  <text className="text-[12px] font-bold tracking-[0.16em] uppercase fill-[#2a2d2a] font-sans text-shadow-sm">
                    <textPath href="#chooseUsPath" startOffset="0%">CREATIVE DESIGN SOLUTIONS • TIMELESS INTERIOR ELEGANCE •</textPath>
                  </text>
                </svg>
                {/* Center Dark Base underneath the text ring */}
                <div className="w-[66px] h-[66px] bg-primary rounded-full flex items-center justify-center relative z-10 shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                    <circle cx="12" cy="7" r="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* MIDDLE COLUMN: Architecture Arch Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[35%] flex justify-center"
            >
              <div className="w-full max-w-[340px] md:max-w-[380px] h-[520px] rounded-t-[2.5rem] rounded-b-[15rem] border border-gray-300 overflow-hidden flex flex-col bg-white shadow-sm">
                
                {/* Top Info section */}
                <div className="flex flex-col justify-center px-10 pt-10 pb-6 relative z-10 bg-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2a2d2a" strokeWidth="1.2" className="w-12 h-12 mb-3">
                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                     <polyline points="3.29 7 12 12 20.71 7" />
                     <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                  <div className="text-[52px] font-sans font-bold text-gray-500 font-light leading-none mb-1">
                    20<span className="text-gray-400 font-medium">+</span>
                  </div>
                  <div className="text-[17px] font-bold text-[#2a2d2a] font-sans tracking-tight">
                    Design Styles Covered
                  </div>
                </div>
                
                {/* Bottom Image matching arch */}
                <div className="flex-1 w-full relative">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Interior Styles" className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Feature List & Signature */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%] flex flex-col justify-center py-4 lg:pl-6"
            >
               <div className="flex flex-col gap-9">
                 {features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-6 group">
                     
                     {/* Circular Icon Container with hidden faint diagonal CSS background line */}
                     <div className="relative w-[56px] h-[56px] shrink-0 flex items-center justify-center">
                       {/* Abstract square behind circle providing diagonal slash */}
                       <div className="absolute inset-[-4px] border border-gray-100/50 rounded-xl overflow-hidden z-0">
                         <svg className="w-full h-full text-gray-200" preserveAspectRatio="none">
                           <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="1" />
                         </svg>
                       </div>
                       {/* Core circle mask */}
                       <div className="w-[56px] h-[56px] rounded-full bg-[#f0f4f1] border border-gray-200 relative z-10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                          {feature.icon}
                       </div>
                     </div>

                     {/* Text Body */}
                     <div className="pt-1">
                       <h4 className="text-[18px] font-bold font-sans text-[#2a2d2a] mb-1.5 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h4>
                       <p className="text-gray-500 text-[14px] leading-relaxed max-w-[92%]">{feature.desc}</p>
                     </div>
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
