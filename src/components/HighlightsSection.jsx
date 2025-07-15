import React from 'react';
import './HighlightsSection.css';

const HighlightCard = ({ highlight }) => (
  <div className="highlight-card">
    <div className="highlight-image-container">
      {highlight.youtubeId ? (
        // YouTube thumbnail
        <img 
          src={`https://img.youtube.com/vi/${highlight.youtubeId}/maxresdefault.jpg`} 
          alt={highlight.title} 
          className="highlight-image" 
        />
      ) : highlight.type === 'video' ? (
        // Custom video thumbnail
        <img src={highlight.thumbnail} alt={highlight.title} className="highlight-image" />
      ) : (
        // Regular image
        <img src={highlight.image} alt={highlight.title} className="highlight-image" />
      )}
    </div>
    
    <div className="highlight-content">
      <h3 className="highlight-title">{highlight.title}</h3>
      <p className="highlight-description">{highlight.description}</p>
      
      <div className="highlight-meta">
        <span className="highlight-date">{highlight.date}</span>
        {highlight.source && (
          <span className="highlight-source">{highlight.source}</span>
        )}
      </div>
      
      <div className="highlight-links">
        {highlight.link && (
          <a 
            href={highlight.link} 
            className="highlight-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {highlight.linkText || 'Learn More'} 
            <i className="fas fa-external-link-alt"></i>
          </a>
        )}
        {highlight.secondaryLink && (
          <a 
            href={highlight.secondaryLink.url} 
            className="highlight-link secondary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {highlight.secondaryLink.text}
            <i className="fas fa-external-link-alt"></i>
          </a>
        )}
      </div>
    </div>
  </div>
);

const HighlightsSection = () => {
  const highlights = [
    {
      category: "Award",
      title: "BOOM Contest Winner",
      description: "The Bits On Our Minds (BOOM) Award was judged by the Bowers College of Computing and Information Science Faculty and the BOOM Committee for the project that stood out at this year's event: ChitterChatter, receiving $1000.",
      date: "2025",
      source: "Cornell University",
      image: "images/boom_25.jpg", // You'll need to add this image
      link: "https://cis.cornell.edu/about/outreach-events/boom-bits-our-minds/awards/boom-2025-award-recipients",
      linkText: "Read More"
    },
{
      category: "Recognition",
      title: "Stanford: Meet Jadon Geathers",
      description: "As a kid, Jadon Geathers, ’24, realized that competing in taekwondo wasn’t a good fit for him, and instead took up piano. At Stanford, he had a similar revelation about his initial major of physics.",
      date: "2023",
      source: "Stanford University",
      type: "video",
      thumbnail: "images/stanford_feature2.jpg", // Changed from 'image' to 'thumbnail'
      link: "https://youtu.be/8E-havdtCRM?si=vsREdc-pH2Pvtr1q",
      linkText: "Watch Video"
    },
    {
    category: "Performance",
    title: "A Musical Moment at Stanford",
    description: "A musical moment with math and computer science major Jadon Geathers, playing his rendition of 'Silent Night' on the piano.",
    date: "2024",
    source: "Stanford University",
    type: "video",
    youtubeId: "pr_37VwDFJU", // YouTube video ID
    link: "https://www.youtube.com/watch?v=pr_37VwDFJU",
    linkText: "Watch Video"
    }
  ];

  return (
    <div className="highlights-section">
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <HighlightCard key={index} highlight={highlight} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;