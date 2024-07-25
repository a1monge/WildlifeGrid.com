// src/components/Header.js
import React from 'react';
import '../App.css'; // Create this CSS file to hold styles

const Header = () => (
    <header className="birds-ribbon">
        <div className="white-text">
            <a className="nav-link" href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/report-sightings">Report Sighting</a>
            <a href="/map">Map</a>
            <a href="/search">Search</a>
        </div>
    </header>
);

export default Header;
