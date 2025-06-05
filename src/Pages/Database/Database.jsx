import React from "react";
import "./database.css";
import { Add, Edit } from "@mui/icons-material";

const sections = [
  {
    title: "ADMIN PORTAL",
    items: ["Email History", "Email Templates"],
  },
  {
    title: "ADMIN PROFILE",
    items: ["Batch", "Degree", "Education", "Past Experience", "Profile"],
  },
  {
    title: "AUTHENTICATION AND AUTHORIZATION",
    items: ["Groups", "Users"],
  },
  {
    title: "AWARDS",
    items: ["Awards"],
  },
  {
    title: "CHAPTER",
    items: ["Chapter Albums", "Chapter Events", "Chapter Teams", "Chapters"],
  },
  {
    title: "EVENT NEWS",
    items: ["Attendees", "Events"],
  },
  {
    title: "GALLERY",
    items: ["Images", "Albums"],
  },
  {
    title: "GEOLOCATIONS",
    items: ["Map points"],
  },
  {
    title: "JOB POSTING",
    items: ["Postings"],
  },
  {
    title: "NEWS",
    items: ["News"],
  },
  {
    title: "PUBLICATIONS",
    items: ["PUBLICATION MEDIA", "PUBLICATIONS"],
  },
];

export default function Database() {
  return (
    <>
     <header className="database-header">
        <h1 className="database-h1">Alumni Association Admin</h1>
        <a href="#" className="database-recent-actions">
          Recent Actions
        </a>
      </header>
    <div className="database-container">
     

      {sections.map((section, index) => (
        <div key={index} className="database-section">
          <div className="database-section-title">{section.title}</div>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx} className="database-item">
                <span>{item}</span>
                <div>
                  <div className="database-button-row">
                    <div className="database-icon-container">
                      <Add className="database-add-icon" />
                      <button className="database-add-button">Add</button>
                    </div>
                    <div className="database-icon-container">
                      <Edit className="database-edit-icon" />
                      <button className="database-change-button">Change</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
}
