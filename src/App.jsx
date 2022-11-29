import React from "react";

import Home from "./components/home/home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const app = () => {
  return (
    <>
      <Header />
      <BrowserRouter basename="/my-portfolio">
      <Routes>
        <Route exact path="/my-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<Resume />} />
      </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default app;
