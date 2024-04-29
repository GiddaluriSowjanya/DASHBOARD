// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <hr />
      <ul>
        <li>Dashboard Overview</li>
        <li>Sidebar Navigation</li>
        <li>User Management</li>
        <li>Content Management</li>
        <li>Settings</li>
        <li>Analytics and Reporting</li>
        <li>Help/Support</li>
      </ul>
    </div>
  );
}

export default Sidebar;
