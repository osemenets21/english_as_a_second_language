import React from "react";
import alice from "../images/alice.jpg";
import lilay from "../images/lilay.jpg";
import kayley from "../images/kayley.jpg";
import john from "../images/john.jpg";

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Lilay", photo: lilay, role: "Senior English Teacher" },
    { id: 2, name: "Alice", photo: alice, role: "English Language Teacher" },
    { id: 3, name: "Kayley", photo: kayley, role: "English Language Teacher" },
    { id: 4, name: "John", photo: john, role: "English Language Teacher" },
  ];

  return (
    <div id="container">
      <div className="team-section" id="team">
        <h2 className="team-title">
          <span>Discover a glimpse</span>of our teaching team
        </h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
        <button className="more-info-btn">
          More information about our teachers
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
