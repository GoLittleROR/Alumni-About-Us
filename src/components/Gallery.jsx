import React from "react";
import "./Gallery.css";
import bg1 from "../assets/bg1.jfif";
import bg2 from "../assets/bg2.jfif";
import bg3 from "../assets/bg3.jfif";
import bg4 from "../assets/bg4.jfif";
import bg5 from "../assets/bg5.jfif";
import event1 from "../assets/event1.webp";
import event2 from "../assets/event2.jfif";
import event3 from "../assets/event3.jfif";
import event4 from "../assets/event4.jfif";
import event5 from "../assets/event5.jfif";
import event7 from "../assets/event7.jfif";

const Gallery = () => {
  // Create an array of the imported image variables
  const images = [
    bg1, bg2, bg3, bg4, bg5, 
    event1, event2, event3, event4, event5, event7
  ];

  return (
    <div className="gallery-container">
      <h2>
        Home &gt; <span className="logo-light">Gallery</span>
      </h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;