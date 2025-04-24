import React, { useState, useEffect } from 'react';
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
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation effect for scrolling elements
  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollElements = document.querySelectorAll('.fade-in-up');
      
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const isInView = elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) * (80/100));
          
        if (isInView) {
          el.classList.add('visible');
        }
      });
    };
    
    // Run once when component mounts
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

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