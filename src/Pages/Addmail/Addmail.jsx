import { useState } from "react";
import "./addmail.css"; 

export default function AddEmailHistory  () {
  const [formData, setFormData] = useState({
    emailTemplate: "",
    programme: "",
    batch: "",
    branch: "",
    totalRecipients: "",
    totalDelivered: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
   <h2 className="addmail-title">Add Email History</h2>
    <div className="addmail-container">
    
      <form className="addmail-form-container" onSubmit={handleSubmit}>
        <label className="addmail-label">Email Template <span className="mailrequired">*</span></label>
        <input className="addmail-input" type="text" name="emailTemplate" value={formData.emailTemplate} onChange={handleChange} required />

        <label className="addmail-label">Programme <span className="mailrequired">*</span></label>
        <input className="addmail-input" type="text" name="programme" value={formData.programme} onChange={handleChange} required />

        <label className="addmail-label">Batch <span className="mailrequired">*</span></label>
        <input className="addmail-input" type="text" name="batch" value={formData.batch} onChange={handleChange} required />

        <label className="addmail-label">Branch <span className="mailrequired">*</span></label>
        <input className="addmail-input" type="text" name="branch" value={formData.branch} onChange={handleChange} required />

        <label className="addmail-label">Total Recipients <span className="mailrequired">*</span></label>
        <input className="addmail-input2" type="number" name="totalRecipients" value={formData.totalRecipients} onChange={handleChange} required />

        <label className="addmail-label">Total Delivered <span className="mailrequired">*</span></label>
        <input className="addmail-input2" type="number" name="totalDelivered" value={formData.totalDelivered} onChange={handleChange} required />

        <div className="addmail-button-group">
          <button className="addmail-button" type="submit">Save</button>
          <button className="addmail-button" type="button">Save and Continue Editing</button>
          <button className="addmail-button" type="button">Save and Add Another</button>
        </div>
      </form>
    </div>
    </>
  );
};


