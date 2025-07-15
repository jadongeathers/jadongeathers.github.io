import React from 'react';

const Publication = ({ publication }) => (
  <div className="publication">
    <img src={publication.image} alt={publication.title} className="publication-image" />
    <div className="publication-details">
      <h4 className="publication-title">{publication.title}</h4>
      <p className="publication-authors">{publication.authors}</p>
      <p className="publication-bio">{publication.bio}</p>
      <div className="publication-links">
        {publication.links.paper && (
          <a href={publication.links.paper} className="publication-link">Paper</a>
        )}
        {publication.links.github && (
          <a href={publication.links.github} className="publication-link">GitHub</a>
        )}
      </div>
    </div>
  </div>
);

const ResearchSection = ({ publications }) => (
  <div>
    <h3 style={{marginTop: '50px'}}>Research</h3>
    <p style={{marginTop: '-10px', color: '#818181'}}>* indicates equal contribution.</p>
    {publications.map((pub, index) => (
      <Publication key={index} publication={pub} />
    ))}
  </div>
);

export default ResearchSection;