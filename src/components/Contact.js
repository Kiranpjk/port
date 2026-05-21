'use client';

import { motion } from 'framer-motion';
import { GitBranch, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export default function Contact({ userData }) {
  const email = userData?.email || 'contact@example.com';

  return (
    <section id="contact" className="section">
      <div className="section-shell px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something great"
          description="Open to collaboration, freelance opportunities, and product conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>Reach out directly</CardTitle>
              <CardDescription>I&apos;m responsive on GitHub and email.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1">
                <a href={`mailto:${email}`}>
                  <Mail className="h-4 w-4" /> Email Me
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={userData?.html_url || 'https://github.com/Kiranpjk'} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="h-4 w-4" /> GitHub Profile
                </a>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <a href="#home">
                  <Send className="h-4 w-4" /> Start a Project
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
