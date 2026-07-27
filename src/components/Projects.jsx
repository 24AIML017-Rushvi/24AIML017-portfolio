import React from 'react';

const Projects = ({ projectData }) => {
  if (!projectData) return null;

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="section-title-container">
        <span className="section-subtitle">Featured Work</span>
        <h2 className="section-title">Featured Project</h2>
      </div>

      <div className="project-card">
        {/* Project Header Bar */}
        <div className="project-header-bar">
          <div>
            <span className="project-badge">Full-Stack & AI Web Platform</span>
            <h3 className="project-title">{projectData.title}</h3>
          </div>
        </div>

        {/* Project Body Content */}
        <div className="project-body">
          <p className="project-description">
            {projectData.description}
          </p>

          {/* Key Features */}
          <h4 className="project-features-title">Key Features & Modules</h4>
          <div className="project-features-grid">
            {projectData.features && projectData.features.map((feature, index) => (
              <div key={index} className="feature-pill">
                <span className="feature-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies Used */}
          <h4 className="project-tech-title">Technologies & Stack</h4>
          <div className="project-tech-tags">
            {projectData.technologies && projectData.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="project-footer-actions">
            <button className="btn-primary" onClick={() => alert('Project Demo: MicroInternship Platform is a showcase practical project.')}>
              Live Demo Preview ↗
            </button>
            <button className="btn-secondary" onClick={() => alert('GitHub Repo: Project source code repository.')}>
              View Code Repository 🐙
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
