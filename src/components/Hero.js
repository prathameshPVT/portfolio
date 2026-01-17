import React from 'react';

const Hero = ({ config }) => {
  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = config.RESUME_URL;
    link.download = 'prathamesh.pdf';
    link.click();
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="grid-overlay"></div>
      <div className="hero-content">
        <span className={`hero-tag ${config.OPEN_TO_WORK ? 'available' : 'not-available'}`}>
          {config.OPEN_TO_WORK ? config.AVAILABLE_MESSAGE : config.NOT_AVAILABLE_MESSAGE}
        </span>
        <h1>
          Hey, I'm <span className="highlight">{config.NAME}</span><br />
          Software Engineer
        </h1>
        <p className="hero-description">
Senior Backend Engineer with 4+ years of experience building scalable systems using Python, FastAPI, MongoDB, Redis, and AWS. I design real-time applications with streaming architectures, optimize database performance, and build robust APIs serving production workloads.Generative AI engineering with hands-on experience in LLM APIs, LangChain, and RAG systems.        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
            <span>Get In Touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <button className="btn btn-secondary" onClick={handleDownloadResume}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Download Resume</span>
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">4+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
