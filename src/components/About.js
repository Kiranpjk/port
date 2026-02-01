'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About({ userData }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: 'fa-code',
      value: userData?.public_repos || '20+',
      label: 'Public Repos',
    },
    {
      icon: 'fa-users',
      value: userData?.followers || '50+',
      label: 'Followers',
    },
    {
      icon: 'fa-star',
      value: '100+',
      label: 'Total Stars',
    },
    {
      icon: 'fa-project-diagram',
      value: '10+',
      label: 'Projects',
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {userData?.bio || 
              "Passionate developer with expertise in building modern web applications and creating exceptional user experiences"}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl text-center about-card"
            >
              <i className={`fas ${stat.icon} text-4xl text-primary mb-4`}></i>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-xl about-card"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                <i className="fas fa-user mr-2"></i>
                Profile Information
              </h3>
              <div className="space-y-3">
                {userData?.name && (
                  <div className="flex items-center">
                    <span className="text-text-muted w-32">Name:</span>
                    <span className="text-text-primary font-medium">{userData.name}</span>
                  </div>
                )}
                {userData?.login && (
                  <div className="flex items-center">
                    <span className="text-text-muted w-32">Username:</span>
                    <span className="text-text-primary font-medium">@{userData.login}</span>
                  </div>
                )}
                {userData?.location && (
                  <div className="flex items-center">
                    <span className="text-text-muted w-32">Location:</span>
                    <span className="text-text-primary font-medium">{userData.location}</span>
                  </div>
                )}
                {userData?.email && (
                  <div className="flex items-center">
                    <span className="text-text-muted w-32">Email:</span>
                    <span className="text-text-primary font-medium">{userData.email}</span>
                  </div>
                )}
                {userData?.blog && (
                  <div className="flex items-center">
                    <span className="text-text-muted w-32">Website:</span>
                    <a 
                      href={userData.blog} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {userData.blog}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                <i className="fas fa-rocket mr-2"></i>
                What I Do
              </h3>
              <p className="text-text-secondary mb-4">
                I specialize in creating elegant, performant, and scalable web applications using modern technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'Three.js'].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
