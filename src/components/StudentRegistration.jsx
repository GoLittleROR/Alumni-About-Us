import React from "react";
import "./StudentRegistration.css";
// Import the student image
import studentImage from "../assets/studentAitReg.jpg";

const StudentRegistration = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>Registration Form</h1>
        <p>Join our alumni network to reconnect, share, and grow together!</p>
        <div className="image">
          <img src={studentImage} alt="Students with laptops" />
        </div>
      </div>
      <div className="form">
        <div className="name-grp">
          <label htmlFor="fullName" id="FName">
            Full Name
          </label>
          <div className="name-input">
            <div className="name-label">
              <input
                type="text"
                name="firstName"
                id="fname"
                placeholder="Enter your first name"
              />
              <label htmlFor="firstName" className="firstandlast">
                First Name
              </label>
            </div>
            <div className="name-label">
              <input
                type="text"
                name="lastName"
                id="lname"
                placeholder="Enter your last name"
              />
              <label htmlFor="lastName" className="firstandlast">
                Last Name
              </label>
            </div>
          </div>
        </div>
        <div className="address">
          <label htmlFor="address" id="Address">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="add"
            placeholder="Enter your address"
          />
          <label htmlFor="currentAddress" id="current">
            Current Address
          </label>
        </div>
        <div className="email-grp">
          <div className="email-input">
            <div className="email-label">
              <label htmlFor="contact" className="contactInfo">
                Phone Number
              </label>
              <input type="tel" name="contact" id="telnumber" />
              <label htmlFor="email" id="Email">
                Current contact number
              </label>
            </div>
            <div className="email-label">
              <label htmlFor="email" className="contactInfo">
                E-mail
              </label>
              <input type="email" name="email" id="email" />
              <label htmlFor="email" id="Email">
                example@example.com
              </label>
            </div>
          </div>
        </div>
        <div className="email-grp">
          <div className="email-input">
            <div className="email-label">
              <label htmlFor="branch" className="contactInfo">
                Branch
              </label>
              <input type="text" name="branch" id="branch" />
            </div>
            <div className="email-label">
              <label htmlFor="passingyear" className="contactInfo">
                Class
              </label>
              <input type="text" name="branch" id="class" />
              <label htmlFor="email" id="Email">
                Which class are you currently studying?
              </label>
            </div>
          </div>
        </div>
        <div className="address">
          <label htmlFor="LinkedIn" id="Address">
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Enter your LinkedIn URL"
          />
          <label htmlFor="linkedinUrl" id="current">
            LinkedIn URL
          </label>
        </div>
        <div className="address">
          <label htmlFor="Facebook" id="Address">
            Facebook
          </label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            placeholder="Enter your Facebook URL"
          />
          <label htmlFor="facebookUrl" id="current">
            Facebook URL
          </label>
        </div>
        <div className="address">
          <label htmlFor="insta" id="Address">
            Instagram
          </label>
          <input
            type="text"
            name="instagram"
            id="insta"
            placeholder="Enter your Instagram URL"
          />
          <label htmlFor="instagramUrl" id="current">
            Instagram URL
          </label>
        </div>
        <div className="buttons">
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
