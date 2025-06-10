import React from "react";
import "./alumni.css";
import student1 from "../../assets/images/student.jpg"; // Replace with actual images
// import student2 from "../../assets/images/student2.jpg";

export default function Alumni() {
  const alumniList = [
    {
      name: "Riya Deshmukh",
      photo: student1,
      current: "Software Engineer at Microsoft",
      linkedin: "https://www.linkedin.com/in/riya-deshmukh",
    },
    {
      name: "Sahil Patil",
      photo: student1,
      current: "MS in CS at University of Southern California",
      linkedin: "https://www.linkedin.com/in/sahil-patil",
    },
    {
      name: "Anjali Mehta",
      photo: student1,
      current: "Product Manager at Amazon",
      linkedin: "https://www.linkedin.com/in/anjali-mehta",
    },
    {
      name: "Rahul Joshi",
      photo: student1,
      current: "MBA Candidate at IIM Bangalore",
      linkedin: "https://www.linkedin.com/in/rahul-joshi",
    },
    {
      name: "Sneha Kulkarni",
      photo: student1,
      current: "Data Analyst at Deloitte",
      linkedin: "https://www.linkedin.com/in/sneha-kulkarni",
    },
    {
      name: "Aman Verma",
      photo: student1,
      current: "Full Stack Developer at Infosys",
      linkedin: "https://www.linkedin.com/in/aman-verma",
    },
    {
      name: "Neha Shah",
      photo: student1,
      current: "Pursuing MS in Data Science at NYU",
      linkedin: "https://www.linkedin.com/in/neha-shah",
    },
    {
      name: "Omkar Pawar",
      photo: student1,
      current: "Software Engineer at TCS",
      linkedin: "https://www.linkedin.com/in/omkar-pawar",
    },
    {
      name: "Divya Jain",
      photo: student1,
      current: "AI Research Intern at DRDO",
      linkedin: "https://www.linkedin.com/in/divya-jain",
    },
    {
      name: "Karan Desai",
      photo: student1,
      current: "Cloud Engineer at Google Cloud",
      linkedin: "https://www.linkedin.com/in/karan-desai",
    },
  ];

  return (
    <div className="alumni-container">
      <h1 className="alumni-title">Our Alumni</h1>
      <p className="alumni-subtitle">
        Meet our distinguished graduates who continue to make us proud!
      </p>

      <div className="alumni-grid">
        {alumniList.map((alum, index) => (
          <div key={index} className="alumni-card">
            <img src={alum.photo} alt={alum.name} className="alumni-photo" />
            <h3>{alum.name}</h3>
            <p>{alum.current}</p>
            <a
              href={alum.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              View LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
