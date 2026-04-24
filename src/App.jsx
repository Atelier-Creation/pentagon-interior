import './App.css'
import HomePage from './homePage'
import Contact from './Contact'
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import ScrollToTop from "./ScrollToTop";
import ExecutionDelivery from "./ExecutionDelivery";
import BlogPage from "./BlogPage";
import BlogDetails from "./BlogDetails";
import SmartHome from "./blog/SmartHome";
import MinimalistInterior from "./blog/MinimalistInterior";
import Loader from "./Loader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Router>
      <ScrollToTop />
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

        <Route path="/blog/details" element={<BlogDetails />} />  {/* ✅ ADD THIS */}

      </Routes>
    </Router>
    </>
  )
}

export default App