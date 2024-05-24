import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-text">
            Get A Discount Of Up To 50% For Orders This Month!
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/776425045666451277e8d765cb24055dfcd416f057556c3d5d0486e5c6bac40e?"
                className="icon"
                alt="Phone Icon"
              />
              <div>+62 864 6444 2222</div>
            </div>
            <div className="contact-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e050109c770ffaadd17401561b20bdce6844ce824d74b3d24b00ff8351a823d?"
                className="icon"
                alt="Email Icon"
              />
              <div>hi@logistic.com</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="brand">Logistic</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


