import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      icon: '⚡',
      title: 'Backend',
      skills: ['Python', 'FastAPI', 'Django', 'Flask', 'Node.js', 'REST APIs', 'Microservices']
    },
    {
      icon: '🗄️',
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Query Optimization', 'Indexing']
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS RDS', 'Docker', 'Linux']
    },
    {
      icon: '🤖',
      title: 'AI & Data',
      skills: ['NumPy', 'Pandas', 'LangChain', 'RAG Systems', 'LLM APIs']
    },
    {
      icon: '🔌',
      title: 'Integrations',
      skills: ['Shopify', 'WooCommerce', 'Magento', 'Razorpay', 'Webhooks', 'Gupshup']
    },
    {
      icon: '🛠️',
      title: 'Frontend & Tools',
      skills: ['React', 'Nuxt.js', 'JavaScript', 'Git', 'Async Programming']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <span className="section-tag">// Tech Stack</span>
        <h2 className="section-title">What I Work With</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-category fade-in" key={index}>
            <div className="skill-category-header">
              <div className="skill-category-icon">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span className="skill-tag" key={skillIndex}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
