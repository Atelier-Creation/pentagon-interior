import './App.css'
import HomePage from './homePage'
import Contact from './Contact'
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import ScrollToTop from "./ScrollToTop";
import ExecutionDelivery from "./ExecutionDelivery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
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
      </Routes>
    </Router>
  )
}

export default App