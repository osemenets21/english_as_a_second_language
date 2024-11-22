import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "IT Industry Proficiency",
      description:
        "With a 15-year track record and a clientele including Semrush, First Line Software, Wargaming, and over 150 more companies, we’ve earned the trust of over 20,000 employees. Our network extends to a community of 200+ IT HR professionals who actively participate in our events, reflecting our ongoing commitment to providing top-tier educational solutions in IT.",
    },
    {
      id: 2,
      title: "Seamless Administration",
      description:
        "We prioritize simplifying administrative tasks. Whether it’s organizing group formations for program launches or onboarding over 100 individuals for a corporate client, we aim to ease the workload for our HR partners, enabling them to focus on strategic initiatives.",
    },
    {
      id: 3,
      title: "Effortless Reporting",
      description:
        "Our platform simplifies reporting and paperwork tasks for HR professionals, allowing them to receive insightful reports seamlessly. With streamlined administrative processes and automated paperwork management, we ensure compliance with global regulations while saving valuable time.",
    },
    {
      id: 4,
      title: "Turnkey Language",
      description:
        "Our platform offers a range of programs, from individual and group classes to specialized events in English and community-building opportunities. With a smooth administrative process and a touch of innovation, we deliver holistic solutions tailored to our clients’ diverse needs.",
    },
    {
      id: 5,
      title: "Global Insight",
      description:
        "As a global company ourselves, we understand the importance of fostering cross-cultural understanding alongside language skills. Our team consists of trainers from diverse backgrounds, ensuring that cross-cultural issues are integrated into nearly every business course we offer, empowering teams for success in the global marketplace.",
    },
    {
      id: 6,
      title: "Modern Approach",
      description:
        "Our team of educational content creators designs courses aligned with our clients’ objectives, incorporating authentic materials and leveraging cutting-edge AI tools as needed. These resources are delivered through an interactive, user-friendly platform, ensuring an enriching learning experience for all participants.",
    },
  ];

  return (
    <div id="container-gray-bg">
      <div id="container">
        <div className="why-choose-us">
          <h2 className="title">
            Why Global HRs <span>Choose Us</span>
          </h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-number">{feature.id}</div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
