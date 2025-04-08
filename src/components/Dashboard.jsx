import React, { useState, useEffect } from "react";
import "./Dashboard.css";

// Reusable counter component with slower animation
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000; // 2 seconds for slower animation
    const incrementTime = 30;
    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target]);

  return <h1>{count}</h1>;
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="total-std">
        <h2>Total Number of Students</h2>
        <Counter target={300} />
      </div>
      <div className="total-std">
        <h2>Total Number of Alumni</h2>
        <Counter target={600} />
      </div>
      <div className="total-std">
        <h2>Total Number of Representatives</h2>
        <Counter target={20} />
      </div>
      <div className="total-std">
        <h2>Upcoming Events</h2>
        <Counter target={4} />
      </div>
      <div className="total-std">
        <h2>Job Posts</h2>
        <Counter target={10} />
      </div>
    </div>
  );
};

export default Dashboard;
