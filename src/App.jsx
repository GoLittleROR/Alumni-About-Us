import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentTable from './components/StudentTable';
import Alumni from './components/Alumni';
import Representative from './components/Representative';
import Gallery from './components/Gallery';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <StudentTable />;
      case 'alumni':
        return <Alumni />;
      case 'representative':
        return <Representative />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="container">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="student-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;