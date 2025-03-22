import React from "react";
import "./InfoCircles.css";

const InfoCircles = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h2 className="highlight">ABOUT US</h2>
        <h1>Stay Connected, Stay Inspired!</h1>
        <p>
        Welcome to our vibrant alumni community, where memories live on and new opportunities begin.Let’s celebrate our achievements, share experiences, and build a future together!
        </p>
        <div className="buttons">
          <button className="order-btn">Join Now</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="circle black">
        <div className="content">
          <h2 className="UnderLine">🎯 Mission</h2>
          <p>
            Empower the next generation of engineers with innovation, knowledge,
            and leadership. Blend theoretical excellence with hands-on
            experience for real-world problem-solving. Foster research, industry
            collaborations, and lifelong learning. Shape engineers who drive
            progress and make a lasting impact on society.
          </p>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="circle white">
        <div className="content">
          <h2 className="UnderLine">🌍 Vision</h2>
          <p>
            Become a globally recognized center of excellence in engineering
            education & research. Produce graduates who lead technological
            advancements and drive sustainable development.
          </p>
        </div>
      </div>

      {/* History of Alumni Association */}
      <div className="circle pink">
        <div className="content">
          <h2 className="UnderLine">📜 History </h2>
          <p>
            Founded with the vision of strengthening lifelong bonds between
            alumni and the institution. Started as a small network of passionate
            graduates, now grown into a thriving global community. Dedicated to
            fostering connections, professional growth, and giving back to the
            alma mater.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="circle gray">
        <div className="content">
          <h2 className="UnderLine">🌟 Core Values</h2>
          <p>
            Excellence & Innovation <br />
            Collaboration & Networking <br />
            Social Impact & Leadership
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCircles;
