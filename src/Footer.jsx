import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [showContactLinks, setShowContactLinks] = useState(false);

  const handleContactClick = () => {
    setShowContactLinks(!showContactLinks);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-heading">Logistic</div>
            <div className="footer-description">
              Faucibus quis fringilla scelerisque dui. Amet parturient dui venenatis amet sagittis viverra vel tincidunt. Orci tincidunt.
            </div>
            <div className="footer-chat" onClick={handleContactClick}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b02216ec546a5f813f1c7775ece6aa63f694d4f44f7ed734009fe65d95e448a?"
                className="footer-img"
                alt="Chat"
              />
              <div className="footer-chat-text">Contact</div>
            </div>
            {showContactLinks && (
              <div className="footer-contact-links">
                <a href="https://www.instagram.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.whatsapp.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="https://www.facebook.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">Facebook</a>
                <div className="footer-phone">Phone: +1234567890</div>
              </div>
            )}
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <div className="footer-title">Company</div>
              <div className="footer-link">About Us</div>
              <div className="footer-link">Our Partners</div>
              <div className="footer-link">Careers</div>
              <div className="footer-link">Our Network</div>
            </div>
            <div className="footer-section">
              <div className="footer-title">Resources</div>
              <div className="footer-link">Packing Supplies</div>
              <div className="footer-link">Faqs</div>
              <div className="footer-link">Pricing and Quotes</div>
              <div className="footer-link">Tips and Guides</div>
            </div>
            <div className="footer-section">
              <div className="footer-title">Help</div>
              <div className="footer-link">Customer Support</div>
              <div className="footer-link">Delivery Details</div>
              <div className="footer-link">Terms & Conditions</div>
              <div className="footer-link">Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-copyright">Copyright © 2023 Logistic</div>
          <div className="footer-design">Design By Abdulla T</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


