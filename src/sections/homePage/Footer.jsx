import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src="https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/logo-2.png" alt="Decoria" className="h-10 brightness-0 invert" />
            <p className="text-white/70">
              Transforming spaces through thoughtful design and innovative layout solutions for global living.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white rounded-sm" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-sans">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Our Projects', 'Pricing Plans', 'Contact'].map(link => (
                <li key={link}><a href="#" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2"><ChevronRight size={14}/> {link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-sans">Contact Info</h4>
            <ul className="space-y-4 text-white/70">
              <li>123 Design Avenue, Suite 456<br/>Sydney, Australia 2000</li>
              <li>info@decoria.steelthemes.com</li>
              <li className="text-xl font-bold text-white">+61 (0) 2 9123 4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-sans">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for latest updates and design tips.</p>
            <form className="relative">
              <input type="email" placeholder="Your Email Address" className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-accent text-white" />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-accent hover:bg-white hover:text-primary text-primary w-12 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Decoria by Steelthemes. Recreated.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
