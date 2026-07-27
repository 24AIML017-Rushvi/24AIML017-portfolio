import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';

const Home = ({ studentDetails, skills }) => {
  return (
    <main className="home-page">
      <Header 
        name={studentDetails.name} 
        branch={studentDetails.branch} 
        themeColor={studentDetails.themeColor} 
      />
      <About />
      <Skills skillList={skills} />
    </main>
  );
};

export default Home;
