import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "How is NameOfCompany different from other language schools?",
    "Will I be using a textbook, and if so, which one?",
    "If you work with corporate clients, do you only have Business English or General English too?",
    "Where do I do my homework?",
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="container">
      <div className="faq-section">
        <h2 className="faq-title">
          Browse Through <br />{" "}
          <span className="faq-title-highlight">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="faq-list">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                {question}
                <span className="faq-toggle">
                  {activeIndex === index ? " " : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
