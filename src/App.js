import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Certificates from './components/Certificates';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    if (!isLoading) {
      // Animate section titles
      gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Animate sections with fade and slide
      gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        });
      });

      // Parallax effect for hero section
      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 200,
        opacity: 0.5,
        ease: 'none',
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-circle"></div>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Cursor />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;