import React from 'react';
import { motion } from 'framer-motion';
import Header from './sections/homePage/Header';
import Hero from './sections/homePage/Hero';
import About from './sections/homePage/About';
import Services from './sections/homePage/Services';
import WhyChooseUs from './sections/homePage/WhyChooseUs';
import MarqueeSection from './sections/homePage/MarqueeSection';
import Projects from './sections/homePage/Projects';
import Testimonials from './sections/homePage/Testimonials';
import ContactUs from './sections/homePage/ContactUs';
import Footer from './sections/homePage/Footer';
import ProjectsSection from "./sections/homePage/ProjectsSection";
import HowWeWork from "./sections/homePage/HowWeWork";
import Performance from "./sections/homePage/Performance";
import Testi from "./sections/homePage/Testi";
import PromoVideo from "./sections/homePage/PromoVideo";
import BlogSection from "./sections/homePage/BlogSection";
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div className="font-text text-text-main selection:bg-accent selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Home | Pentagon Interior - Luxury Design Factory</title>
        <meta name="description" content="Welcome to Pentagon Interior. We transform spaces into premium experiences with 10+ years of excellence in high-end residential and commercial interior design." />
        <link rel="canonical" href="https://pentagoninteriors.in/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Services />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <WhyChooseUs />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <HowWeWork />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Performance />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Testi />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <PromoVideo />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <MarqueeSection />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <BlogSection />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <ContactUs />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
