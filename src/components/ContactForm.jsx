import React, { useState } from 'react';

const ContactForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати логіку для відправки форми, наприклад, через API
    alert('Форма відправлена!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    closeForm(); 
  };

  return (
    <div className="form-overlay">
      <div className="contact-form">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
          <button type="button" className="close-button" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;