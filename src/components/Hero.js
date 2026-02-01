'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function Hero({ userData }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5');

    // Typing effect
    const roles = ['Full-Stack Developer', 'UI/UX Designer', 'React Expert', 'Creative Coder'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(type, speed);
    };

    type();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center z-10 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {userData?.avatar_url && (
              <img
                src={userData.avatar_url}
                alt={userData.name || 'Profile'}
                className="w-32 h-32 rounded-full mx-auto border-4 border-primary shadow-2xl"
              />
            )}
          </motion.div>

          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              {userData?.name || 'Jaya Kiran'}
            </span>
          </h1>

          <h2 ref={subtitleRef} className="text-2xl md:text-4xl text-text-secondary mb-8">
            I'm a <span id="typing-text" className="text-primary font-bold"></span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12">
            {userData?.bio || 'Creating seamless digital experiences with modern web technologies'}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket mr-2"></i>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-paper-plane mr-2"></i>
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-6 justify-center mt-12"
          >
            {userData?.html_url && (
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-text-secondary hover:text-primary transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-text-secondary hover:text-primary transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-text-secondary hover:text-primary transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <i className="fas fa-chevron-down text-3xl text-primary"></i>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
