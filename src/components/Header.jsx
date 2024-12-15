import React, { useState } from 'react';
import { FaTelegram, FaEnvelope, FaWhatsapp, FaBars } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="container">
       <header className="header">
      <div className="left-icons">
        <a href="https://t.me/yourusername" className='contact-icon' target="_blank" rel="noopener noreferrer">
          <FaTelegram size={25} />
        </a>
        <a href="mailto:youremail@example.com" className='contact-icon' target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={25} />
        </a>
        <a href="https://wa.me/yourphonenumber" className='contact-icon' target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={25} />
        </a>
      </div>
      
      <div className="title">
        <h1>NameOfCompany</h1>
      </div>
      
      {/* Burger Menu Icon */}
      <div className="burger-menu" onClick={toggleMenu}>
        <FaBars />
      </div>
      
      {/* Right Button Section (hidden on smaller screens) */}
      <div className={`right-button ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={toggleForm}>Level your test</button>
        <button className='buy-bttn'>Make a payment</button>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={toggleForm}>Level your test</button>
          <button className='buy-bttn'>Make a payment</button>
        </div>
      )}

      {isFormVisible && <ContactForm closeForm={toggleForm} />}
    </header>
    </div>
   
  );
};

export default Header;
