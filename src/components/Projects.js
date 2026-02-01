'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Projects({ repos }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique languages for filters
  const languages = useMemo(() => {
    const langs = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
    return ['all', ...langs];
  }, [repos]);

  // Filter and search repositories
  const filteredRepos = useMemo(() => {
    let filtered = repos;

    if (filter !== 'all') {
      filtered = filtered.filter(repo => repo.language === filter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        repo =>
          repo.name.toLowerCase().includes(query) ||
          repo.description.toLowerCase().includes(query) ||
          repo.topics.some(topic => topic.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [repos, filter, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore my latest work and open-source contributions
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg glass text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted"></i>
          </div>

          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === lang
                    ? 'bg-primary text-white'
                    : 'glass text-text-secondary hover:text-primary'
                }`}
              >
                {lang === 'all' ? 'All' : lang}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredRepos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              className="glass p-6 rounded-xl card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {repo.name}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-3">
                    {repo.description}
                  </p>
                </div>
              </div>

              {/* Technologies/Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-text-muted text-sm">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <i className="fas fa-code"></i>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <i className="fas fa-star"></i>
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-code-branch"></i>
                  {repo.forks}
                </span>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn btn-secondary text-center text-sm"
                >
                  <i className="fab fa-github mr-2"></i>
                  Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-primary text-center text-sm"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <i className="fas fa-search text-6xl text-text-muted mb-4"></i>
            <p className="text-xl text-text-secondary">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
}
