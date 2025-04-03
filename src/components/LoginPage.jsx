import React, { useState } from "react";
import "./LoginPage.css";
import AlumniImage from "../assets/Alumniait.png";
import StudentsImage from "../assets/studentsAITRC.png";
import RepresentativeImage from "../assets/representativeAITRC.png";

const LoginPage = () => {
  const [image, setImage] = useState(AlumniImage); // Default image

  const handleImageChange = (category) => {
    switch (category) {
      case "Alumni":
        setImage(AlumniImage);
        break;
      case "Students":
        setImage(StudentsImage);
        break;
      case "Alumni-Representatives":
        setImage(RepresentativeImage);
        break;
      default:
        setImage(AlumniImage);
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="logo-img">
          <h1>AITRC</h1>
        </div>
        <h3>Welcome back!</h3>
        <p>Stay connected, share memories, and shape the future together!</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />

        <label htmlFor="passw">Password</label>
        <input
          type="password"
          name="passw"
          id="passw"
          placeholder="Enter your password"
        />

        <div className="buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>

      <div className="multiusers">
        <ul>
          <li onClick={() => handleImageChange("Alumni")}>Alumni</li>
          <li onClick={() => handleImageChange("Students")}>Students</li>
          <li onClick={() => handleImageChange("Alumni-Representatives")}>
            Alumni-Representatives
          </li>
        </ul>

        <div className="images">
          <img src={image} alt="Selected Category" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
