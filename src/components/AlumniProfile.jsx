import React, { useState } from "react";
import "./AlumniProfile.css";
import profileImage from "../assets/profile.png"; // You'll need to add your profile image

const AlumniaccountSettings = () => {
  const [activeMenu, setActiveMenu] = useState("Account");
  const [formData, setFormData] = useState({
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul92@gmail.com",
    phoneNumber: "+91 123456789",
    deptname: "CSE",
    company: "TCS",
    designation: "UI Developer",
    linkedin: "Rahul Sharma",
    insta: "Rahul23",
    fb: "Rahul Sharma",
    bio: "I am a dedicated Computer Science Engineering Prof. at AITRC, passionate about technology, problem-solving, and software development. With a strong foundation in programming, algorithms, and web development, I aim to build innovative solutions that make an impact.",
    oldPassword: "",
    newPassword: "",
  });

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Render account settings content
  const renderAccountContent = () => {
    return (
      <>
        {/* <h2 className="section-title">Account Settings / Alumni</h2> */}

        <div className="form-container">
          <div className="heading-title">
            <h2 className="section-title">Account Settings / Alumni</h2>
          </div>
        
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                name="deptname"
                value={formData.deptname}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Instagram</label>
              <input
                type="text"
                name="insta"
                value={formData.insta}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Facebook</label>
              <input
                type="text"
                name="fb"
                value={formData.fb}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </div>

          <div className="button-group">
            <button className="update-btn">Update</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      </>
    );
  };

  // Render password settings content
  const renderPasswordContent = () => {
    return (
      <>
        <h2 className="section-title">Password Settings</h2>

        <div className="form-container">
          <div className="form-group full-width">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled
            />
          </div>

          <div className="form-group full-width">
            <label>Old Password</label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleInputChange}
              placeholder="Enter your current password"
            />
          </div>

          <div className="form-group full-width">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter your new password"
            />
          </div>

          <div className="button-group">
            <button className="update-btn">Update Password</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="account-settings-container">
      <div className="account-settings-card">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="profile-section">
            <div className="profile-image">
              <img src={profileImage} alt="Profile" />
            </div>
            <h3 className="profile-name">Rahul Sharma</h3>
          </div>

          <div className="menu-items">
            <div
              className={`menu-item ${
                activeMenu === "Account" ? "active" : ""
              }`}
              onClick={() => handleMenuClick("Account")}
            >
              Account
            </div>
            <div
              className={`menu-item ${
                activeMenu === "Password" ? "active" : ""
              }`}
              onClick={() => handleMenuClick("Password")}
            >
              Password
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="content-section">
          {activeMenu === "Account"
            ? renderAccountContent()
            : renderPasswordContent()}
        </div>
      </div>
    </div>
  );
};

export default AlumniaccountSettings;
