import React from 'react';
import './App.css';  // Assuming you have basic styling here
import Navbar from './Components/Navbar/Navbar';  // Make sure these paths match your file structure
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Skills/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
function App() {
  return (
    <div className="App bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Experience/>
      <Skills/>
      <Education/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
