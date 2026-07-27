import React from 'react';

const Skills = ({ skillList }) => {
  // Optional helper icons for technical aesthetic
  const getSkillIcon = (skillName) => {
    switch (skillName.toUpperCase()) {
      case 'PYTHON': return '🐍';
      case 'C++': return '⚡';
      case 'AIML': return '🧠';
      case 'SQL': return '🗄️';
      case 'DBMS': return '📊';
      case 'GIT': return '🌱';
      case 'GITHUB': return '🐙';
      default: return '💻';
    }
  };

  const getSkillCategory = (skillName) => {
    switch (skillName.toUpperCase()) {
      case 'PYTHON':
      case 'C++':
        return 'Programming';
      case 'AIML':
        return 'Specialization';
      case 'SQL':
      case 'DBMS':
        return 'Database';
      case 'GIT':
      case 'GITHUB':
        return 'Tools & DevOps';
      default:
        return 'Technology';
    }
  };

  return (
    <section id="skills" className="skills-section section-wrapper">
      <div className="section-title-container">
        <span className="section-subtitle">Technical Competencies</span>
        <h2 className="section-title">My Skills</h2>
      </div>

      <div className="skills-grid">
        {skillList && skillList.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-box">
              {getSkillIcon(skill)}
            </div>
            <div>
              <div className="skill-name">{skill}</div>
              <div className="skill-tag">{getSkillCategory(skill)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
