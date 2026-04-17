import './App.css'
import HomePage from './homePage'
import Contact from './Contact'
import About from "./About";
import Services from "./Services";
import ExecutionDelivery from "./ExecutionDelivery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/execution-delivery" element={<ExecutionDelivery />} />
      </Routes>
    </Router>
  )
}

export default App