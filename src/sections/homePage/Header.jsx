import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, ArrowRight, Menu, X } from 'lucide-react';
import logo from '../../assets/logo-2.png';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-6 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            {/* <img src="https://decoria.steelthemes.com/demo/wp-content/uploads/2025/11/logo-2.png" alt="Decoria" className="h-8 md:h-10" style={{ filter: isScrolled ? 'brightness(0) invert(1)' : 'brightness(0) invert(1)' }} /> */}
            <Link to="/"> <img src={logo} alt="Decoria" className="h-12 md:h-12" style={{ filter: isScrolled ? 'brightness(0) invert(1)' : 'brightness(0) invert(1)' }} /></Link>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-white font-medium">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            {/* <a href="#" className="hover:text-accent transition-colors">Pages</a> */}
            <div className="relative group">
              {/* Main Menu Click */}
              <Link
                to="/services"
                className="hover:text-accent transition-colors"
              >
                Services
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 mt-4 w-56 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                to="/services"
                className="block px-4 rounded-lg py-3 hover:bg-primary hover:text-white transition-all duration-300"
              >
               Our Services
              </Link>
                <Link
                  to="/execution-delivery"
                  className="block px-4 rounded-lg py-3 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Execution & Delivery
                </Link>
              </div>
            </div>
            {/* <Link to="/services" className="hover:text-accent transition-colors">
              Services
            </Link> */}
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
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

      </header>

      {/* Mobile Menu - Moved outside header for clean stacking */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-[#8c6d5a] z-[999] flex flex-col p-5 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/"><img src={logo} alt="Decoria" className="h-12 brightness-0 invert" /></Link> 
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:rotate-90 transition-transform duration-300">
                <X size={36} />
              </button>
            </div>

            <nav className="flex flex-col space-y-8 text-white text-3xl font-sans font-bold" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>

            <div className="mt-20 pt-10 border-t border-white/10">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Let's Talk</p>
              <h3 className="text-2xl text-white font-sans mb-3 font-bold tracking-tight">info@pentagon.com</h3>
              <p className="text-white/60 text-lg font-medium">+91 98765 43210</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
