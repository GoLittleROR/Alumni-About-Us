import React from 'react';
import './StudentTable.css';

const StudentTable = () => {
  // Sample student data
  const students = [
    { name: 'Abhi Yamgar', email: 'john@example.com', branch: 'Computer Science', year: '2nd Year' },
    { name: 'Abhi Yamgar', email: 'jane@example.com', branch: 'Electrical Engineering', year: '3rd Year' },
    { name: 'Abhi Yamgar', email: 'robert@example.com', branch: 'Mechanical Engineering', year: '1st Year' },
    { name: 'Abhi Yamgar', email: 'emily@example.com', branch: 'Civil Engineering', year: '4th Year' },
    { name: 'Abhi Yamgar', email: 'michael@example.com', branch: 'Information Technology', year: '2nd Year' },
  ];

  return (
    <>
      <h2>Home &gt; <span className="logo-light">Students</span></h2>
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr className="table-header">
              <th>Name</th>
              <th>Email ID</th>
              <th>Branch</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.branch}</td>
                <td>{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;