import React from 'react';

const Projects = () => {
  const projects = [
    // {
    //   icon: '🎓',
    //   title: 'GenAI Mastery Course',
    //   description: 'Building a comprehensive GenAI course covering LLM fundamentals, prompt engineering, LangChain, RAG systems, and vector databases with hands-on projects.',
    //   tech: ['LangChain', 'RAG', 'Vector DB', 'OpenAI', 'FastAPI'],
    //   link: null,
    //   linkText: 'Coming Soon',
    //   linkIcon: (
    //     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    //       <circle cx="12" cy="12" r="10"/>
    //       <path d="M12 6v6l4 2"/>
    //     </svg>
    //   )
    // },
    {
      icon: '🏪',
      title: 'ROOTACCESS.AI SHOP',
      description: "My digital products business — selling tech resources with Razorpay integration, automated delivery, and user management system.",
      tech: ['FastAPI', 'React', 'MongoDB', 'Razorpay'],
      link: 'https://rootaccessai.shop',
      linkText: 'Visit Site',
      linkIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      )
    },
    {
      icon: '📈',
      title: 'Algo Trading Platform',
      description: 'Automated trading system with credit spread strategies, delta-based options selection, RSI-WMA indicators for NIFTY analysis.',
      tech: ['FastAPI', 'Dhan API', 'Python', 'NumPy'],
      link: null,
      linkText: 'Private',
      linkIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-tag">// Side Projects</span>
        <h2 className="section-title">What I Build Outside Work</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <div className="project-image">
              <span className="project-icon">{project.icon}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.linkIcon}
                    {project.linkText}
                  </a>
                ) : (
                  <span className="project-link">
                    {project.linkIcon}
                    {project.linkText}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
