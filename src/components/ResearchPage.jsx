import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ResearchPage.css';
import Footer from './Footer';

const ProjectSpotlight = ({ project }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="project-spotlight">
      <div className="spotlight-content">
        <div className="spotlight-media">
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className={`spotlight-video ${isVideoLoaded ? 'loaded' : ''}`}
            >
              <source src={project.videoUrl} type="video/mp4" />
              <div className="video-placeholder">
                <div className="placeholder-icon">🎬</div>
                <p>Demo Video Loading...</p>
              </div>
            </video>
          </div>
        </div>
        
        <div className="spotlight-info">
          <div className="spotlight-badge">Featured Project</div>
          <h3 className="spotlight-title">{project.title}</h3>
          <p className="spotlight-description">{project.description}</p>
          
          <div className="spotlight-features">
            {project.features.map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
          </div>
          
          <div className="spotlight-actions">
            <a href={project.demoUrl} className="demo-button primary" target="_blank" rel="noopener noreferrer">
              <span>Visit Site</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={project.githubUrl} className="demo-button secondary" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="currentColor"/>
              </svg>
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Publication = ({ publication }) => (
  <div className="publication">
    {publication.image && (
      <div className="publication-image-container">
        <img src={publication.image} alt={publication.title} className="publication-image" />
      </div>
    )}
    <div className="publication-content">
      <div className="publication-header">
        <h3 className="publication-title">{publication.title}</h3>
        <div className="publication-venue">{publication.venue}</div>
      </div>
      
      <div className="publication-authors">{publication.authors}</div>
      
      <div className="publication-abstract">
        {publication.abstract}
      </div>
      
      <div className="publication-links">
        {publication.links.paper && (
          publication.links.paper === "coming-soon" ? (
            <span className="publication-link disabled">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2V14H12V6L8 2H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Paper (Coming Soon)</span>
            </span>
          ) : (
            <a href={publication.links.paper} className="publication-link" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2V14H12V6L8 2H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Paper</span>
            </a>
          )
        )}
        {/* GitHub and Demo links remain the same */}
        {publication.links.github && (
          <a href={publication.links.github} className="publication-link" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="currentColor"/>
            </svg>
            <span>Code</span>
          </a>
        )}
        {publication.links.demo && (
          <a href={publication.links.demo} className="publication-link" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 8L8 4V12L12 8Z" fill="currentColor"/>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ResearchPage = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const profileData = {
    email: "jag569@cornell.edu",
    links: {
      linkedin: "https://linkedin.com/in/jadongeathers",
      scholar: "https://scholar.google.com/citations?user=yourID",
      github: "https://github.com/jadongeathers"
    }
  };

  const featuredProject = {
    title: "ChitterChatter",
    description: "AI-powered speaking partners for language learning classrooms. Educators create curriculum-aligned, voice-enabled conversation activities that adapt to student needs and promote confident speaking practice.",
    features: ["Voice Recognition", "Curriculum Alignment", "Real-time Feedback", "Adaptive Learning"],
    videoUrl: "images/ChitterChatter Demo.mp4", // Update with actual video path
    demoUrl: "https://chitterchatter.app", // Update with actual demo URL
    githubUrl: "https://github.com/jadongeathers/ChitterChatter"
  };

  const publications = [
    {
      title: "ChitterChatter: Curriculum-Aligned AI Speaking Partners for Language Learning Classrooms",
      venue: "Proceedings of the Twelfth ACM Conference on Learning @ Scale (L@S '25)",
      authors: "Jadon Geathers, AJ Alvero, René F. Kizilcec",
      abstract: "ChitterChatter addresses the challenge of limited speaking practice in language learning by providing an AI-powered tool that enables instructors to create curriculum-aligned, voice-enabled conversation activities for students. Built on OpenAI's Realtime API and designed through iterative feedback from language education experts, ChitterChatter offers personalized, adaptive speaking practice while maintaining a judgment-free environment that promotes student comfort and confidence.",
      image: "images/l@s2025_chitterchatter.png",
      links: {
        paper: "coming-soon",
        github: "https://github.com/jadongeathers/ChitterChatter"
      }
    },
    {
      title: "What Medical Students Need from Simulation: Insights to Guide Scalable Learning Design",
      venue: "Proceedings of the Twelfth ACM Conference on Learning @ Scale (L@S '25)",
      authors: "Jadon Geathers*, Yann Hicke*, Naphasjutha Kongsonthana, Justin Sewell, Anyanate Gwendolyne Jack, Dennis Shung, MacKenzi Preston, Susannah Cornes, René F. Kizilcec",
      abstract: "Through semi-structured interviews with ten medical students across three U.S. institutions, we examined how students engage with simulation-based learning (SBL) within their broader learning contexts. Our thematic analysis identified adaptive learning strategies developed in response to time constraints, limited formal guidance, and a fragmented educational landscape. This study provides critical learner-centered design insights intended to inform the development of scalable solutions—particularly digital or AI-driven platforms—that can address these limitations and better support learning in high-pressure professional education.",
      image: "images/l@s2025_medical.png",
      links: {
        paper: "coming-soon"
      }
    },
    {
      title: "Benchmarking Generative AI for Scoring Medical Student Interviews in Objective Structured Clinical Examinations (OSCEs)",
      venue: "Proceedings of the 25th International Conference on Artificial Intelligence in Education (AIED '25)",
      authors: "Jadon Geathers*, Yann Hicke*, Colleen Chan, Niroop Rajashekar, Sarah Young, Justin Sewell, Susannah Cornes, René F. Kizilcec, Dennis Shung",
      abstract: "This study explored the potential of large language models (LLMs) to automate OSCE evaluations using the Master Interview Rating Scale (MIRS). We compared the performance of four state-of-the-art LLMs (GPT-4o, Claude 3.5, Llama 3.1, and Gemini 1.5 Pro) in evaluating OSCE transcripts across all 28 items of the MIRS under various prompting conditions. Our work provides a baseline performance assessment for LLMs that lays a foundation for future research into automated assessment of clinical communication skills.",
      image: "images/aied2025.png",
      links: {
        paper: "coming-soon"
      }
    },
    {
      title: "Grading and Clustering Student Programs That Produce Probabilistic Output",
      venue: "Proceedings of the 17th International Conference on Educational Data Mining (EDM '24)",
      authors: "Yunsung Kim*, Jadon Geathers*, Chris Piech",
      abstract: "StochasticGrade is an open-source framework for automatically grading stochastic programs. Compared to standard two-sample hypothesis testing, it offers significant improvements in accuracy, exponential improvements in speed, control over grading error rates, and clustering of student programs by error type. We demonstrate its effectiveness using data from introductory programming assignments and provide practical guidelines for implementation.",
      image: "images/edm2024.png",
      links: {
        paper: "https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.4/",
        github: "https://github.com/yunsungkim0908/stochasticgrade"
      }
    }
  ];

   useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="research-page">
      <div className={`research-content ${contentVisible ? 'fade-in' : ''}`}>
        {/* Research Header */}
        <div className="research-container">
          <header className="research-header">
            <h1 className="research-title">Research</h1>
            <p className="research-subtitle">
              My research develops AI-powered conversational agents that enhance learning through authentic, personalized interactions. Grounded in learning sciences principles, I focus on creating educational technologies that provide immediate, adaptive feedback and bridge the gap between traditional classroom instruction and scalable practice opportunities—particularly in areas where students need safe environments to build confidence through repeated, deliberate practice.
            </p>
            <p className="research-note">* indicates equal contribution</p>
          </header>
        </div>

        {/* Project Spotlight - Full width */}
        <ProjectSpotlight project={featuredProject} />
        
        {/* Publications Section */}
        <div className="research-container">
          <section className="publications-section">
            <h2>Publications</h2>
            <div className="publications-list">
              {publications.map((pub, index) => (
                <Publication key={index} publication={pub} />
              ))}
            </div>
          </section>
        </div>
        
        {/* Research Footer - Full width */}
        <footer className="research-footer">
          <div className="footer-container">
            <h2>Let's Collaborate</h2>
            <p>
              I'm actively seeking collaborations with learning scientists, educators, and technologists working on feedback systems, conversational AI for education, or scalable learning technologies.
            </p>
            <div className="collaboration-types">
              <span className="collab-tag">Learning Sciences</span>
              <span className="collab-tag">Feedback Systems</span>
              <span className="collab-tag">Educational AI</span>
              <span className="collab-tag">Formative Assessment</span>
              <span className="collab-tag">Conversation Design</span>
              <span className="collab-tag">User Studies</span>
            </div>
            <a href="mailto:jag569@cornell.edu" className="contact-link">Start a conversation →</a>
          </div>
        </footer>
      </div>

      <Footer profileData={profileData} />
    </div>
  );
};

export default ResearchPage;