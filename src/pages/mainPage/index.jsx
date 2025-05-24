import React from 'react';

import Intro from './intro';
import About from './about';
// import Projects from './projects';
import Skills from './skills';
import './index.css';

const MainPage = () => {
  return (
    <div>
        <Intro />
        <About />
        <Skills />
        {/* <Projects /> */}
    </div>
  )
}

export default MainPage;