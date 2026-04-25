import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import content from '../../data/content';

const Services = () => {
  const servicesData = content.services.main.map((srv, idx) => ({
    num: `0${idx + 1}`,
    title: srv.title,
    desc: srv.description,
    image: idx === 0 
      ? '/assets/projects/pentagon-47.jpg' 
      : idx === 1 
      ? '/assets/projects/pentagon-48.jpg'
      : '/assets/projects/pentagon-49.jpg',
    details: content.services.rooms.map(room => room.title),
    icon: idx === 0 ? (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v4M8 6h8M6 8c0 3 2 4 4 4M18 8c0 3-2 4-4 4M12 12v6M9 15h6M7 18h10M12 22v-4" />
      </svg>
    ) : idx === 1 ? (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="10" width="20" height="12" rx="2" />
        <path d="M2 16h20M12 10v12M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M6 16v3M18 16v3" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v20M2 12h20M12 2a10 10 0 0 1 10 10M12 22a10 10 0 0 1-10-10M16.5 7.5L7.5 16.5M7.5 7.5l9 9" />
      </svg>
    )
  }));

  return (
    <section className="py-10 md:py-24 bg-primary text-white relative font-text overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Block */}
        <div className="text-center mb-16 relative z-20">
          <div className="border border-white/20 rounded-full py-1.5 px-3 w-max flex items-center gap-2 mb-6 mx-auto">
            <X size={12} strokeWidth={3} className="text-white" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-white font-sans">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold font-sans mb-4 tracking-tight">{content.services.title}</h2>
          <p className="text-white/60 font-text text-[15px] lg:text-base">From concept to completion, we've got you covered in {content.brand.location}.</p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="relative w-full max-w-[1200px] mx-auto border-t border-white/20 mt-20">
          
          {/* Continuous Vertical Lines backdrop matching screenshot grid layout */}
          <div className="absolute top-0 bottom-0 left-[60px] md:left-[100px] w-px bg-white/20 z-0"></div>
          {/* Right vertical line hidden on smaller screens */}
          <div className="absolute top-0 bottom-0 right-[80px] lg:right-[150px] w-px bg-white/20 z-0 hidden md:block"></div>

          <div className="relative z-10 w-full relative">
            {servicesData.map((srv, idx) => (
              <div 
                key={idx}
                className="group relative w-full min-h-[120px] lg:h-[160px] py-4 lg:py-0 flex items-stretch border-b border-white/20 hover:border-white transition-colors duration-500 cursor-pointer"
              >
                {/* Hover Top Border line override to fake both active borders */}
                <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Col 1: Number */}
                <div className="w-[60px] md:w-[100px] flex justify-start items-center shrink-0 pl-1 mr-2 md:mr-0 z-10">
                  <span className="text-3xl lg:text-[34px] font-bold font-sans text-white">{srv.num}</span>
                </div>

                {/* Col 2: Icon Block with dynamic diagonal split line */}
                <div className="w-[100px] lg:w-[180px] relative flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-[1.01] transition-transform z-10">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
                    <svg className="w-full h-full text-white/20 group-hover:text-white transition-colors duration-500" preserveAspectRatio="none">
                      <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="w-[60px] h-[60px] lg:w-[74px] lg:h-[74px] rounded-full border border-white/20 bg-primary-dark group-hover:bg-white flex items-center justify-center z-10 transition-colors duration-500 shadow-sm relative shadow-black/20">
                    <div className="text-white group-hover:text-primary-dark transition-colors duration-500">
                      {srv.icon}
                    </div>
                  </div>
                </div>

                {/* Col 3: Title & Internal Popout Card */}
                <div className="flex-1 flex items-center pl-6 lg:pl-12 relative z-10">
                  <h3 className="text-md md:text-2xl lg:text-[26px] md:font-bold font-sans text-white tracking-wide">{srv.title}</h3>

                  {/* Absolute Popup Card that appears on right side */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-[100] w-[340px] h-[360px] rounded-[1.5rem] overflow-hidden opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-500 origin-center hidden lg:block mr-8 pointer-events-none">
                    <img 
                      src={srv.image} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      alt={srv.title} 
                      loading="lazy"
                    />
                    {/* Glassmorphism Inner Card Overlay */}
                    <div className="absolute inset-3 rounded-[1.2rem] bg-gradient-to-br from-primary/65 to-primary/50 backdrop-blur-xs p-7 flex flex-col justify-center border border-white/10">
                      <p className="text-white/80 text-[14px] leading-relaxed mb-6 font-text">
                        {srv.desc}
                      </p>
                      <ul className="space-y-3.5 mt-auto">
                        {srv.details.map((detail, dIdx) => (
                           <li key={dIdx} className="flex items-center gap-3 text-white/90 text-[14px]">
                             <svg className="w-[18px] h-[18px] text-white shrink-0" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                             {detail}
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Col 4: Arrow CTA Button */}
                <div className="w-[60px] md:w-auto lg:w-[150px] shrink-0 flex items-center justify-end md:justify-center relative z-10 w-full pr-2 md:pr-0">
                  <button 
                    aria-label="View Service Details"
                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-white/20 bg-transparent flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 hover:scale-105 active:scale-95"
                  >
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-primary-dark transition-colors duration-500" />
                  </button>
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
