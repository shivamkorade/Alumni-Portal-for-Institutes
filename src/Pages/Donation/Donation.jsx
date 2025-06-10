import React, { useState } from "react";
import "./donation.css";

export default function Donation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: "General Fund"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment gateway or API integration here
    alert(`Thank you ${form.name} for donating ₹${form.amount}!`);
  };

  return (
    <div className="donation-container">
      <h1 className="donation-title">Support the Institute</h1>
      <p className="donation-subtitle">Your contribution can help fund scholarships, events, and innovation!</p>

      <form className="donation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={form.amount}
          onChange={handleChange}
          required
        />
        <select name="purpose" value={form.purpose} onChange={handleChange}>
          <option value="General Fund">General Fund</option>
          <option value="Scholarships">Scholarships</option>
          <option value="Research">Research</option>
          <option value="Events & Outreach">Events & Outreach</option>
        </select>

        <button type="submit" className="donate-btn">Donate Now</button>
      </form>
    </div>
  );
}
