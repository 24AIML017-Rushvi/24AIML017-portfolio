import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section section-wrapper">
      <div className="section-title-container">
        <span className="section-subtitle">Get To Know Me</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-card">
        <div className="about-text-content">
          <h3>Architecting Ideas Into Reality</h3>
          <p>
            I am a dedicated Bachelor of Technology (B.Tech) student specializing in 
            Artificial Intelligence and Machine Learning (AIML) at Charotar University 
            of Science and Technology (CHARUSAT).
          </p>
          <p>
            As an enthusiastic engineering student, I genuinely enjoy learning modern technologies, 
            solving real-world problems, and building innovative software applications. I focus on 
            continuously improving my programming skills while exploring the intersection of 
            Artificial Intelligence and web development. I believe in writing clean, efficient code 
            and creating user-centered solutions that bridge theoretical concepts with practical software engineering.
          </p>
        </div>

        <div className="about-details-grid">
          <div className="detail-card">
            <div className="detail-card-label">Degree</div>
            <div className="detail-card-value">B.Tech</div>
            <div className="detail-card-sub">Undergraduate Program</div>
          </div>

          <div className="detail-card">
            <div className="detail-card-label">Specialization</div>
            <div className="detail-card-value">AIML</div>
            <div className="detail-card-sub">AI & Machine Learning</div>
          </div>

          <div className="detail-card">
            <div className="detail-card-label">University</div>
            <div className="detail-card-value">CHARUSAT</div>
            <div className="detail-card-sub">Charotar Univ. of Sci. & Tech.</div>
          </div>

          <div className="detail-card">
            <div className="detail-card-label">Focus Areas</div>
            <div className="detail-card-value">Web & AI</div>
            <div className="detail-card-sub">Software Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
