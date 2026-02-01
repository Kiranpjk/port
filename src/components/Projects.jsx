import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { generateFallbackImage } from '../utils/imageFallback';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'RapidGig',
      category: 'fullstack',
      image: '../resources/rapidgig-placeholder.png',
      description: 'Scalable web app to connect freelancers with recruiters (video-first)',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'TypeScript', 'MongoDB', 'Vite'],
      liveLink: 'https://rapid-gigs.vercel.app/',
      codeLink: 'https://github.com/Kiranpjk/RapidGigs',
      features: [
        'JWT authentication',
        'Real-time job search/filter, video dashboard',
        'Profile management, cloud file upload'
      ]
    },
    {
      id: 2,
      title: 'NeighborFit',
      category: 'fullstack',
      image: '../resources/neighborfit-placeholder.png',
      description: 'AI-powered app matching users with neighborhoods based on lifestyle',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GSAP', 'Framer Motion'],
      liveLink: '#',
      codeLink: '#',
      features: [
        'Questionnaire, dynamic matching',
        'Animated glass morphism UI',
        'API integrations for real-world data'
      ]
    },
    {
      id: 3,
      title: '3D Maze Navigator',
      category: 'game',
      image: '../resources/maze-placeholder.png',
      description: 'First-person 3D maze game (React, Three.js, R3F, physics engine)',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Physics Engine'],
      liveLink: '#',
      codeLink: '#',
      features: [
        'Procedural maze generation',
        'WASD controls',
        'Minimap and timer'
      ]
    },
    {
      id: 4,
      title: 'Movieflix',
      category: 'frontend',
      image: '../resources/movie.png',
      description: 'Movie streaming React app with modern UI',
      technologies: ['React', 'TMDB API', 'CSS'],
      liveLink: '#',
      codeLink: 'https://github.com/Kiranpjk/Movieflix',
      features: [
        'Real-time movie data using TMDB API',
        'Trending movies and search feature',
        'Responsive and modern UI design',
        'Detailed movie pages with trailers and info'
      ]
    },
    {
      id: 5,
      title: 'UX Design - Visily Board',
      category: 'design',
      image: '../resources/ui.png',
      description: 'UX/UI mockup and design showcase',
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
    { value: 'fullstack', label: 'Full-Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'game', label: '3D Game' },
    { value: 'design', label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Innovative solutions built with modern technologies</p>

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

        <div className="projects-swiper-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="projects-swiper"
          >
            {filteredProjects.map(project => (
              <SwiperSlide key={project.id}>
                <div className="project-card">
                  <div className="project-img">
                    <img src={project.image} alt={project.title} onError={(e) => {
                      e.target.src = generateFallbackImage(project.title);
                    }} />
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
