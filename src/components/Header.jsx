import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ name, branch, themeColor }) => {
  return (
    <header id="home" className="header-hero">
      {/* Decorative gradient background elements */}
      <div className="hero-blob-1"></div>
      <div className="hero-blob-2"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          <span>B.Tech Student • AIML Enthusiast</span>
        </div>

        <h1 className="hero-title">
          Hello, I'm <br />
          <span className="hero-name-highlight" style={{ color: themeColor }}>
            {name}
          </span>
        </h1>

        <p className="hero-subtitle">
          Specializing in <strong>{branch}</strong>
        </p>

        <p className="hero-intro">
          Passionate about building intelligent software solutions, mastering modern web architectures, 
          and applying artificial intelligence to solve complex real-world challenges.
        </p>

        <div className="hero-cta-group">
          <Link to="/projects" className="btn-primary">
            View My Project <span>↓</span>
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get In Touch <span>✉</span>
          </Link>
        </div>

        <div className="hero-info-pills">
          <div className="info-pill">
            <span className="info-pill-icon">🎓</span>
            <span>CHARUSAT University</span>
          </div>
          <div className="info-pill">
            <span className="info-pill-icon">💻</span>
            <span>Full-Stack & AIML</span>
          </div>
          <div className="info-pill">
            <span className="info-pill-icon">📍</span>
            <span>Gujarat, India</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
