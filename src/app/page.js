'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { fetchGitHubUser, fetchGitHubRepos } from '@/lib/github';

// Dynamically import components with no SSR
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
        const [user, repositories] = await Promise.all([
          fetchGitHubUser(),
          fetchGitHubRepos()
        ]);
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
      <div className="flex items-center justify-center min-h-screen bg-bg-dark">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-text-secondary">Loading portfolio...</p>
        </div>
      </div>
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
