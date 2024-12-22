import React from 'react';
import Navigation from './pages/Navigation';
import ProfileImage from './pages/ProfileImage';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Languages from './pages/Languages';
import Contact from './pages/Contact';
import Projects from './pages/projects';

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Navigation />
      <ProfileImage /> 
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <Skills />
          <Contact />
        </div>
        <div className="w-full md:w-1/2">
          <About />
          <Experience />
          <Education />
          <Languages /> 
        </div>
      </div>
      <Projects /> 
    </div>
  );
};

export default App;