import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = ({ profileData }) => (
  <div className="about-container">
    {/* Column 1: Text content */}
    <div className="about-content-wrapper">
      <h3 className="about-title">About</h3>
      <p>
        <strong>Jadon Geathers</strong> is an Information Science PhD student at Cornell University, where he develops AI-powered conversational agents that enhance learning through authentic, personalized interactions. Grounded in learning sciences principles, his research focuses on creating educational technologies that provide immediate, adaptive feedback and bridge the gap between traditional classroom instruction and scalable practice opportunities.
      </p>
      <p>
        His work particularly targets areas where students need safe environments to build confidence through repeated, deliberate practice. Through iterative design with domain experts and comprehensive user studies, Jadon demonstrates how AI conversational agents can address fundamental challenges in education while maintaining the personalized support that learners need to thrive.
      </p>
      <p>
        Jadon is a member of the Future of Learning Lab, where he is advised by Professor René Kizilcec. As a Graduate School Dean's Scholar, his research is generously supported by the Bowers CIS Dean's Excellence and Hopper-Dean Fellowship. He completed his MS in Computer Science and BS in Mathematics at Stanford University.
      </p>
    </div>

    {/* Column 2: Image & Buttons */}
    <div className="about-image-column">
      <img
        src="images/professional-headshot-cropped.png"
        alt={profileData.name}
        className="about-profile-picture"
      />
      <div className="about-button-group">
        <Link to="/research" className="about-action-button primary">
          Learn About My Research
        </Link>
        <a href={`mailto:${profileData.email}`} className="about-action-button secondary">
          Contact Me
        </a>
      </div>
    </div>
  </div>
);

export default AboutSection;