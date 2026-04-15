import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, ArrowRight, Menu, X } from 'lucide-react';
import logo from '../../assets/logo-2.png';
import { Link } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          {/* <img src="https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/logo-2.png" alt="Decoria" className="h-8 md:h-10" style={{ filter: isScrolled ? 'brightness(0) invert(1)' : 'brightness(0) invert(1)' }} /> */}
          <img src={logo} alt="Decoria" className="h-8 md:h-12" style={{ filter: isScrolled ? 'brightness(0) invert(1)' : 'brightness(0) invert(1)' }} />
        </a>
        
        <nav className="hidden lg:flex items-center space-x-8 text-white font-medium">
          <Link to="/" className="hover:text-accent transition-colors">
  Home
</Link>
  <Link to="/about" className="hover:text-accent transition-colors">
    About
  </Link>
          <a href="#" className="hover:text-accent transition-colors">Pages</a>
          <a href="#" className="hover:text-accent transition-colors">Services</a>
          <a href="#" className="hover:text-accent transition-colors">Projects</a>
          <a href="#" className="hover:text-accent transition-colors">Blog</a>
         <Link to="/contact" className="hover:text-accent transition-colors">
  Contact
</Link>

        </nav>

        <div className="hidden lg:flex items-center space-x-6 text-white">
          <button className="hover:text-accent transition-colors"><Search size={20} /></button>
          <div className="relative">
            <button className="hover:text-accent transition-colors"><ShoppingCart size={20} /></button>
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <a href="#" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-2 px-6 backdrop-blur-sm transition-all flex items-center gap-2">
            Get A Quote <ArrowRight size={16} />
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <img src="https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/logo-2.png" alt="Decoria" className="h-8 brightness-0 invert" />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={32} /></button>
          </div>
          <nav className="flex flex-col space-y-6 text-white text-2xl font-sans">
           <Link to="/" className="hover:text-accent">Home</Link>
            <Link to="/about" className="hover:text-accent">
    About
  </Link>
            <a href="#" className="hover:text-accent">Pages</a>
            <a href="#" className="hover:text-accent">Services</a>
            <a href="#" className="hover:text-accent">Projects</a>
            <Link to="/contact" className="hover:text-accent">
  Contact
</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
