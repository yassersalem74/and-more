import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// import HomePage from "./pages/HomePage";

import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main role="main" className="min-h-screen bg-[#ffffff]">
        <ScrollToTop />

        {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}

        <Footer></Footer>
      </main>
    </>
  );
}
