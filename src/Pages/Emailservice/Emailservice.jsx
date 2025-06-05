import React, { useState } from "react";
import "./emailservice.css";

export default function EmailDashboard() {
  const [formData, setFormData] = useState({
    template: "",
    programme: "",
    batch: "",
    branch: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Sent with Data:", formData);
  };

  return (
    <div className="emailservice-dashboard">
      {/* Email Form */}
      <div className="emailservice-form">
        <div className="emailservice-grid">
          <div className="emailservice-field-group">
            <label>Template</label>
            <select
              name="template"
              value={formData.template}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
            </select>
          </div>

          <div className="emailservice-field-group">
            <label>Programme</label>
            <select
              name="programme"
              value={formData.programme}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="programme1">Programme 1</option>
              <option value="programme2">Programme 2</option>
            </select>
          </div>

          <div className="emailservice-field-group">
            <label>Batch</label>
            <select name="batch" value={formData.batch} onChange={handleChange}>
             <option value=""></option>
              <option value="batch1">Batch 1</option>
              <option value="batch2">Batch 2</option>
            </select>
          </div>

          <div className="emailservice-field-group">
            <label>Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
               <option value=""></option>
              <option value="branch1">Branch 1</option>
              <option value="branch2">Branch 2</option>
            </select>
          </div>
        </div>

        <button onClick={handleSubmit}>Send E-mail</button>
        <p className="emailservice-note">
          Note: Sending Email to a lot of people might take some time. Please
          have patience.
        </p>
      </div>

      {/* Email Records Table */}
      <h3 className="email-records-title">Past Email Records</h3>
      <table className="email-records">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Template</th>
            <th>Programme</th>
            <th>Batch</th>
            <th>Branch</th>
            <th>Recipients</th>
            <th>Delivered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
