import React, { useState } from 'react';
import ContactForm from './ContactForm'; // Імпортуємо форму зворотного зв'язку

const HomePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // Стан для відображення форми

  // Відкриває форму зворотного зв'язку
  const openForm = () => {
    setIsFormOpen(true);
  };

  // Закриває форму зворотного зв'язку
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="home-page">
     
    </div>
  );
};

export default HomePage;