import React, { useState, useEffect } from 'react';
import ProjectsComponent from '../components/Projects';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import RepoList from '../components/RepoList';

const Projects = ({ projectData }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchRepos = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.github.com/users/24AIML017-Rushvi/repos");
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: Failed to fetch repositories`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setRepos(data);
      } else {
        throw new Error("Invalid data format received from GitHub API");
      }
    } catch (err) {
      setError(err.message || "Failed to load repositories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sort repositories by star count in descending order (Highest Stars First)
  const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);

  // Case-insensitive filtering by name while typing
  const filteredRepos = sortedRepos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="projects-page page-wrapper">
      {/* Featured Projects component from Practical 2 */}
      <ProjectsComponent projectData={projectData} />

      {/* Practical 3 GitHub Repositories Section */}
      <section className="github-repos-section section-wrapper">
        <div className="section-title-container">
          <span className="section-subtitle">GitHub API Integration</span>
          <h2 className="section-title">Open Source Repositories</h2>
        </div>

        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={fetchRepos} />
        ) : (
          <div className="repos-content-wrapper">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                id="search-repos-input"
                placeholder="Search Repository..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <RepoList repos={filteredRepos} />
          </div>
        )}
      </section>
    </main>
  );
};

export default Projects;
