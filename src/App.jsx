import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
   <Router>
      <Header />
      <Hero />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/features" element={<Features />} />
    </Routes>
      <Footer />
      </Router>
    
  );
}

export default App;
