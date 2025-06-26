import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="..\resources\IMG-20250208-WA0053.jpg" alt="Your Name" />
            </div>
          </div>
          <div className="about-text">
            <div>
  <p>Hello! I'm <strong>Jaya Kiran</strong>, a passionate frontend developer and UI/UX desginer specializing in creating interactive and responsive web applications. With expertise in React, JavaScript, and modern UI/UX design principles, I build digital experiences that combine aesthetics with functionality.</p>
  
  <p>I have a background in <strong>Computer Science Engineering</strong> from Lovely Professional University with experience in UI/UX design through my internship at DevLooms and freelance work with APSPDCL.</p>
  
  <div className="about-details">
    <div className="about-detail">
      <h3>Experience</h3>
      <p>2+ Years</p>
    </div>
    <div className="about-detail">
      <h3>Projects</h3>
      <p>4+ Completed</p>
    </div>
    <div className="about-detail">
      <h3>Education</h3>
      <p>B.Tech Computer Science</p>
    </div>
  </div>
</div>
            
            <a href="https://drive.google.com/file/d/1-QxXOEM6XzAhwCK07q3Ugia301judi0L/view?usp=sharing" className="btn primary-btn download-btn" download>
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
