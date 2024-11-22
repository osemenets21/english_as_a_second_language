import React from "react";

const FluentEnInfo = () => {
  return (
    <div id="container-gray-bg">
      <div id="container">
        <div className="fluent-info">
          <h2 className="title">
            <span className="highlight">Fluent-En</span> — an online English
            school with an international team of instructors
          </h2>
          <div className="wrapper">
            <div className="info-cards">
              <div className="info-card">
                Teachers from the UK, USA, New Zealand, South Africa, and other
                countries
              </div>
              <div className="info-card">
                Flexible formats for learning a foreign language online
              </div>
              <div className="info-card">
                Support until you achieve confident language proficiency
              </div>
              <div className="info-card">
                Overcoming language barriers, and acquiring the necessary
                knowledge for work in an international environment
              </div>
            </div>

            <div className="stats-card">
              <p className="stat">
                <span>100+</span> language instructors
              </p>
              <p className="stat">
                <span>15</span> years
              </p>
              <p className="stat">
                <span>20000</span> students
              </p>
            </div>
          </div>

          <button className="schedule-btn">Schedule a call</button>
        </div>
      </div>
    </div>
  );
};

export default FluentEnInfo;
