'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Star, GitFork } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export default function Projects({ repos }) {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('all');

  const languages = useMemo(() => {
    const unique = [...new Set(repos.map((repo) => repo.language).filter(Boolean))];
    return ['all', ...unique.slice(0, 7)];
  }, [repos]);

  const filtered = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return repos.filter((repo) => {
      const matchesLanguage = language === 'all' || repo.language === language;
      const matchesQuery =
        !lower ||
        repo.name.toLowerCase().includes(lower) ||
        (repo.description || '').toLowerCase().includes(lower) ||
        repo.topics.some((topic) => topic.toLowerCase().includes(lower));
      return matchesLanguage && matchesQuery;
    });
  }, [repos, language, query]);

  return (
    <section id="projects" className="section">
      <div className="section-shell px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work from GitHub"
          description="Live repository data from the GitHub API, filtered to highlight relevant builds and experiments."
        />

        <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <label className="surface flex items-center gap-2 px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search repos by name, description, or topic"
              aria-label="Search projects"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {languages.map((item) => (
              <Button
                key={item}
                variant={language === item ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setLanguage(item)}
              >
                {item === 'all' ? 'All' : item}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="truncate text-base">{repo.name}</CardTitle>
                  <CardDescription className="min-h-[3.75rem] overflow-hidden">{repo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    {repo.language ? <span>{repo.language}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={repo.repoUrl} target="_blank" rel="noopener noreferrer">
                        Code <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                    {repo.homepage ? (
                      <Button asChild size="sm" className="flex-1">
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          Live <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 text-center text-muted-foreground">No repositories match this filter.</p>
        ) : null}
      </div>
    </section>
  );
}
