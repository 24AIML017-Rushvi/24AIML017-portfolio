import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ email, copyright }) => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Rushvi Kathiriya</h3>
            <p>
              AIML Engineering Student at CHARUSAT. Building modern web platforms and exploring AI solutions.
            </p>
            <div className="footer-contact-box">
              <span>✉</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div>
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Academic Details</h4>
            <ul className="footer-links">
              <li><Link to="/">B.Tech - AIML</Link></li>
              <li><Link to="/">CHARUSAT University</Link></li>
              <li><Link to="/projects">Practical 2 Project</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{copyright}</p>
          <button 
            className="footer-back-top" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
