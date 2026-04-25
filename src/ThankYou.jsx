import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './sections/homePage/Header';
import Footer from './sections/homePage/Footer';
import { Helmet } from 'react-helmet-async';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-lighter">
      <Helmet>
        <title>Thank You | Pentagon Interior Design Factory</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full bg-white rounded-[40px] p-10 md:p-16 text-center shadow-2xl border border-gray-100 relative overflow-hidden"
        >
          {/* Animated background element */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          
          <div className="relative z-10">
            {/* Checkmark Animation */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center relative">
                <motion.svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <motion.path 
                    d="M20 6L9 17L4 12" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </motion.svg>
                
                {/* Expanding pulse effect */}
                <motion.div 
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
              Thank You!
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md mx-auto font-text">
              Your message has been successfully received. Our design experts will contact you shortly to discuss your premium interior vision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
              >
                Back to Home
              </Link>
              <Link 
                to="/projects" 
                className="w-full sm:w-auto px-8 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
