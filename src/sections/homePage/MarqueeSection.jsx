import React from 'react';

const marqItems = [
  { text: "Quality Assured", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80" },
  { text: "Budget Friendly", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { text: "Timeless Elegance", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" },
  { text: "Modern Aesthetics", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
];

const MarqueeSection = () => {
  // We mirror the array twice to allow smooth 50% translation infinite loop
  const displayItems = [...marqItems, ...marqItems];

  return (
    <section className="py-0 bg-white overflow-hidden relative flex items-center group cursor-pointer selection:bg-transparent">

      {/* Dashed Frame Overlay */}
      <div className="absolute inset-4 big-dash-box-black  pointer-events-none z-30"></div>

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border border-primary/30 z-30"></div>
      <div className="absolute top-3 right-3 w-3 h-3 border border-primary/30 z-30"></div>
      <div className="absolute bottom-3 left-3 w-3 h-3 border border-primary/30 z-30"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 border border-primary/30 z-30"></div>

      {/* Container for Infinite Scroll - We pause on hovering the section */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] relative z-20">

        {displayItems.map((item, i) => (
          <div key={i} className="group/item relative flex items-center shrink-0 px-8">

            <span
              className="text-[50px] md:text-[80px] lg:text-[130px] font-sans font-black uppercase transition-all duration-300 text-transparent group-hover/item:text-primary/10"
              style={{ WebkitTextStroke: '2px #d8d0cbff', paddingBottom: '10px' }}
            >
              {item.text}
            </span>

            {/* The Separator Star */}
            <svg className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-6 md:mx-10 text-primary/30 group-hover/item:text-primary/10 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 7.52285 16.4772 12 22 12C16.4772 12 12 16.4772 12 22C12 16.4772 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z" />
            </svg>

            {/* Center Floating Pop-up Card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[100px] md:w-[240px] md:h-[140px] lg:w-[320px] lg:h-[180px] rounded-[4rem] md:rounded-[6rem] lg:rounded-[8rem] overflow-hidden opacity-0 scale-[0.3] group-hover/item:opacity-100 group-hover/item:scale-100 z-50 pointer-events-none transition-all duration-500 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[5px] border-white">
              <img src={item.img} alt={item.text} className="w-full h-full object-cover" />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default MarqueeSection;
