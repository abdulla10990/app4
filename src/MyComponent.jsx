import React from "react";
import "./MyComponent.css";

function Home() {
  return (
    <div>
      <div className="container">
        <main className="main-content">
          <section className="hero">
            <div className="hero-text">
              <span className="highlight">Moving Made Easy: </span>
              Your Trusted House Moving Partner
            </div>
            <div className="hero-cta">
              <p className="hero-description">
                Elementum augue ut sagittis vel nunc. Posuere id velit integer
                proin aliquam facilisi quis et cras. Leo nulla integer et
                aliquet massa nunc. Ornare id sit ac varius enim ut nisl.
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
    </div>
  );
}

function Services() {
  return (
    <div>
      <div className="container">
        <main className="main-content">
          <section className="services-section">
            <h1 className="services-title">Services</h1>
            <div className="service-boxes">
              <div className="service-box">Service 1</div>
              <div className="service-box">Service 2</div>
              <div className="service-box">Service 3</div>
              <div className="service-box">Service 4</div>
              <div className="service-box">Service 5</div>
              <div className="service-box">Service 6</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export { Home, Services };
