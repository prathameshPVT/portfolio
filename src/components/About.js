import React from 'react';

const About = () => {
  const highlights = [
    { icon: '🚀', text: 'Scalable Systems' },
    { icon: '🗄️', text: 'DB Optimization' },
    { icon: '⚡', text: 'Real-time APIs' },
    { icon: '🤖', text: 'GenAI Projects' },
  ];

  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Building Backend Excellence</h2>
      </div>
      <div className="about-content">
        <div className="about-text fade-in">
          <p>
            I'm a Senior Software Engineer who loves solving complex backend challenges. 
            Over the past 4+ years, I've built systems across logistics, edtech, and 
            pharmaceutical research — each teaching me something new about scale, 
            performance, and clean architecture.
          </p>
          <p>
            My toolkit includes Python, FastAPI, Django, Node.js for backend work, 
            MongoDB, PostgreSQL, MySQL with Redis for data, and AWS for cloud infrastructure. 
            I'm particularly good at optimizing slow queries, building real-time systems, 
            and integrating third-party APIs.
          </p>
          <p>
            Right now at Ascendion, I'm building Kural — an AI-powered platform for pharma 
            market research. On the side, I run ROOTACCESS.AI (my digital products business) 
            and tinker with algorithmic trading systems.
          </p>
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div className="highlight-item" key={index}>
                <div className="highlight-icon">{item.icon}</div>
                <span className="highlight-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image fade-in">
          <div className="about-image-wrapper">
            <div className="about-image-inner">
              <span className="avatar-placeholder">PB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
