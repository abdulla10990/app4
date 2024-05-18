import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Services } from './MyComponent';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
