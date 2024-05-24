import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Services } from './MyComponent';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import ServiceDetails from './ServiceDetails';
import PaymentForm from './PaymentForm';

function App() {
  const [service, setService] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route
          path="/payment"
          element={
            <PaymentForm
              service={service}
              setService={setService}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;