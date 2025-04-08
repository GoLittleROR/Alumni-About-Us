import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActivePage, activePage }) => {
  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="sidebar">
      <h1 className="logo">Campus Connect</h1>
      <ul className="nav-list">
        <li 
          className={activePage === 'dashboard' ? 'active' : ''} 
          onClick={() => handleNavClick('dashboard')}
        >
          <i className="fa-solid fa-square-poll-vertical icon"></i>Dashboard
        </li>
        <li 
          className={activePage === 'students' ? 'active' : ''} 
          onClick={() => handleNavClick('students')}
        >
          <i className="fa-solid fa-user-graduate icon"></i>Students
        </li>
        <li 
          className={activePage === 'alumni' ? 'active' : ''} 
          onClick={() => handleNavClick('alumni')}
        >
          <i className="fa-solid fa-user-group icon"></i>Alumni
        </li>
        <li 
          className={activePage === 'representative' ? 'active' : ''} 
          onClick={() => handleNavClick('representative')}
        >
          <i className="fa-solid fa-user-tie icon"></i>Representative
        </li>
        <li 
          className={activePage === 'events' ? 'active' : ''} 
          onClick={() => handleNavClick('events')}
        >
          <i className="fa-solid fa-calendar-check icon"></i>Events
        </li>
        <li 
          className={activePage === 'gallery' ? 'active' : ''} 
          onClick={() => handleNavClick('gallery')}
        >
          <i className="fa-solid fa-images icon"></i>Gallery
        </li>
      </ul>

      <div className="logout">
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Sidebar;