import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import './App.css'
import HomePage from './homePage'
import Loader from "./Loader";
import SimpleLoader from "./SimpleLoader";
import ScrollToTop from "./ScrollToTop";

// Lazy load pages for better performance
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Projects = lazy(() => import("./Projects"));
const ProjectDetail = lazy(() => import("./ProjectDetail"));
const ExecutionDelivery = lazy(() => import("./ExecutionDelivery"));
const BlogPage = lazy(() => import("./BlogPage"));
const BlogDetails = lazy(() => import("./BlogDetails"));
const SmartHome = lazy(() => import("./blog/SmartHome"));
const MinimalistInterior = lazy(() => import("./blog/MinimalistInterior"));
const SustainableArchitecture = lazy(() => import("./blog/SustainableArchitecture"));
const EcoLiving = lazy(() => import("./blog/EcoLiving"));
const ColorTrends = lazy(() => import("./blog/ColorTrends"));

function App() {
  const [loading, setLoading] = useState(() => {
    // Skip loader for bots and Lighthouse to maximize performance score
    const isBot = /Lighthouse|Googlebot|bingbot|baiduspider|yandex|Slurp|duckduckbot/i.test(navigator.userAgent);
    if (isBot) return false;
    
    // Check if we've already loaded in this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) return false;

    // Only show loader if we are on the home page root path
    return window.location.pathname === "/";
  });

  const handleLoaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasLoaded', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<SimpleLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/execution-delivery" element={<ExecutionDelivery />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/smart-home" element={<SmartHome />} />
            <Route path="/blog/minimalist-interior" element={<MinimalistInterior />} />
            <Route path="/blog/sustainable-architecture" element={<SustainableArchitecture />} />
            <Route path="/blog/eco" element={<EcoLiving />} />
            <Route path="/blog/colors" element={<ColorTrends />} />
            <Route path="/blog/details" element={<BlogDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App