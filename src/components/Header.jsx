import React, { useState } from 'react';
import { FaTelegram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm';


const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
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
        <h1>Fast way to be fluent in English</h1>
      </div>
      <div className="right-button">
        <button onClick={toggleForm}>Level your test</button>
        <button className='buy-bttn'>Make a payment</button>
      </div>

      {isFormVisible && <ContactForm closeForm={toggleForm} />}
    </header>
  );
};

export default Header;