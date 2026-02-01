import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Certificates = () => {
  const certificates = [
    {
      id: 0,
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'June 2024',
      image: '../resources/cloud.png',
      link: 'https://drive.google.com/file/d/1yN2DyQylZMuGzn7021moQsfV1m4CeoGc/view?usp=sharing',
      skills: ['Cloud Computing', 'Cloud Infrastructure']
    },
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
        
        <div className="certificates-swiper-container">
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
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="certificates-swiper"
          >
            {certificates.map(certificate => (
              <SwiperSlide key={certificate.id}>
                <div className="certificate-card">
                  <div className="certificate-img">
                    <img src={certificate.image} alt={certificate.title} onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="18"%3E' + certificate.title + '%3C/text%3E%3C/svg%3E';
                    }} />
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certificates;