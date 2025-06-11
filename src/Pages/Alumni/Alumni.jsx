import React, { useState } from "react";
import "./alumni.css";
import student1 from "../../assets/images/student.jpg"; // Replace with actual images

export default function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");

  const alumniList = [
    {
      name: "Riya Deshmukh",
      photo: student1,
      current: "Software Engineer at Microsoft",
      linkedin: "https://www.linkedin.com/in/riya-deshmukh",
      batch: "2021",
    },
    {
      name: "Sahil Patil",
      photo: student1,
      current: "MS in CS at University of California",
      linkedin: "https://www.linkedin.com/in/sahil-patil",
      batch: "2022",
    },
    {
      name: "Anjali Mehta",
      photo: student1,
      current: "Product Manager at Amazon",
      linkedin: "https://www.linkedin.com/in/anjali-mehta",
      batch: "2021",
    },
    {
      name: "Rahul Joshi",
      photo: student1,
      current: "MBA Candidate at IIM Bangalore",
      linkedin: "https://www.linkedin.com/in/rahul-joshi",
      batch: "2020",
    },
    {
      name: "Sneha Kulkarni",
      photo: student1,
      current: "Data Analyst at Deloitte",
      linkedin: "https://www.linkedin.com/in/sneha-kulkarni",
      batch: "2023",
    },
    {
      name: "Aman Verma",
      photo: student1,
      current: "Full Stack Developer at Infosys",
      linkedin: "https://www.linkedin.com/in/aman-verma",
      batch: "2022",
    },
    {
      name: "Neha Shah",
      photo: student1,
      current: "Pursuing MS in Data Science at NYU",
      linkedin: "https://www.linkedin.com/in/neha-shah",
      batch: "2023",
    },
    {
      name: "Omkar Pawar",
      photo: student1,
      current: "Software Engineer at TCS",
      linkedin: "https://www.linkedin.com/in/omkar-pawar",
      batch: "2020",
    },
    {
      name: "Divya Jain",
      photo: student1,
      current: "AI Research Intern at DRDO",
      linkedin: "https://www.linkedin.com/in/divya-jain",
      batch: "2021",
    },
    {
      name: "Karan Desai",
      photo: student1,
      current: "Cloud Engineer at Google Cloud",
      linkedin: "https://www.linkedin.com/in/karan-desai",
      batch: "2022",
    },
  ];

  const filteredAlumni = alumniList.filter((alum) => {
    const matchName = alum.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchBatch = selectedBatch === "All" || alum.batch === selectedBatch;
    return matchName && matchBatch;
  });

  const uniqueBatches = [...new Set(alumniList.map((a) => a.batch))];

  return (
    <div className="alumni-container">
      <h1 className="alumni-title">Our Alumni</h1>
      <p className="alumni-subtitle">
        Meet our distinguished graduates who continue to make us proud!
      </p>

      {/* Filters */}
      <div className="alumni-filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="All">All Batches</option>
          {uniqueBatches.sort().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="alumni-grid">
        {filteredAlumni.map((alum, index) => (
          <div key={index} className="alumni-card">
            <img src={alum.photo} alt={alum.name} className="alumni-photo" />
            <h3>{alum.name}</h3>
            <p>{alum.current}</p>
            <p className="alumni-batch">Batch of {alum.batch}</p>
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
