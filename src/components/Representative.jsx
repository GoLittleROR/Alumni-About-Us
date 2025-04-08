import React from "react";
import "./Representative.css";
import bg1 from "../assets/bg1.jfif";
import bg2 from "../assets/bg2.jfif";
import bg3 from "../assets/bg3.jfif";
import bg4 from "../assets/bg4.jfif";
import bg5 from "../assets/bg5.jfif";
import faculty from "../assets/faculty.png";

const mentors = [
  {
    id: 1,
    bgImg: bg1,
    avatar: faculty,
    name: "Abhi Yamgar",
    title: "Doctoral at Oxford",
    description: "Hi, I am Abhi Yamgar, A doctoral at Oxford...",
  },
  {
    id: 2,
    bgImg: bg2,
    avatar: faculty,
    name: "Abhi Yamgar",
    title: "Doctoral at Oxford",
    description: "Hi, I am Abhi Yamgar, A doctoral at Oxford...",
  },
  {
    id: 3,
    bgImg: bg3,
    avatar: faculty,
    name: "Abhi Yamgar",
    title: "Doctoral at Oxford",
    description: "Hi, I am Abhi Yamgar, A doctoral at Oxford...",
  },
  {
    id: 4,
    bgImg: bg4,
    avatar: faculty,
    name: "Abhi Yamgar",
    title: "Doctoral at Oxford",
    description: "Hi, I am Abhi Yamgar, A doctoral at Oxford...",
  },
  {
    id: 5,
    bgImg: bg5,
    avatar: faculty,
    name: "Abhi Yamgar",
    title: "Doctoral at Oxford",
    description: "Hi, I am Abhi Yamgar, A doctoral at Oxford...",
  },
  {
    id: 6,
    bgImg: bg1,
    avatar: faculty,
    name: "Abhi Yamgar",
    title: "Doctoral at Oxford",
    description: "Hi, I am Abhi Yamgar, A doctoral at Oxford...",
  },
];

const Representatives = () => {
  return (
    <div className="representatives-wrapper">
      <h2>
        Home &gt; <span className="logo-light">Representatives</span>
      </h2>

      <div className="mentors-grid">
        {mentors.map((mentor) => (
          <div className="mentor-card" key={mentor.id}>
            <div className="mentor-header">
              <img src={mentor.bgImg} alt={mentor.name} className="mentor-bg" />
            </div>
            <div className="mentor-info">
              <img src={mentor.avatar} alt="mentor" className="mentor-avatar" />
              <div className="mentorInfo">
                <h3>{mentor.name}</h3>
                <p>{mentor.title}</p>
                <p>{mentor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Representatives;
