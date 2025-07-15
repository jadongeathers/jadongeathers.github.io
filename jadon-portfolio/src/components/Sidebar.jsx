import React from 'react';

const Sidebar = ({ data, isVisible }) => (
  <div className={`sidebar ${isVisible ? 'fade-in' : ''}`}>
    <div className="profile-picture-container">
      <img src={data.profileImage} alt={data.name} className="profile-picture" />
    </div>
    <h3>{data.name}</h3>
    <p className="sidebar-bio">{data.title}</p>
    <div className="links">
      <ul>
        <li>
          <i className="fas fa-map-marker-alt" style={{color: '#960A0A'}}></i>
          {data.location}
        </li>
        <li>
          <i className="fas fa-envelope" style={{color: '#7d7d7d'}}></i>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </li>
        <li>
          <i className="fab fa-linkedin" style={{color: '#0077B5'}}></i>
          <a href={data.links.linkedin}>LinkedIn</a>
        </li>
        <li>
          <i className="fas fa-graduation-cap" style={{color: '#4285F4'}}></i>
          <a href={data.links.scholar}>Google Scholar</a>
        </li>
        <li>
          <i className="fab fa-github" style={{color: '#333'}}></i>
          <a href={data.links.github}>GitHub</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;