import React from 'react';

const ContactSection = ({ profileData }) => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title">Get In Touch</h3>
          <p className="contact-description">
            I'm always interested in discussing research collaborations, academic opportunities, 
            or just connecting with fellow researchers. Feel free to reach out!
          </p>
          
          <div className="contact-methods">
            <a href={`mailto:${profileData.email}`} className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-value">{profileData.email}</div>
              </div>
            </a>
          </div>
          
          <div className="contact-note">
            <p>
              <strong>Quick response:</strong> I typically respond to emails within 24-48 hours. 
              For urgent matters, please mention it in your subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;