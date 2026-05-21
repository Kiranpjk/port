'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

const skills = [
  {
    title: 'Frontend',
    items: [
      ['React / Next.js', 95],
      ['TypeScript', 90],
      ['Tailwind CSS', 95],
      ['Framer Motion', 88],
    ],
  },
  {
    title: 'Backend',
    items: [
      ['Node.js', 88],
      ['REST APIs', 90],
      ['Databases', 84],
      ['Auth & Security', 80],
    ],
  },
  {
    title: 'Product Delivery',
    items: [
      ['Accessibility', 90],
      ['Performance', 92],
      ['DX Tooling', 84],
      ['Testing mindset', 82],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-shell px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Capability map"
          description="A practical toolkit for building resilient products and polished interfaces."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {group.items.map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold">{value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65 }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
