import React, { useState } from 'react';

const ClientsReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Anna Luchaninova",
      position: "Group Manager",
      text: "I want to thank the EN team for productive cooperation. It is highly valuable that all issues are resolved quickly and meticulously...",
      companyLogo: require('../images/review_1.png'),
    },
    // Додайте більше відгуків, якщо потрібно
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="clients-review">
      <h2>
        <span>What</span> Our Clients Say
      </h2>
      <div className="review-content">
        <button onClick={prevReview} className="arrow-btn">←</button>
        <div className="review-card">
          <img src={reviews[currentIndex].companyLogo} alt="Company Logo" className="company-logo" />
          <p className="review-text">"{reviews[currentIndex].text}"</p>
          <span className="review-author">{reviews[currentIndex].name}</span>
          <span className="review-position">{reviews[currentIndex].position}</span>
        </div>
        <button onClick={nextReview} className="arrow-btn">→</button>
      </div>
      <button className="discover-btn">Discover Our Programs</button>
    </div>
  );
};

export default ClientsReview;
