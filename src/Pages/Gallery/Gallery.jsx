import React, { useState } from "react";
import "./gallery.css";
import img2025a from "../../assets/2025_1.jpg";
import img2025b from "../../assets/2025_2.jpg";
import img2024a from "../../assets/2024_1.jpg";
import img2023a from "../../assets/2023_1.jpg";

const galleryData = {
  2025: [img2025a, img2025b],
  2024: [img2024a],
  2023: [img2023a],
};

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Explore memories from each year</p>

      <div className="year-card-grid">
        {Object.keys(galleryData)
          .sort((a, b) => b - a)
          .map((year) => (
            <div
              key={year}
              className={`year-card ${selectedYear === year ? "active" : ""}`}
              onClick={() => handleYearClick(year)}
            >
              <h3>{year}</h3>
            </div>
          ))}
      </div>

      {selectedYear && (
        <div className="photo-grid">
          {galleryData[selectedYear].map((photo, idx) => (
            <div key={idx} className="photo-wrapper">
              <img src={photo} alt={`img-${idx}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
