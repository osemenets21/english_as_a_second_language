import React from 'react';
import { FaTelegramPlane, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="container">
      <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h2 className="footer__logo">NameOfCompany</h2>
          <div className="footer__social-icons">
            <a href="www.google.com.us" aria-label="Telegram" className="icon">
              <FaTelegramPlane />
            </a>
            <a href="www.google.com.us" aria-label="LinkedIn" className="icon">
              <FaLinkedinIn />
            </a>
            <a href="www.google.com.us" aria-label="Email" className="icon">
              <FaEnvelope />
            </a>
            <a href="www.google.com.us" aria-label="WhatsApp" className="icon">
              <FaWhatsapp />
            </a>
          </div>
          
          <p className="footer__copyright">© 2023 - 2024</p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3>Programs</h3>
            <ul>
              <li>For Companies</li>
              <li>For Individuals</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Information</h3>
            <ul>
              <li>Team</li>
              <li>Our Platform</li>
              <li>Test Your Level</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Documents</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Version for the Visually Impaired</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>NameOfCompany Online English Language School</p>
        <p>Harju maakond, Maardu linn, Pirnipuu pst 123-3, Estonia 74117</p>
      </div>
    </footer>
    </div>
    
  );
};

export default Footer;
