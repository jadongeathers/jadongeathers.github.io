// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-image-container">
      <img
        src="images/blackboard.JPG"
        alt="Jadon Geathers working at blackboard with excitement"
        className="hero-image"
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Jadon Geathers</h1>
          <div className="hero-statement">
            <p className="hero-subtitle">PhD Student in Information Science</p>
            <p className="hero-affiliation">Cornell University</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;