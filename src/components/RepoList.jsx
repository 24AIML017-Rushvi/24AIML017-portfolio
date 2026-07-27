import React from 'react';

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return (
      <div className="no-repos-container" id="no-repos-found">
        <p className="no-repos-text">No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="repo-grid" id="github-repo-list">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card" id={`repo-card-${repo.id}`}>
          <div className="repo-card-header">
            <h3 className="repo-name" title={repo.name}>
              {repo.name}
            </h3>
            <span className="repo-stars" title={`${repo.stargazers_count} stars`}>
              ⭐ {repo.stargazers_count}
            </span>
          </div>
          
          <p className="repo-description">
            {repo.description || "No description provided for this repository."}
          </p>

          <div className="repo-details-middle">
            <div className="repo-url-wrapper">
              <span className="repo-detail-label">URL:</span>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="repo-url-link"
                title="Open repository in a new tab"
              >
                {repo.html_url}
              </a>
            </div>
            <div className="repo-updated-wrapper">
              <span className="repo-detail-label">Last Updated:</span>
              <span className="repo-updated-date">
                {new Date(repo.updated_at).toLocaleDateString(undefined, { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
          
          <div className="repo-card-footer">
            {repo.language ? (
              <span className="repo-lang-badge">
                <span className="repo-lang-dot"></span>
                {repo.language}
              </span>
            ) : (
              <span></span>
            )}
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="repo-link"
              id={`repo-link-${repo.id}`}
            >
              View Repository ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
