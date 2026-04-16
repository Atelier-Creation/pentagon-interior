import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-bg-lightest">
      <div className="absolute inset-0 bg-[url('https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/pattern-dot-1-1.png')] bg-center bg-cover opacity-5 pointer-events-none"></div>
      <div className="container relative mx-auto px-4 max-w-4xl text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-text-main mb-12">Client Feedback</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          className="pb-16"
        >
          {[1, 2].map((i) => (
            <SwiperSlide key={i}>
              <div className="text-center px-4">
                <p className="text-2xl md:text-3xl text-text-main font-medium italic mb-8 leading-relaxed">
                  "Decoria transformed our outdated living room into a masterclass of modern elegance. Their attention to detail and understanding of our subtle needs was exceptional. Could not recommend highly enough."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                    <img src={`https://decoria.steelthemes.com/demo/wp-content/uploads/2026/01/client-${i}.jpg`} alt="Client" className="w-full h-full object-cover" onError={(e) => {e.target.src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"}}/>
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-text-main">Sarah Jenkins</h5>
                    <span className="text-sm text-text-muted">Homeowner, Sydney</span>
                  </div>
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
