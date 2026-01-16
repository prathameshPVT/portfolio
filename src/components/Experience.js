import React from 'react';

const Experience = () => {
  const experiences = [
    {
      logo: 'A',
      logoClass: 'ascendion',
      date: 'Jul 2025 - Present',
      duration: '7 months',
      title: 'Senior Software Engineer',
      company: 'Ascendion',
      location: 'Pune · Hybrid',
      description: (
        <>
          Building <strong>Kural</strong> — an AI-powered pharmaceutical market research platform serving 1000+ concurrent users. Key contributions:
          <ul>
            <li>Architected real-time chat system using <strong>Server-Sent Events (SSE)</strong> for streaming AI responses with chunked data delivery and connection management</li>
            <li>Implemented reflective mode feedback system with user query tracking and intelligent popup notifications</li>
            <li>Optimized MongoDB aggregation pipelines, fixed N+1 query issues, and implemented strategic indexing for sub-second response times</li>
            <li>Built Redis caching layer with fallback logic for high-availability data access</li>
            <li>Achieved 100% test coverage with pytest </li>
            <li>Implemented role-based access control (RBAC) and managed database transactions across multiple collections</li>
          </ul>
        </>
      ),
      tech: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'SSE Streaming', 'AWS', 'pytest', 'GenAI']
    },
    {
      logo: 'SD',
      logoClass: 'shipdelight',
      date: 'Dec 2021 - May 2025',
      duration: '3 yrs 6 mos',
      title: 'Senior Software Developer',
      promoted: true,
      company: 'ShipDelight Logistics Technologies',
      location: 'Mumbai, India · On-site',
      description: (
        <>
          Started as Software Engineer, promoted to Senior Engineer. Led a team of 2-3 developers building e-commerce logistics solutions:
          <ul>
            <li>Reduced dashboard query time from <strong>5 minutes to 1 second</strong> (90% improvement) using Redis caching and query optimization</li>
            <li>Designed wallet system integrated with e-commerce platforms for secure transactions</li>
            <li>Built real-time order sync using FastAPI, Django, and webhooks for automatic status updates and inventory tracking</li>
            <li>Integrated courier APIs (Smarter, BlueDart, Ecom) for automated shipment assignment and last-mile tracking</li>
            <li>Implemented WhatsApp/Email/SMS notifications via Gupshup and Fyno APIs</li>
            <li>Led full-stack Razorpay payment integration (Nuxt.js frontend + FastAPI backend with webhooks)</li>
            <li>Managed microservices on AWS (EC2, ECS, S3, Lambda, RDS)</li>
            <li>Mentored interns on Python, FastAPI, Django, React.js, and best practices</li>
          </ul>
        </>
      ),
      tech: ['Python', 'FastAPI', 'Django', 'Node.js', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'React', 'Nuxt.js']
    },
    {
      logo: 'E',
      logoClass: 'edulab',
      date: 'Apr 2021 - Dec 2021',
      duration: '9 months',
      title: 'Software Engineer',
      company: 'Edulab',
      location: 'Mumbai, India · On-site',
      description: (
        <>
          First professional role in the edtech space. Built and maintained web applications using MEAN/MERN stack:
          <ul>
            <li>Developed features using MongoDB, Express.js, Angular, Node.js, and React</li>
            <li>Built responsive web pages with HTML5, CSS3, and modern JavaScript</li>
            <li>Collaborated with senior developers on frontend components and UI/UX improvements</li>
            <li>Gained hands-on experience in full-stack development, debugging, and deployment</li>
          </ul>
        </>
      ),
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Angular', 'React', 'HTML/CSS']
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <span className="section-tag">// Experience</span>
        <h2 className="section-title">Where I've Worked</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item fade-in" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className={`company-logo ${exp.logoClass}`}>{exp.logo}</div>
                <div className="timeline-info">
                  <span className="timeline-date">
                    {exp.date}
                    <span className="timeline-duration">· {exp.duration}</span>
                  </span>
                  <h3 className="timeline-title">
                    {exp.title}
                    {exp.promoted && <span className="promotion-badge">↑ Promoted</span>}
                  </h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-location">{exp.location}</p>
                </div>
              </div>
              <div className="timeline-description">{exp.description}</div>
              <div className="timeline-tech">
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
