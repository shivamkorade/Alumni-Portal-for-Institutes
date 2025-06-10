import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

import "./login.css";

import { requestPasswordReset } from "../../services/operations/resetPasswordAPI";
// Add your authentication API service
import { logIn } from "../../services/operations/authAPI";

export default function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Add loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // FIXED: Use your existing logIn API function
  const handleLogin = async (formData) => {
    setIsLoading(true);
    setLoginError("");

    try {
      // Use your existing logIn function
      const result = await logIn(formData, navigate);

      // If successful, update the auth context
      if (result && result.success) {
        const userData = {
          ...result.user,
          role: role,
          token: result.token,
        };
        login(userData);
        // Navigation is handled by logIn function
      }
    } catch (error) {
      // logIn function already shows toast error
      console.error("Login error:", error);
      setLoginError(
        error.message || "Login failed. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });

    // Clear error when user starts typing
    if (loginError) setLoginError("");
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData({ ...forgotPasswordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    handleLogin(formData); // This now does proper authentication
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!forgotPasswordData.email) {
      alert("Email is required!");
      return;
    }

    requestPasswordReset(forgotPasswordData);
    console.log("Password reset email sent :", forgotPasswordData);
    setShowForgotPassword(false);
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign in</h2>
      <div className="signin-box">
        <form onSubmit={handleSubmit}>
          <label className="signin-label">
            Email <span className="signin-required">*</span>
          </label>
          <input
            type="email"
            className="signin-input"
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
            disabled={isLoading}
          />

          <label className="signin-label">
            Password <span className="signin-required">*</span>
          </label>
          <input
            type="password"
            className="signin-input"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
            disabled={isLoading}
          />

          {/* Display error message */}
          {loginError && (
            <div
              className="error-message"
              style={{ color: "red", margin: "10px 0" }}
            >
              {loginError}
            </div>
          )}

          <a
            href="#"
            className="forgot-password"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot password?
          </a>

          <button type="submit" className="signin-btn" disabled={isLoading}>
            {isLoading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
      </div>

      <div className="signin-register-box">
        <p>Don't have an account?</p>
        <button className="register-btn" onClick={() => navigate("/register")}>
          REGISTER HERE
        </button>
      </div>

      {showForgotPassword && (
        <div className="modal-overlay">
          <div className="modal-container">
            <Close
              className="close-icon"
              onClick={() => setShowForgotPassword(false)}
            />
            <h3>Reset Password</h3>
            <form onSubmit={handleForgotPasswordSubmit}>
              <label>
                Email <span className="signin-required">*</span>
              </label>
              <input
                type="email"
                className="signin-input"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleForgotPasswordChange}
              />
              <button type="submit" className="forget-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
