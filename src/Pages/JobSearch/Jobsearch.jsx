import React, { useState } from "react";
import "./jobsearch.css"; // Import external CSS
import SearchIcon from '@mui/icons-material/Search';

export default function JobSearch  ()  {
  const [position, setPosition] = useState("Any position");
  const [role, setRole] = useState("Any role");

  return (
    <>
    <div className="jobsearch-container">
      <h1 className="jobsearch-title">SEARCH</h1>
      <p className="jobsearch-subtitle">From X Jobs posted here</p>

      <div className="jobsearch-filters">
        {/* Position Dropdown */}
        <select className="jobsearch-dropdown" value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="" >Any position</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
        </select>

        {/* Role Dropdown */}
        <select className="jobsearch-dropdown" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="" >Any role</option>
          <option>Intern</option>
          <option>Junior</option>
          <option>Senior</option>
        </select>

        {/* Search Button */}
        <button className="job-search-btn"><SearchIcon/></button>
      </div>

      {/* No Posts Message */}
  
    </div>
      <div className="job-no-posts">No Post posted yet!</div>
      </>
  );
};


