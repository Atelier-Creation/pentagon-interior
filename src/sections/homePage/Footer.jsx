import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white overflow-hidden pt-8 md:pt-24 pb-12">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans uppercase tracking-tight">Need Help?</h2>
            <p className="text-white/80">
              Send Mail us at{" "}
              <span className="underline font-semibold">
                pentagondesignfactory@gmail.com
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 font-sans">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Get exclusive offers and news delivered monthly.
            </p>

            <div className="flex items-center bg-white/10 rounded-xl px-4 py-3">
              <FaEnvelope className="text-white/80 mr-3" />
              <input
                placeholder="Your email address"
                className="bg-transparent outline-none flex-1 text-white placeholder:text-white/50"
              />
              <button className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/90 transition-all shrink-0 shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Instagram', 'Facebook', 'TwitterX'].map((social) => (
              <button key={social} className="px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white hover:text-primary transition-all text-xs font-bold uppercase tracking-widest">
                {social}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 font-sans">Essentials</h3>
          <ul className="space-y-3 text-white/60">
            {['Our Story', 'How We Work', 'Services & Solutions', 'Case Studies', 'Client Testimonials', 'FAQs & Help', 'Blog & Insights'].map((item) => (
              <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 font-sans">Quick Links</h3>
          <ul className="space-y-3 text-white/60 mb-10">
            {['Explore Our Work', 'Start Your Project', 'Meet the Team', 'Read Our Insights', 'Request a Quote', 'Let’s Connect'].map((item) => (
              <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-white/60 text-sm">Just Mail Us:</p>
              <p className="font-semibold">272/A,VOC Nagar,Ramanadhapuram Coimbatore-045</p>
            </div>

            <div>
              <p className="text-white/60 text-sm">Phone</p>
              <p className="font-semibold">9176828870</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden py-4 border-y border-white/5">
        <div className="absolute inset-4 big-dash-box pointer-events-none"></div>

        <div className="absolute top-3 left-3 w-3 h-3 border border-white/30"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border border-white/30"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border border-white/30"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border border-white/30"></div>

        <div className="whitespace-nowrap animate-marquee text-[60px] md:text-[120px] lg:text-[160px] font-bold tracking-wide text-transparent stroke-text opacity-15">
          Reliable ✦ Quality Assured ✦ Budget Friendly ✦ Reliable ✦ Quality Assured ✦ Budget Friendly ✦
        </div>
      </div>

      <div className="relative z-10 text-center mt-12 text-white/60 text-sm px-8">
        <p>Copyrights © {new Date().getFullYear()} Pentagon Constructions & Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
