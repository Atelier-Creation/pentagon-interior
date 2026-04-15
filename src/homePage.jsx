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

export default function HomePage() {
  return (
    <div className="font-text text-text-main selection:bg-accent selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <MarqueeSection />
        <Projects />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
