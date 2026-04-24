import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slidesData from '../../data/heroData.json';
import content from '../../data/content';

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1200}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        className="hero-swiper h-full w-full"
      >
        {slidesData.map((slide, i) => (
          <SwiperSlide key={i} className="flex items-center">
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(75, 36, 36, 0.5), rgba(70, 42, 42, 0.5)), url('${slide.bgImage}')` }}
            ></div>

            <div className="container-fluid w-full max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10 pt-32 h-full flex items-center">
              <div className="flex flex-col md:flex-row w-full gap-12 lg:gap-24 items-center">

                {/* Left Area */}
                <div className="md:w-[65%] text-white flex-shrink-0">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-white font-sans font-bold leading-[1.05] tracking-tight mb-8 sm:mb-16 relative w-fit mt-8 sm:mt-0"
                  >
                    {slide.line1} <br /> {slide.line2} <br />
                    <span className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 mt-2">
                      {slide.focus}
                      <span className="text-[13px] md:text-sm font-sans font-bold tracking-wide flex items-center gap-4 lg:gap-6 lg:pt-8 w-max">
                        {slide.subText}
                        <span className="relative flex items-center flex-shrink-0">
                          <span className="w-12 md:w-24 h-px bg-white"></span>
                          <span className="w-2 h-2 border-t border-r border-white rotate-45 transform -translate-x-[2px] absolute right-0"></span>
                        </span>
                      </span>
                    </span>
                  </motion.h1>

                  {/* Legacy Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex sm:inline-flex items-center border border-white/20 rounded-[2rem] sm:rounded-[4rem] px-6 sm:pr-16 sm:pl-6 py-4 sm:py-5 backdrop-blur-sm bg-black/10 flex-col sm:flex-row text-center sm:text-left w-full sm:w-auto"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 relative sm:mr-8 flex-shrink-0 mb-2 sm:mb-0">
                      {/* Rotating text SVG */}
                      <svg viewBox="0 0 100 100" className="w-full h-full text-white uppercase tracking-[0.1em] font-sans font-bold animate-[spin_12s_linear_infinite]">
                        <path id={`textPath-legacy-${i}`} d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"></path>
                        <text className="text-[7.7px] fill-current">
                          <textPath href={`#textPath-legacy-${i}`} startOffset="0%">{content.brand.name} - </textPath>
                        </text>
                      </svg>
                      {/* inner Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src="/fav-logo.png" alt="Pentagon Construction & Interiors" className='w-10 h-10 brightness-0 invert' />
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-2xl sm:text-[2rem] font-bold font-sans mb-1">1500 +</div>
                      <div className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans font-medium tracking-wide">
                        Unique Spaces Designed<br />and Counting
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Area */}
                <div className="md:w-[35%] flex flex-col justify-end h-full pt-8 md:pt-16 pb-12 md:pb-0 items-center md:items-start text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-[400px] mb-12"
                  >
                    <p className="text-white/80 text-[15px] md:text-base leading-relaxed font-text">
                      {slide.description}
                    </p>
                  </motion.div>
                  {/* Appointment Button */}
                  <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center rounded-[3rem] border border-white/40 p-1 w-fit transition-colors group bg-black/20 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1B1B1B] flex items-center justify-center text-white mr-3 flex-shrink-0 group-hover:bg-primary transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="bg-white text-accent font-sans font-bold uppercase text-xs tracking-[0.1em] px-8 h-12 rounded-[3rem] flex items-center justify-center group-hover:text-primary transition-colors">
                      Appointment
                    </div>
                  </motion.a>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Vertically Right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8">
          <div
            ref={prevRef}
            className="swiper-button-prev !static !w-auto !h-auto !mt-0  transition-colors cursor-pointer"
          >
            <ChevronUp size={48} fill='none' className='text-white hover:text-white/50' />
          </div>
          <div
            ref={nextRef}
            className="swiper-button-next !static !w-auto !h-auto !mt-0 hover:text-white/50 transition-colors cursor-pointer"
          >
            <ChevronDown size={48} fill='none' className='text-white hover:text-white/50' />
          </div>
        </div>

        {/* Hidden pagination */}
        <div className="swiper-pagination !hidden"></div>
      </Swiper>
    </section>
  );
};

export default Hero;
