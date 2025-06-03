import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import IconWrapper from './components/IconWrapper';
import BackgroundAnimation from './components/BackgroundAnimation';
import './App.css';

function App() {
  return (
    <IconWrapper>
      <Router>
        <div className="App">
          <BackgroundAnimation />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </Router>
    </IconWrapper>
  );
}

export default App;
