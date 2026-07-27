import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  // Student & Practical Details
  const studentDetails = {
    name: "Rushvi Kathiriya",
    branch: "Artificial Intelligence and Machine Learning (AIML)",
    themeColor: "#2563eb",
    email: "24aiml017@charusat.edu.in",
    copyright: "© 2026 Rushvi Kathiriya"
  };

  // Skills Array passed as prop to Skills Component
  const skills = [
    "Python",
    "C++",
    "AIML",
    "SQL",
    "DBMS",
    "Git",
    "GitHub"
  ];

  // Project Object passed as prop to Projects Component
  const projectData = {
    title: "MicroInternship Platform – Global Micro-Internship Platform for Students & Companies",
    description: "Developed a full-stack platform that connects students and companies through short-term micro-internships. The platform enables internship posting, internship applications, AI-powered skill matching, task management, automatic certificate generation, student portfolios, global leaderboards, and secure role-based authentication.",
    features: [
      "AI Skill Matching",
      "Student Dashboard",
      "Company Dashboard",
      "Internship Management",
      "Task Submission",
      "Automatic Certificate Generation",
      "Portfolio Generation",
      "Global Leaderboard",
      "Company Trust Score",
      "Secure Authentication (RBAC)"
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "PDO",
      "Git",
      "GitHub"
    ]
  };

  return (
    <div className="app-container">
      <NavBar />
      <div className="app-main-content">
        <Routes>
          <Route path="/" element={<Home studentDetails={studentDetails} skills={skills} />} />
          <Route path="/projects" element={<Projects projectData={projectData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer 
        email={studentDetails.email} 
        copyright={studentDetails.copyright} 
      />
    </div>
  );
}

export default App;
