import React, { useState } from "react";
import "./career.css"; // Import external CSS
import SearchIcon from '@mui/icons-material/Search';

export default function Career() {
  const [position, setPosition] = useState("Any position");
  const [role, setRole] = useState("Any role");

  const fakeJobs = [
    {
      position: "Software Development Engineer (SDE)",
      description: "Work on scalable web applications using React and Node.js.",
      package: "12 LPA",
      company: "Amazon"
    },
    {
      position: "Quality Assurance (QA) Engineer",
      description: "Responsible for writing test cases and ensuring product quality.",
      package: "6 LPA",
      company: "TCS"
    },
    {
      position: "Full Stack Developer",
      description: "Develop end-to-end features using MERN stack.",
      package: "10 LPA",
      company: "Flipkart"
    },
    {
      position: "Data Analyst Intern",
      description: "Analyze data trends and build dashboards using Power BI.",
      package: "4 LPA",
      company: "Infosys"
    }
  ];

  return (
    <>
      <div className="jobsearch-container">
        <h1 className="jobsearch-title">SEARCH</h1>
        <p className="jobsearch-subtitle">From {fakeJobs.length} Jobs posted here</p>

        <div className="jobsearch-filters">
          {/* Position Dropdown */}
          <select className="jobsearch-dropdown" value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="">Any position</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
          </select>

          {/* Role Dropdown */}
          <select className="jobsearch-dropdown" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Any role</option>
            <option>Intern</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>

          {/* Search Button */}
          <button className="job-search-btn"><SearchIcon /></button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        {fakeJobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.position}</h3>
            <p>{job.description}</p>
            <p><strong>Package:</strong> {job.package}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </>
  );
}
