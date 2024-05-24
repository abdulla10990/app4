import React from "react";
import { Link } from "react-router-dom";
import "./MyComponent.css";
import ServicesList from "./ServicesList";

function Home() {
  return (
    <div className="container">
      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <span className="highlight">Moving Made Easy: </span>
            Your Trusted House Moving Partner
          </div>
          <div className="hero-cta">
            <p className="hero-description">
            "Embark on a seamless journey with Moving Made Easy, your ultimate companion for stress-free house moves. Trust us to handle every aspect of your relocation, ensuring a smooth transition into your new home."
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section className="quote-form-section">
          <div className="quote-form">
            <div className="quote-title">Request A Quote</div>
            <div className="quote-subtitle">About Yourself</div>
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />
            <div className="quote-subtitle">Moving</div>
            <input
              type="text"
              placeholder="Moving From"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Moving To"
              className="input-field"
            />
            <button className="quote-button">Get A Quote</button>
          </div>
        </section>
      </main>
    </div>
  );
}

function Services() {
  return (
    <div className="container">
      <main className="main-content">
        <section className="services-section">
          <h1 className="services-title">Services</h1>
          <ServicesList />
        </section>
      </main>
    </div>
  );
}

export { Home, Services };
