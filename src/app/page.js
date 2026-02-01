import { fetchGitHubUser, fetchGitHubRepos } from '@/lib/github';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home() {
  // Fetch GitHub data on the server
  const userData = await fetchGitHubUser();
  const repos = await fetchGitHubRepos();

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
