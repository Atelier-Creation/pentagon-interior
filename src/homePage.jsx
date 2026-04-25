import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Eagerly loaded (Above the fold or critical)
import Header from './sections/homePage/Header';
import Hero from './sections/homePage/Hero';
import About from './sections/homePage/About';
import Services from './sections/homePage/Services';
import WhyChooseUs from './sections/homePage/WhyChooseUs';
import ProjectsSection from "./sections/homePage/ProjectsSection";
import Footer from './sections/homePage/Footer';

// Lazily loaded (Below the fold)
const HowWeWork = lazy(() => import("./sections/homePage/HowWeWork"));
const Performance = lazy(() => import("./sections/homePage/Performance"));
const Testi = lazy(() => import("./sections/homePage/Testi"));
const PromoVideo = lazy(() => import("./sections/homePage/PromoVideo"));
const MarqueeSection = lazy(() => import("./sections/homePage/MarqueeSection"));
const BlogSection = lazy(() => import("./sections/homePage/BlogSection"));
const Projects = lazy(() => import("./sections/homePage/Projects"));
const Testimonials = lazy(() => import("./sections/homePage/Testimonials"));
const ContactUs = lazy(() => import("./sections/homePage/ContactUs"));

const SectionWrapper = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

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
        
        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <WhyChooseUs />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectsSection />
        </SectionWrapper>

        <Suspense fallback={<div className="h-40" />}>
          <SectionWrapper>
            <HowWeWork />
          </SectionWrapper>

          <SectionWrapper>
            <Performance />
          </SectionWrapper>

          <SectionWrapper>
            <Testi />
          </SectionWrapper>

          <SectionWrapper>
            <PromoVideo />
          </SectionWrapper>

          <SectionWrapper>
            <MarqueeSection />
          </SectionWrapper>

          <SectionWrapper>
            <BlogSection />
          </SectionWrapper>

          <SectionWrapper>
            <Projects />
          </SectionWrapper>

          <SectionWrapper>
            <Testimonials />
          </SectionWrapper>

          <SectionWrapper>
            <ContactUs />
          </SectionWrapper>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
