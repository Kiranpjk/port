'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact({ userData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: userData?.email || 'contact@example.com',
      link: `mailto:${userData?.email || 'contact@example.com'}`,
    },
    {
      icon: 'fa-github',
      title: 'GitHub',
      value: `@${userData?.login || 'Kiranpjk'}`,
      link: userData?.html_url || 'https://github.com/Kiranpjk',
    },
    {
      icon: 'fa-linkedin',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com',
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-text-secondary mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-4 rounded-lg flex items-center gap-4 card-hover"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <i className={`fab ${method.icon} text-2xl text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{method.title}</h4>
                    <p className="text-text-secondary text-sm">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-darker text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-darker text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-bg-darker text-text-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn btn-primary"
              >
                {status === 'sending' ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <i className="fas fa-check mr-2"></i>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
