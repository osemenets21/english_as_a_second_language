import React from "react";

const StudyPackages = () => {
  const packages = [
    {
      name: "Light",
      price: "27 €",
      duration: "45 minutes",
      highlightColor: "#4ab8d6",
    },
    {
      name: "Premium",
      price: "40 €",
      duration: "45 minutes",
      highlightColor: "#F9D04D",
    },
  ];

  return (
    <section id="packages">
      <div id="container">
        <div className="study-packages">
          <h2 className="title">Study packages</h2>
          <div className="packages">
            {packages.map((pkg, index) => (
              <div
                className="package-card"
                key={index}
                style={{ borderColor: pkg.highlightColor }}
              >
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
                <div className="duration">{pkg.duration}</div>
              </div>
            ))}
          </div>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default StudyPackages;
