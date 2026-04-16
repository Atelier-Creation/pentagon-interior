import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white overflow-hidden pt-24 pb-16">
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-4 font-sans">Need Help?</h2>
            <p className="text-white/80">
              Send Mail us at{" "}
              <span className="underline font-semibold">
                info@decoria.com
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
              <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent transition-colors">
                ➤
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'TwitterX'].map((social) => (
              <button key={social} className="px-5 py-2 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white hover:text-primary transition-all text-sm">
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
              <p className="font-semibold">Brimmer St, Boston, MA 02108</p>
            </div>

            <div>
              <p className="text-white/60 text-sm">Phone</p>
              <p className="font-semibold">[+44] 987 65 4321 & 31</p>
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

        <div className="whitespace-nowrap animate-marquee text-[120px] md:text-[160px] font-bold tracking-wide text-transparent stroke-text opacity-15">
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
