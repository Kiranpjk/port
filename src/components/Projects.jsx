import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Recipe Finder',
      category: 'react',
      image: '/api/placeholder/600/400',
      description: 'A recipe search application with user authentication, customizable themes, and advanced search functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveLink: '#', // Update with your actual link
      codeLink: 'https://github.com/', // Update with your actual GitHub link
      features: [
        'Google Authentication for secure user login',
        'MongoDB for efficient database management',
        'Customizable Themes for personalized user experience',
        'Advanced Search and Filter Options',
        'User Interactions (ratings, reviews, sharing)',
        'External APIs for nutritional information'
      ]
    },
    // You can add more projects here as you complete them
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'react', label: 'React' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-filter">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card fade-in-up">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {project.features && (
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;