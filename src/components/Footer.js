'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fa-github', url: 'https://github.com/Kiranpjk' },
    { icon: 'fa-linkedin', url: 'https://linkedin.com' },
    { icon: 'fa-twitter', url: 'https://twitter.com' },
  ];

  return (
    <footer className="relative z-10 py-12 border-t border-border-color">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary">
              © {currentYear} Jaya Kiran. Built with{' '}
              <span className="text-red-500">❤️</span> using Next.js, Three.js & GSAP
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary hover:scale-110 transition-all"
              >
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
          >
            <i className="fas fa-arrow-up"></i>
            Back to top
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
