import React from "react";
import "./Alumni.css";

const Alumni = () => {
  // Sample alumni data
  const alumni = [
    {
      name: "Abhi Yamgar",
      email: "alex@example.com",
      branch: "Computer Science",
      year: "2020",
      company: "Google",
    },
    {
      name: "Abhi Yamgar",
      email: "sarah@example.com",
      branch: "Electrical Engineering",
      year: "2019",
      company: "Microsoft",
    },
    {
      name: "Abhi Yamgar",
      email: "david@example.com",
      branch: "Mechanical Engineering",
      year: "2021",
      company: "Tesla",
    },
    {
      name: "Abhi Yamgar",
      email: "lisa@example.com",
      branch: "Civil Engineering",
      year: "2018",
      company: "Amazon",
    },
    {
      name: "Abhi Yamgar",
      email: "james@example.com",
      branch: "Information Technology",
      year: "2022",
      company: "Apple",
    },
  ];

  return (
    <>
      <h2>
        Home &gt; <span className="logo-light">Alumni</span>
      </h2>
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr className="table-header">
              <th>Name</th>
              <th>Email ID</th>
              <th>Branch</th>
              <th>Passing Year</th>
              <th>Company name</th>
            </tr>
          </thead>
          <tbody>
            {alumni.map((alumnus, index) => (
              <tr key={index}>
                <td>{alumnus.name}</td>
                <td>{alumnus.email}</td>
                <td>{alumnus.branch}</td>
                <td>{alumnus.year}</td>
                <td>{alumnus.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Alumni;
