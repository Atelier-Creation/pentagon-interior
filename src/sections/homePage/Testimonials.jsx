import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import client1 from '../../assets/client-1.png';
import client2 from '../../assets/client-2.png';
import client3 from '../../assets/client-3.png';
import client4 from '../../assets/client-4.png';
import client5 from '../../assets/client-5.png';
import client6 from '../../assets/client-6.png';
import client7 from '../../assets/client-7.png';
import client8 from '../../assets/client-8.png';

const Testimonials = () => {
  const logos = [client1, client2, client3, client4, client5, client6, client7, client8];

  return (
    <section className="relative py-28 bg-[#fff9f5] font-text overflow-hidden">
      {/* The Background Plus Pattern */}
      <div className="absolute inset-0 bg-[url('https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/pattern-dot-1-1.png')] bg-center bg-cover opacity-[0.15] pointer-events-none"></div>
      
      <div className="container relative mx-auto px-4 z-10 mb-20 flex flex-col items-center text-center">
        {/* BADGE */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-gray-200 bg-white rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-text-main shadow-sm">
            <span className="text-[10px]">✖</span> CORPORATE CLIENTS
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-sans text-text-main mb-6 tracking-tight">
          Trusted by Brands Worldwide
        </h2>

        {/* DESC */}
        <p className="max-w-[600px] text-[16px] text-gray-500 leading-relaxed mx-auto">
          Discover a design style that reflects your personality and transforms your space into something uniquely
        </p>
      </div>

      {/* SWIPER MARQUEE */}
      <div className="relative w-full max-w-[1920px] mx-auto pb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={6000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={-30}
          className="pb-16 pt-16 [&>.swiper-wrapper]:ease-linear px-4 overflow-visible"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="px-2">
                <div className={`
                  relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] 
                  rounded-[2.5rem] sm:rounded-[3.5rem] 
                  border border-gray-300/40  bg-[#fff9f5]
                  flex justify-center items-center
                  transition-all duration-300 group
                  ${i % 2 === 0 ? '-translate-y-6 sm:-translate-y-10' : 'translate-y-6 sm:translate-y-10'}
                `}>
                   {/* Inscribed Circle exactly matching the UI */}
                   <div className="absolute inset-0 m-0 rounded-full border border-gray-300/40 pointer-events-none transition-colors duration-300 group-hover:border-gray-300/80"></div>

                   <img 
                     src={logo} 
                     alt={`Client ${i+1}`} 
                     className="w-20 h-20 sm:w-25 sm:h-25 object-contain opacity-100 grayscale group-hover:grayscale-0  transition-all duration-300 relative z-10"
                   />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
