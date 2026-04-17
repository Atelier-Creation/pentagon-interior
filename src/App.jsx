import './App.css'
import HomePage from './homePage'
import Contact from './Contact'
import About from "./About";
import Services from "./Services";
<<<<<<< HEAD
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import ScrollToTop from "./ScrollToTop";
=======
import ExecutionDelivery from "./ExecutionDelivery";
>>>>>>> 83ef488e57782b2db1b9bd26741ab9928fee945b

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
<<<<<<< HEAD
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
=======
        <Route path="/execution-delivery" element={<ExecutionDelivery />} />
>>>>>>> 83ef488e57782b2db1b9bd26741ab9928fee945b
      </Routes>
    </Router>
  )
}

export default App