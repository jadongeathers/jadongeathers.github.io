import React, { useState, useEffect } from 'react'; // Add useState and useEffect
import './CVPage.css';
import Footer from './Footer'; 

const CVPage = () => {
  const [contentVisible, setContentVisible] = useState(false); // Add state

  const cvEmbedUrl = "https://docs.google.com/document/d/14VqLZ8Ljj4cNjYYUkUf3jQHc5wiS2uF03aIAbE0Hz-0/preview";
  const cvDirectUrl = "https://docs.google.com/document/d/14VqLZ8Ljj4cNjYYUkUf3jQHc5wiS2uF03aIAbE0Hz-0/edit?usp=sharing";
  const profileData = {
    email: "jag569@cornell.edu",
    links: {
      linkedin: "https://linkedin.com/in/jadongeathers",
      scholar: "https://scholar.google.com/citations?user=yourID",
      github: "https://github.com/jadongeathers"
    }
  };

  // Add useEffect for animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cv-page">
      <div className={`cv-container ${contentVisible ? 'fade-in' : ''}`}> {/* Add fade-in class */}
        <header className="cv-header">
          <h1 className="cv-title">Curriculum Vitae</h1>
          <p className="cv-subtitle">
            This is my current CV, updated regularly. For the best viewing experience or to download, please open it in a new tab.
          </p>
          <div className="cv-actions">
            <a href={cvDirectUrl} className="cv-button primary" target="_blank" rel="noopener noreferrer">
              Open in New Tab
            </a>
          </div>
        </header>

        <div className="cv-preview-wrapper">
          <iframe
            src={cvEmbedUrl}
            className="cv-iframe"
            title="Jadon Geathers' Curriculum Vitae"
            frameBorder="0"
          >
            Loading CV...
          </iframe>
        </div>
      </div>

      <Footer profileData={profileData} />
    </div>
  );
};

export default CVPage;