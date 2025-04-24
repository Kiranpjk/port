import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Complete Core and Advanced Java',
      issuer: 'Board Infinity',
      date: 'June 2024',
      image: '../resources/java.png',
      link: 'https://drive.google.com/file/d/1JAivN1cRiP_F_6QhYoBEsPwUHWcAPw06/view?usp=drive_link', // Add your certificate link here
      skills: ['Java', 'Core Java', 'Advanced Java']
    },
    {
      id: 2,
      title: 'The Complete Full-Stack Web Development BootCamp',
      issuer: 'Udemy - Dr. Angela Yu',
      date: 'November 2025',
      image: '../resources/full.png',
      link: 'https://drive.google.com/file/d/1x179cmEaZp06VldH3n32ysi2jMrIjiUE/view?usp=drive_link', // Add your certificate link here
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB']
    },
    {
      id: 3,
      title: 'Learn Blockchain and Cryptocurrency from Beginning',
      issuer: 'Udemy',
      date: 'December 2024',
      image: '../resources/blockchain.png',
      link: 'https://drive.google.com/file/d/13BiwDKJq5WbMVnQbW63WUUHQ3cgbskdb/view?usp=drive_link', // Add your certificate link here
      skills: ['Blockchain', 'Cryptocurrency', 'Smart Contracts']
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container certificates-container">
        <h2 className="section-title">My Certifications</h2>
        <p className="section-subtitle">Professional skills verified by industry-recognized certifications</p>
        
        <div className="certificates-grid">
          {certificates.map(certificate => (
            <div key={certificate.id} className="certificate-card fade-in-up">
              <div className="certificate-img">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
                    View Certificate
                  </a>
                </div>
              </div>
              <div className="certificate-info">
                <h3 className="certificate-title">{certificate.title}</h3>
                <div className="certificate-meta">
                  <span className="certificate-issuer">{certificate.issuer}</span>
                  <span className="certificate-date">{certificate.date}</span>
                </div>
                <div className="certificate-skills">
                  {certificate.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
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

export default Certificates;