import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const typingEffect = async () => {
      const roles = ['Frontend Developer', 'UX Designer', 'React Expert', 'Creative Coder'];
      const el = textRef.current;
      let sleepTime = 100;
      
      while (true) {
        for (let role of roles) {
          for (let i = 0; i <= role.length; i++) {
            el.innerText = role.substring(0, i);
            await sleep(sleepTime);
          }
          
          await sleep(1500);
          
          for (let i = role.length; i >= 0; i--) {
            el.innerText = role.substring(0, i);
            await sleep(sleepTime / 2);
          }
          
          await sleep(500);
        }
      }
    };
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    typingEffect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="slide-in">Hello, I'm <span className="highlight">Jaya Kiran</span></h1>
          <h2>I'm a <span ref={textRef} className="typing"></span></h2>
          <p className="fade-in">Creating seamless digital experiences with modern web technologies</p>
          <div className="hero-btns">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Get In Touch</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;