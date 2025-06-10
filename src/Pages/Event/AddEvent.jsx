import React, { useState } from "react";
import "./event.css";

export default function AlumniForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    address: "",
    location: "",
    organizer: "",
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="alumni-container">
      <form onSubmit={handleSubmit} className="alumni-form">
        <label>
          Title <span className="alumni-required">*</span>
        </label>
        <input type="text" name="title" required onChange={handleChange} />

        <label>
          Description <span className="alumni-required">*</span>
        </label>
        <textarea
          className="description"
          name="description"
          required
          onChange={handleChange}
        />

        <div className="alumni-date-container">
          <div>
            <label>
              Start Date <span className="alumni-required">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              End Date <span className="alumni-required">*</span>
            </label>
            <input
              type="date"
              name="endDate"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <label>
          Address <span className="alumni-required">*</span>
        </label>
        <input type="text" name="address" required onChange={handleChange} />

        <label>Location (Optional)</label>
        <input type="text" name="location" onChange={handleChange} />

        <label>Organizer (Optional)</label>
        <input type="text" name="organizer" onChange={handleChange} />

        <label>Cover Image (Optional)</label>
        <div className="alumni-file-upload">
          <span1>
            {formData.coverImage
              ? formData.coverImage.name
              : "Choose your Cover Picture"}
          </span1>
          <label className="alumni-browse-btn">
            Browse
            <input type="file" name="coverImage" onChange={handleChange} />
          </label>
        </div>

        <div className="alumni-button-container">
          <button className="alumni-submit" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
