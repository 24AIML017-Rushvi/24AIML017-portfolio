import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="not-found-page section-wrapper">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-desc">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          ← Return to Home Page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
