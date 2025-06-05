import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material"; 

import "./login.css";


export default function Signup() {

  // AUTHENTICATION,LOGIN,SETTING USER CONTEXT
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [role, setRole] = useState("student"); 
  const [showForgotPassword, setShowForgotPassword] = useState(false);// Default to student

  const handleLogin = (formData) => {
    const userData = {
      formData,
      role: role, // role can be 'admin', 'student', or 'guest'
    };

    // Simulate login with user data
    login(userData);
    navigate("/"); // Redirect to homepage after login
  };


  // 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData({ ...forgotPasswordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    handleLogin(formData);
  };
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (forgotPasswordData.newPassword !== forgotPasswordData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password reset for:", forgotPasswordData);
    setShowForgotPassword(false); // Close modal after submission
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign in</h2>
      <div className="signin-box">
        <form onSubmit={handleSubmit}>
          <label className="signin-label">Email <span className="signin-required">*</span></label>
          <input 
            type="email" 
            className="signin-input"
            name="email" 
            placeholder="Enter your email" 
            required
            onChange={handleChange} 
          />
         

    
          <label className="signin-label">Password <span className="signin-required">*</span></label>
          <input 
            type="password"
            className="signin-input" 
            name="password" 
            placeholder="Enter your password" 
            required
            onChange={handleChange} 
          />
          

          <a href="#" className="forgot-password"  onClick={() => setShowForgotPassword(true)}>Forgot password?</a>

          <button type="submit" className="signin-btn">SIGN IN</button>
        </form>
      </div>

      <div className="signin-register-box">
        <p>Don’t have an account?</p>
        <button className="register-btn" onClick={() => navigate("/register")}>
          REGISTER HERE
        </button>
      </div>

      {showForgotPassword && (
  <div className="modal-overlay">
    <div className="modal-container">
    <Close className="close-icon" onClick={() => setShowForgotPassword(false)} />
      <h3>Reset Password</h3>
      <form onSubmit={handleForgotPasswordSubmit}>
        <label>Email <span className="signin-required">*</span></label>
        <input 
          type="email" 
          className="signin-input" 
          name="email" 
          placeholder="Enter your email" 
          required 
          onChange={handleForgotPasswordChange} 
        />

        <label>New Password <span className="signin-required">*</span></label>
        <input 
          type="password" 
          className="signin-input" 
          name="newPassword" 
          placeholder="Enter new password" 
          required 
          onChange={handleForgotPasswordChange} 
        />

        <label>Confirm Password <span className="signin-required">*</span></label>
        <input 
          type="password" 
          className="signin-input" 
          name="confirmPassword" 
          placeholder="Re-enter new password" 
          required 
          onChange={handleForgotPasswordChange} 
        />

        <button type="submit" className="forget-btn">Submit</button>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
