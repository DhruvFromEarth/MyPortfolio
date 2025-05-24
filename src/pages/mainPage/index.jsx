import React from 'react';

import Intro from './intro';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import './index.css';

const MainPage = () => {
  return (
    <div>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default MainPage;