import axios from 'axios';

const GITHUB_USERNAME = 'Kiranpjk';
const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubUser() {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${GITHUB_USERNAME}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

export async function fetchGitHubRepos() {
  try {
    const response = await axios.get(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos`,
      {
        params: {
          sort: 'updated',
          per_page: 100,
        },
      }
    );
    
    // Process repositories to extract necessary data
    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || 'No description available',
      language: repo.language || 'N/A',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      watchers: repo.watchers_count,
      topics: repo.topics || [],
      homepage: repo.homepage || null,
      repoUrl: repo.html_url,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      size: repo.size,
      defaultBranch: repo.default_branch,
      hasPages: repo.has_pages,
    }));
    
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchFeaturedProjects() {
  // Manually define featured projects
  const featuredRepoNames = ['RapidGigs', 'Movieflix', 'port'];
  
  try {
    const allRepos = await fetchGitHubRepos();
    const featured = allRepos.filter(repo => 
      featuredRepoNames.some(name => 
        repo.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    
    return featured.length > 0 ? featured : allRepos.slice(0, 3);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

export function filterReposByTech(repos, tech) {
  if (!tech || tech === 'all') return repos;
  
  return repos.filter(repo => 
    repo.language?.toLowerCase() === tech.toLowerCase() ||
    repo.topics.some(topic => topic.toLowerCase().includes(tech.toLowerCase()))
  );
}

export function searchRepos(repos, query) {
  if (!query) return repos;
  
  const lowerQuery = query.toLowerCase();
  return repos.filter(repo =>
    repo.name.toLowerCase().includes(lowerQuery) ||
    repo.description.toLowerCase().includes(lowerQuery) ||
    repo.topics.some(topic => topic.toLowerCase().includes(lowerQuery))
  );
}
