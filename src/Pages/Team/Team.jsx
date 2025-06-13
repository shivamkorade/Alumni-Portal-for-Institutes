import React from "react";
import "./team.css";
import member1 from "../../assets/images/sonia_mam.jpeg";
import member2 from "../../assets/images/Shivam_Korade.jfif";
import member3 from "../../assets/images/bhaven.jpg";
import member4 from "../../assets/images/ashutosh.jpg";
import member5 from "../../assets/images/harsh.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Prof. Soniya Waghmare",
      role: "Project Guide",
      branch: "Computer Sci. & Engg. (Data Science)",
      photo: member1,
    },
    {
      name: "Shivam Korade",
      role: "UI/UX & Front-End",
      branch: "Computer Science",
      photo: member2,
    },
    {
      name: "Bhaven Rathod",
      role: "Front-End Developer",
      branch: "Computer Science",
      photo: member3,
    },
    {
      name: "Ashutosh Dhumal",
      role: "Back-End Developer",
      branch: "Computer Science",
      photo: member4,
    },
    {
      name: "Harsh Sahani",
      role: "Tester",
      branch: "Computer Science",
      photo: member5,
    },
  ];

  return (
    <div className="team-container">
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-subtitle">
        The passionate students building this platform.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-branch">{member.branch}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
