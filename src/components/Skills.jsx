import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3/SASS', level: 90 },
    { name: 'JavaScript (ES6+)', level: 92 },
    { name: 'React', level: 90 },
 { name: 'Node.js', level: 75 },
    { name: 'Git/GitHub', level: 88 },
    { name: 'Responsive Design', level: 95 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Communication', level: 85 },
    { name: 'Time Management', level: 88 },
    { name: 'Adaptability', level: 90 },
    { name: 'Creativity', level: 92 },
  ];

  const tools = [
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 85 },
    { name: 'Adobe XD', level: 80 },
    
  ];

  const renderSkills = (skills) => {
    return (
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
                data-level={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills">
      <div className="container skills-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-tabs">
          <button 
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Skills
          </button>
          <button 
            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skills
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools & Libraries
          </button>
        </div>
        
        <div className="skills-content">
          {activeTab === 'technical' && renderSkills(technicalSkills)}
          {activeTab === 'soft' && renderSkills(softSkills)}
          {activeTab === 'tools' && renderSkills(tools)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
