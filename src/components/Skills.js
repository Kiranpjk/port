'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-bar', {
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 80%',
        },
        width: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.1,
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fa-laptop-code',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'Three.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: 'fa-tools',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 skills-container">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <i className={`fas ${category.icon} text-3xl text-primary mr-3`}></i>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-bg-darker rounded-full h-2 overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
