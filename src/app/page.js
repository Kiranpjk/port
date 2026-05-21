'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fetchGitHubRepos, fetchGitHubUser } from '@/lib/github';

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false });
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export const runtime = 'edge';

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [user, repositories] = await Promise.all([fetchGitHubUser(), fetchGitHubRepos()]);
        setUserData(user);
        setRepos(repositories);
      } catch (error) {
        console.error('Error loading GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="surface p-8 text-center"
        >
          <p className="text-sm font-medium text-muted-foreground">Loading portfolio…</p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <ThreeBackground />
      <Header />
      <Hero userData={userData} />
      <About userData={userData} />
      <Skills />
      <Projects repos={repos} />
      <Contact userData={userData} />
      <Footer />
    </main>
  );
}
