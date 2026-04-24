import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Star } from 'lucide-react';
import content from '../../data/content';

const About = () => {
  return (
    <section className="py-10 md:py-24 bg-white relative overflow-hidden font-text">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-8 justify-between items-center lg:items-stretch">

          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-[32%] mx-auto lg:mx-0 relative flex flex-col"
          >
            {/* Folder Tab / Flap on the right */}
            <div className="hidden lg:flex absolute top-20 bottom-20 -right-12 w-12 border-y border-r border-gray-300 rounded-r-3xl z-0 items-center justify-center">
              <div className="rotate-90 whitespace-nowrap text-[10px] font-bold tracking-widest text-gray-500 font-sans uppercase flex items-center gap-3">
                <div className="w-6 h-px bg-gray-300"></div>
                Projects Across 20 Cities
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
            </div>

            {/* Main Left Card Wrapper */}
            <div className="border border-gray-300 rounded-t-[3rem] rounded-b-[15rem] bg-white relative z-10 flex flex-col items-center pt-14 overflow-hidden h-[480px] sm:h-[550px] w-full max-w-[400px] mx-auto lg:max-w-none">

              {/* Top content */}
              <div className="z-20 flex flex-col items-center text-center px-10 relative bg-white">
                {/* Custom SVG Icon */}
                <svg viewBox="0 0 64 64" fill="none" stroke="#2a2d2a" strokeWidth="1.5" className="w-20 h-20 mb-6">
                  {/* Ceiling bar */}
                  <line x1="16" y1="12" x2="48" y2="12" strokeWidth="2" strokeLinecap="round" />
                  {/* Left Lamp */}
                  <line x1="22" y1="12" x2="22" y2="20" />
                  <path d="M17 26 22 20 27 26" fill="#f3f4f6" />
                  <path d="M17 26 Q22 30 27 26 Z" />
                  {/* Right Lamp */}
                  <line x1="42" y1="12" x2="42" y2="20" />
                  <path d="M37 26 42 20 47 26" fill="#f3f4f6" />
                  <path d="M37 26 Q42 30 47 26 Z" />
                  {/* Center Large Lamp */}
                  <line x1="32" y1="12" x2="32" y2="24" />
                  <path d="M24 34 32 24 40 34" fill="#f3f4f6" />
                  <path d="M24 34 Q32 38 40 34 Z" />
                  {/* Center Bulb */}
                  <path d="M30 36v1a2 2 0 004 0v-1" />
                  {/* Glow lines */}
                  <line x1="32" y1="42" x2="32" y2="45" strokeLinecap="round" />
                  <line x1="26" y1="40" x2="24" y2="42" strokeLinecap="round" />
                  <line x1="38" y1="40" x2="40" y2="42" strokeLinecap="round" />
                </svg>

                <h2 className="text-[17px] font-bold text-text-main font-sans leading-snug">
                  Years of Interior & Architectural<br />Brilliance
                </h2>
              </div>

              {/* Giant Stroke 13 */}
              <div
                className="text-[140px] sm:text-[200px] leading-[0.8] font-bold text-white z-20 mt-2 relative font-sans tracking-tighter mix-blend-normal"
                style={{ WebkitTextStroke: '2px #2a2d2a' }}
              >
                13
              </div>

              {/* Background Image (Lower Half) */}
              <div className="absolute bottom-0 left-0 right-0 h-[45%] z-10 w-full overflow-hidden bg-gray-100">
                <img
                  src="https://decoria.steelthemes.com/demo/wp-content/uploads/2025/10/decoria-home-1-slider-1-1-min.jpg"
                  alt="Architect at work"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

            </div>

            {/* Optional decorative circle base */}
            <div className="absolute -bottom-8 -left-8 w-12 h-12 border border-gray-200 rounded-full z-0 hidden lg:block"></div>
          </motion.div>


          {/* ================= MIDDLE COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-[40%] flex flex-col justify-center py-4 lg:pl-10"
          >
            {/* Small Badge */}
            <div className="border border-gray-200 rounded-full py-1.5 px-3 w-max flex items-center gap-2 mb-6">
              <X size={12} strokeWidth={3} className="text-gray-800" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800 font-sans">ABOUT US</span>
            </div>

            <h2 className="text-4xl lg:text-[44px] font-sans font-bold leading-[1.1] text-[#2a2d2a] mb-6">
              {content.about.title}
            </h2>

            <h3 className="text-xl font-bold text-[#2a2d2a] mb-4 font-sans">
              Mission & Purpose
            </h3>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[90%]">
              {content.about.description}
            </p>

            <ul className="space-y-4 mb-10">
              {content.about.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0 text-text-main">
                    {/* Dotted line ending in an arrow */}
                    <path d="M4 12h1M8 12h1M12 12h8M16 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[15px]"><span className="font-bold text-primary">{item.title}:</span> {item.description}</span>
                </li>
              ))}
            </ul>

            {/* Pill Button */}
            <a href="#" className="inline-flex items-center rounded-[3rem] border border-gray-400 p-1.5 w-fit hover:border-sidebar-primary transition-colors group">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-gray-300 flex items-center justify-center text-text-main mr-2 group-hover:border-primary group-hover:text-primary transition-colors">
                <ArrowRight size={18} />
              </div>
              <div className="bg-primary text-white font-sans font-bold text-[13px] tracking-wide px-6 h-10 rounded-[3rem] flex items-center justify-center group-hover:bg-primary transition-colors">
                More About Us
              </div>
            </a>
          </motion.div>


          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-[28%] max-w-[400px] mx-auto lg:max-w-none flex flex-col items-center relative mt-12 lg:mt-0"
          >
            {/* The Background Dark Box */}
            <div className="bg-primary rounded-t-[2.5rem] rounded-b-[15rem] w-full relative overflow-hidden h-[400px] sm:h-[450px] flex flex-col items-center text-center shadow-md pt-12 pb-8">
              {/* Internal Image layer */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/90 z-10"></div>

              <div className="relative z-20 flex flex-col items-center h-full w-full">
                <h4 className="text-white font-bold text-[18px] mb-6 leading-snug font-sans tracking-wide">
                  Trusted Interior<br className="hidden lg:block" />Design Firm'25
                </h4>

                <div className="mb-5 mt-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
                    {/* Trophy Star */}
                    <path d="M12 15l-3.5 2 1-4-3-2.5 4-.5L12 6l1.5 4 4 .5-3 2.5 1 4-3.5-2z" strokeWidth="1.5" />
                    {/* Base */}
                    <path d="M10 17v3h4v-3M8 21h8" strokeWidth="2" />
                    {/* Spikes / Sparkles */}
                    <path d="M5 9h2M17 9h2M7 5l1.5 1.5M17 5l-1.5 1.5" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Avatar Group */}
                <div className="flex items-center justify-center -space-x-4 mb-2 relative">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" alt="Reviewer" className="w-[66px] h-[66px] rounded-full border-[3px] border-white object-cover" loading="lazy" />
                  <div className="w-[76px] h-[76px] rounded-full border-[3px] border-white bg-primary text-white flex items-center justify-center font-bold text-[22px] z-10 font-sans shadow-md">
                    4.5
                  </div>
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Reviewer" className="w-[66px] h-[66px] rounded-full border-[3px] border-white object-cover z-0" loading="lazy" />
                </div>

              </div>
            </div>

            {/* Floating Review Pill */}
            <div className="absolute bottom-10 md:bottom-45 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-[0_10px_40px_rgb(0,0,0,0.27)] py-2.5 px-6 flex items-center gap-4 z-40 border border-gray-100 whitespace-nowrap w-max">
              <div className="flex items-center gap-2">
                <Star className="text-[#fbbc05] fill-[#fbbc05]" size={22} />
                <span className="font-bold text-[16px] text-[#0f172a] font-sans tracking-tight">Excellent</span>
              </div>
              <div className="h-6 w-[1px] bg-gray-200"></div>
              <span className="text-gray-500 text-[15px]">7.8k Users</span>
              <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center ml-1">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
