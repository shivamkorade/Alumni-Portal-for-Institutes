import React, { useState } from "react";
import "./registeration.css";

export default function RegistrationForm() {
  const [sameAsCurrent, setSameAsCurrent] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    enrollmentNo: "",
    fullName: "",
    motherName: "",
    gender: "",
    dob: "",
    currentAddress: "",
    personalEmail: "",
    officialEmail: "",
    mobile: "",
    course: "",
    stream: "",
    admissionYear: "",
    passingYear: "",
    country: "",
    state: "",
    city: "",
    workingStatus: "",
    linkedIn: "",
    profilePicture: null,
    agreement: false,
    password: "",
    confirmpassword: "",
  });

  const handleCheckboxChange = () => {
    setSameAsCurrent(!sameAsCurrent);
    setFormData((prev) => ({
      ...prev,
      permanentAddress: !sameAsCurrent ? prev.currentAddress : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.profilePicture) {
      newErrors.profilePicture = "Profile picture is required";
    }
  
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    if (formData.password !== formData.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match.";
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update errors state
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <h1 className="reg-heading">Registration Form</h1>
      <div className="reg-container">
        <form onSubmit={handleSubmit} className="form">
          {/* Personal Details */}
          <h3 className="reg-section-title">Personal Details</h3>
          <div className="reg-half-width">
            <label className="reg-label">
              You are:<span className="reg-required">*</span>
              <select name="status" required onChange={handleChange}>
                <option value="" disabled selected>
                  Student/Alumni
                </option>
                <option value="Student">Student</option>
                <option value="Alumni">Alumni</option>
              </select>
            </label>
          </div>
          <div className="reg-input-grid">
            <label className="reg-label">
              Enrollment No:<span  className="reg-required">*</span>
              <input
                type="text"
                placeholder="Enter Roll No"
                name="enrollmentNo"
                required
                onChange={handleChange}
              />
            </label>
            <label className="reg-label">
              Full Name:<span  className="reg-required">*</span>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="fullName"
                required
                onChange={handleChange}
              />
            </label>
            <label className="reg-label">
              Mother's Name:<span  className="reg-required">*</span>
              <input
                type="text"
                placeholder="Enter Your Father's/Mother's Name"
                name="motherName"
                required
                onChange={handleChange}
              />
            </label>
            <label className="reg-label">
              Spouse's Name:
              <input type="text" placeholder="Enter Your Spouse's Name" />
            </label>
            <div className="reg-gender-container">
              <label className="reg-gender-label">
                Gender:<span  className="reg-required">*</span>
              </label>
              <div className="reg-gender-options">
                <label className="reg-label">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label className="reg-label">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    required
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label className="reg-label">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    required
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>

            <label className="reg-label">
              Date of Birth:<span className="reg-required">*</span>
              <input type="date" name="dob" required onChange={handleChange} />
            </label>
          </div>
          {/* Academic Details */}
          <h3 className="reg-section-title">
            Academic Details
          </h3>
          <div className="reg-input-grid">
            <label className="reg-label">
              Course:<span className="reg-required">*</span>
              <select name="course" required onChange={handleChange}>
                <option value="" disabled selected>
                  select Programme<span>*</span>
                </option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
              </select>
            </label>
            <label className="reg-label">
              Stream:<span className="reg-required">*</span>
              <select name="stream" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select discipline
                </option>
                <option value="CSE">CSE</option>
                <option value="ENTC">ENTC</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </label>
            <label className="reg-label">
              Year of Admission:<span className="reg-required">*</span>
              <select name="admissionYear" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select Admission Year
                </option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
              </select>
            </label>
            <label className="reg-label">
              Year of Passing:<span className="reg-required">*</span>
              <select name="passingYear" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select Year Of Passing
                </option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </label>
          </div>
          {/* Contact Details */}
          <h3 className="reg-section-title">Contact Details</h3>
          <div className="reg-input-grid">
            <label className="reg-label">
              Mobile No:<span className="reg-required">*</span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                name="mobile"
                required
                onChange={handleChange}
              />
            </label>
            <label className="reg-label">
              Alternate Mobile No:
              <input type="tel" placeholder="Enter Alterante Phone number" />
            </label>
            <label className="reg-label">
              Personal Email:<span className="reg-required">*</span>
              <input
                type="email"
                placeholder="Enter Your Personal Email"
                name="personalEmail"
                required
                onChange={handleChange}
              />
            </label>
            <label className="reg-label">
              Official Email:<span className="reg-required">*</span>
              <input
                type="email"
                placeholder="Enter Your Official Email"
                name="officialEmail"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="reg-input-row full-width">
            <label className="reg-label">
              Current Address:<span className="reg-required">*</span>
              <input
                type="text"
                id="currentAddress"
                placeholder="Enter Your Current Address"
                name="currentAddress"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="reg-location-grid">
            <label className="reg-label">
              Country:<span className="reg-required">*</span>
              <select name="country" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select Country
                </option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </label>
            <label className="reg-label">
              State:<span className="reg-required">*</span>
              <select name="state" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select State
                </option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Delhi</option>
              </select>
            </label>
            <label className="reg-label">
              City:<span className="reg-required">*</span>
              <select name="city" required onChange={handleChange}>
                <option value="" disabled selected>
                  Select City<span>*</span>
                </option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </label>
          </div>
          <div className="reg-input-row full-width">
            <label className="reg-label">
              Permanent Address:<span className="reg-required">*</span>
              <label className="copy_add">
                <input
                  type="checkbox"
                  checked={sameAsCurrent}
                  onChange={handleCheckboxChange}
                />
                Same as Current Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                required
                placeholder="Enter Your Permanent Address"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* Experience & Higher Studies */}
          <h3 className="reg-section-title">Experience & Higher Studies</h3>
          <label className="reg-label reg-Working_Status">
            Working Status<span  className="reg-required">*</span>
          </label>
          <div className="reg-Working_options">
            <labe className="reg-label-1">
              <input
                type="radio"
                name="workingStatus"
                value="Employed"
                required
                checked={formData.workingStatus === "Employed"}
                onChange={handleChange}
              />{" "}
              Is Working
            </labe>
            <label className="reg-label-1">
              <input
                type="radio"
                name="workingStatus"
                value="Higher Studies"
                required
                checked={formData.workingStatus === "Higher Studies"}
                onChange={handleChange}
              />{" "}
              Is Pursuing Higher Studies
            </label>
            <label className="reg-label-1">
              <input
                type="radio"
                name="workingStatus"
                value="Self Employed"
                required
                checked={formData.workingStatus === "Self Employed"}
                onChange={handleChange}
              />{" "}
              Is Self Employed
            </label>
          </div>

          {/* Socials */}
          <h3 className="reg-section-title">Socials</h3>
          <div className="reg-input-grid">
            <label className="reg-label">
              LinkedIn:<span className="reg-required">*</span>
              <input
                type="url"
                placeholder="Enter you LinkedIn Profile Link"
                name="linkedIn"
                required
                onChange={handleChange}
              />
            </label>
            <label className="reg-label">
              Facebook:
              <input type="url" placeholder="Enter you Facebook Profile Link" />
            </label>
            <label className="reg-label">
              Instagram:
              <input
                type="url"
                placeholder="Enter you Instagram Profile Link"
              />
            </label>
            <label className="reg-label">
              Website:
              <input
                type="url"
                placeholder="Enter your Personal Portfolio Website "
              />
            </label>
          </div>
          <div className="reg-full-width reg-file-upload">
            <span className="reg-file-name">
              {formData.profilePicture
                ? formData.profilePicture.name
                : "Choose your Profile Picture "}
            </span>
            <label className="reg-browse-btn">
              Browse
              <input type="file" name="profilePicture"  onChange={handleChange} />
            </label>
          </div>
          {errors.profilePicture && <p className="reg-error-message">{errors.profilePicture}</p>}

          <div className="reg-input-grid">
          <label className="reg-label">
              Set Password:<span className="reg-required">*</span>
              <input
                type="password"
                placeholder="Set your password"
                name="password"
                required
                onChange={handleChange}
              />
              {errors.password && <p className="reg-error-message">{errors.password}</p>}
            </label>

            <label className="reg-label">
              Confirm Password:<span className="reg-required">*</span>
              <input
                type="password"
                placeholder="Confirm your password"
                name="confirmpassword"
                required
                onChange={handleChange}
              />
              {errors.confirmpassword && <p className="reg-error-message">{errors.confirmpassword}</p>}
            </label>
            </div>

          {/* Checkbox */}
          <label className="reg-checkbox-container">
            <input
              type="checkbox"
              name="agreement"
              required
              onChange={handleChange}
            />
            I will update my information at regular inetrvals and will engage in the Alumni network actively
            <span  className="reg-required">*</span>
          </label>

          

          <button className="reg-submit" type="submit" >Submit</button>
        </form>
      </div>
    </>
  );
}
