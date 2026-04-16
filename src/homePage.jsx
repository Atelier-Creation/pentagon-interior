import React from 'react';
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
export default function HomePage() {
  return (
    <div className="font-text text-text-main selection:bg-accent selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ProjectsSection />
        <HowWeWork />
        <Performance />
        <Testi />
        <PromoVideo /> 
        <MarqueeSection />
        <BlogSection /> 
        <Projects />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
