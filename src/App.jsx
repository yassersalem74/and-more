import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Why from "./pages/Why";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main
        role="main"
        className="
          min-h-screen
          
        "
      >
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/why" element={<Why />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        
      </main>
    </>
  );
}