import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicHeader from './components/DynamicHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HighlightsSection from './components/HighlightsSection';
import VisitorMap from './components/VisitorMap';
import ResearchPage from './components/ResearchPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CVPage from './components/CVPage';

// Profile Data
const profileData = {
  name: "Jadon Geathers",
  title: "Information Science PhD Student, Cornell University",
  email: "jag569@cornell.edu",
  links: {
    linkedin: "https://linkedin.com/in/jadongeathers",
    scholar: "https://scholar.google.com/citations?user=jadongeathers",
    github: "https://github.com/jadongeathers"
  },
  profileImage: "images/professional_headshot.jpg"
};

// Home Page Component
const HomePage = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Animate content on load
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="full-width-container">
      <HeroSection />
      <div className={`main-content ${contentVisible ? 'fade-in' : ''}`}>
        <div id="about">
          <AboutSection profileData={profileData} />
        </div>
      </div>
      <div id="highlights">
        <HighlightsSection />
      </div>
        <Footer profileData={profileData} />
    </div>
  );
};

// Main App Component with Routing
const App = () => {
  // Get the base URL from the environment or current location
  const basename = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <DynamicHeader profileData={profileData} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/cv" element={<CVPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;