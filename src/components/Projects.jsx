import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Recipe Finder',
      category: 'frontend',
      image: '../resources/recipe.png',
      description: 'A recipe search application with user authentication, customizable themes, and advanced search functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveLink: 'https://recipe-iota-two.vercel.app/',
      codeLink: 'https://github.com/Kiranpjk/v0-untitled-project',
      features: [
        'Google Authentication for secure user login',
        'MongoDB for efficient database management',
        'Customizable Themes for personalized user experience',
        'Advanced Search and Filter Options',
        'User Interactions (ratings, reviews, sharing)',
        'External APIs for nutritional information'
      ]
    },
    {
      id: 2,
      title: 'Movieflix',
      category: 'react',
      image: '../resources/movie.png',
      description: 'A movie streaming application with trailers, descriptions, and a modern UI. Built with React and styled-components.',
      technologies: ['React', 'CSS', 'TMDB API'],
      liveLink: '#', // Add live link if available
      codeLink: 'https://github.com/Kiranpjk/Movieflix',
      features: [
        'Real-time movie data using TMDB API',
        'Trending movies and search feature',
        'Responsive and modern UI design',
        'Detailed movie pages with trailers and info'
      ]
    },
    {
      id: 3,
      title: 'UX Design - Visily Board',
      category: 'frontend',
      image: '../resources/ui.png',
      description: 'A UX/UI design project showcasing the layout and interaction flow for a user-focused application using Visily.',
      technologies: ['UX Design', 'UI Design', 'Visily'],
      liveLink: 'https://app.visily.ai/projects/3d36d0f7-840b-423d-976e-b4b073fa4a31/boards/1820645',
      codeLink: '#',
      features: [
        'User-friendly navigation and interface design',
        'Visily board for high-fidelity mockups',
        'Focus on UX best practices and accessibility'
      ]
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'react', label: 'React' },
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
                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.codeLink && project.codeLink !== '#' && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
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
