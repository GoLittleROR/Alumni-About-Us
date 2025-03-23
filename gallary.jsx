import React from "react";
import "./gallery.css";

const GalleryPage = () => {
  // Sample image URLs - replace with your actual images
  const images = [
    "src/assets/first.jfif",
    "src/assets/event5.jfif",
    "src/assets/third.jfif",
    "src/assets/National-Level-Technical-Fest.jpg",
    "src/assets/fifth.jfif",
    "src/assets/sixth.jfif",
    "src/assets/seventh.jfif",
    "src/assets/eight.jfif",
    "src/assets/tenth.jfif",
    "src/assets/eleven.jfif",
    "src/assets/twelve.jfif",
    "src/assets/fourth.jfif",
    "src/assets/event1.webp",
    "src/assets/event3.jfif",
    "src/assets/events8.jfif",
    "src/assets/second.jfif",
  ];

  const technologies = [
    {
      id: 1,
      name: "React",
      image: "src/assets/event4.jfif",
      description: "A JavaScript library for building user interfaces with a component-based architecture and efficient DOM updates."
    },
    {
      id: 2,
      name: "Node.js",
      image: "src/assets/tech Events.jpg",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications."
    },
    {
      id: 3,
      name: "GraphQL",
      image: "src/assets/sporting-event.jpg",
      description: "A query language for APIs that gives clients the power to ask for exactly what they need and nothing more."
    },
    {
      id: 4,
      name: "Docker",
      image: "src/assets/fluid-technology (1).jpg",
      description: "A platform for developing, shipping, and running applications in containers for consistent environments."
    }
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallary</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={`gallery-image image${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="order-btn">Add image</button>
        <button className="contact-btn">Remove image</button>
      </div>

      <div className="technologies-page">
      <h1 className="page-heading">Upcomming Events</h1>
      <div className="grid-container">
        {technologies.map((tech) => (
          <div key={tech.id} className="grid-item">
            <div className="image-container">
              <img 
                src={tech.image} 
                alt={tech.name} 
                className="tech-image" 
              />
            </div>
            <h2 className="tech-name">{tech.name}</h2>
            <p className="tech-description">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="event-buttons">
        <button className="event-order-btn">Add image</button>
        <button className="event-contact-btn">Remove image</button>
      </div>
    </div>
  );
};

export default GalleryPage;
