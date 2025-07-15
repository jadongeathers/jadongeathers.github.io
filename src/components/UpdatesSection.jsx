import React from 'react';

const UpdatesSection = ({ updates }) => (
  <div>
    <h3 style={{marginTop: '50px'}}>What's New?</h3>
    <ul className="updates-list">
      {updates.map((update, index) => (
        <li key={index}>
          <span className="date-box">{update.date}</span>
          <span className="update-text">{update.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default UpdatesSection;