// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Company Logo</div>
            <div className="nav">
                <ul>
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Content</li>
                    <li>Settings</li>
                    <li>Analytics</li>
                    <li>
                        <div className="profile-dropdown">Profile Dropdown</div>
                    </li>
                </ul>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    );
}

export default Header;
