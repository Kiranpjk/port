'use client';

import { motion } from 'framer-motion';

export default function ThreeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-grid">
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
    </div>
  );
}
