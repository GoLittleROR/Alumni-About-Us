import React from "react";
import "./AlumniDirectory.css";
import alumniImg from "../assets/alumni.jfif";
import alumniHeader from "../assets/alumni heading.jpg";

const alumniList = new Array(9).fill({
  name: "Abhishek Yamgar",
  branch: "CSE",
  year: "2018",
  company: "TCS",
  image: alumniImg,
});

const AlumniDirectory = () => {
  return (
    <div>
      <div className="header-image">
        <img src={alumniHeader} alt="Alumni Header" />
        <div className="header-text">Alumni Directory</div>

        <div className="search-bar">
          <input type="text" placeholder="Search name" />
          <select>
            <option>Department</option>
            <option>CSE</option>
            <option>ENTC</option>
            <option>CIVIL</option>
            <option>MECH</option>
          </select>
          <select>
            <option>Year</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
          </select>
          <select>
            <option>Job</option>
            <option>Private</option>
            <option>Govt.</option>
          </select>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="alumni-container">
        <div className="alumniInfo">
          {alumniList.map((alumnus, index) => (
            <div className="alumni-card" key={index}>
              <div className="image">
                <img src={alumnus.image} alt="Alumnus" />
              </div>
              <div className="alumni-details">
                <p>{alumnus.name}</p>
                <p>branch : {alumnus.branch}</p>
                <p>Passing Year : {alumnus.year}</p>
                <p>Company name : {alumnus.company}</p>
              </div>
              <div className="alumni-media">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-regular fa-message"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
