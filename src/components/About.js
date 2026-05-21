'use client';

import { motion } from 'framer-motion';
import { Code2, MapPin, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion'];

export default function About({ userData }) {
  return (
    <section id="about" className="section">
      <div className="section-shell px-4">
        <SectionHeading
          eyebrow="About"
          title="Product-minded engineer with a strong UI/UX lens"
          description={
            userData?.bio || 'I build scalable apps and refined interfaces with maintainable systems and thoughtful motion.'
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Code2 className="h-4 w-4 text-primary" /> What I build
                </CardTitle>
                <CardDescription>Modern full-stack web products</CardDescription>
              </CardHeader>
              <CardContent className="space-x-2 space-y-2">
                {stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="h-4 w-4 text-secondary" /> Location
                </CardTitle>
                <CardDescription>{userData?.location || 'Remote-friendly'}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Open to global collaborations and long-term product partnerships.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Rocket className="h-4 w-4 text-accent" /> Focus
                </CardTitle>
                <CardDescription>Performance + accessibility + craft</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">I prioritize fast loading, semantic structure, and interaction details that feel premium.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
