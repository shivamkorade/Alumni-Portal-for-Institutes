import React, { useState } from "react";
import "./reset.css";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // TODO: Add API call to actually reset the password
    setMessage("Password reset successful!");
  };

  return (
    <div className="reset-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit} className="reset-form">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        {message && <p className="reset-message">{message}</p>}
      </form>
    </div>
  );
}
