import React, { useState } from "react";
import "./reset.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { resetPassword } from "../../services/operations/resetPasswordAPI";

export default function Reset() {
  const location = useLocation();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     setMessage("Passwords do not match!");
  //     return;
  //   }

  //   // TODO: Add API call to actually reset the password
  //   setMessage("Password reset successful!");
  // };

  const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    })

    const {password, confirmPassword} = formData;
    
    const onChangeHandler = (event) => {
        setFormData( (prevData) => (
            { 
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
          setMessage("Passwords do not match!");
          return;
        }

        const token = location.pathname.split("/").at(-1);

        const resetData = {
          ...formData,
          token: token
        }

        resetPassword(resetData, navigate);
        
    }

  return (
    <div className="reset-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={onSubmitHandler} className="reset-form">
        <input
          type="password"
          placeholder="New Password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Reset Password</button>
        {message && <p className="reset-message">{message}</p>}
      </form>
    </div>
  );
}
