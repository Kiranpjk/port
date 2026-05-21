'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, GitBranch, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero({ userData }) {
  const name = userData?.name || 'Jaya Kiran';

  return (
    <section id="home" className="section relative flex min-h-screen items-center pt-20">
      <div className="section-shell w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center"
        >
          <div>
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="mr-1 h-3.5 w-3.5" /> Available for impactful product work
            </Badge>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
              Crafting fast, delightful, and conversion-ready web experiences.
            </h1>
            <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
              I&apos;m {name}, a full-stack developer focused on polished interfaces, robust architecture, and product quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={userData?.html_url || 'https://github.com/Kiranpjk'} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface p-6"
          >
            <div className="flex items-center gap-4">
              <Image
                src={userData?.avatar_url || 'https://avatars.githubusercontent.com/u/0?v=4'}
                alt={`${name} profile avatar`}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border border-border/80"
              />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">@{userData?.login || 'Kiranpjk'}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-muted/60 p-3">
                <p className="text-muted-foreground">Repos</p>
                <p className="text-lg font-semibold">{userData?.public_repos ?? '—'}</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3">
                <p className="text-muted-foreground">Followers</p>
                <p className="text-lg font-semibold">{userData?.followers ?? '—'}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
