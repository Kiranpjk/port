import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className={cn('mx-auto mb-12 max-w-3xl text-center', className)}
    >
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-balance text-muted-foreground md:text-lg">{description}</p> : null}
    </motion.div>
  );
}
