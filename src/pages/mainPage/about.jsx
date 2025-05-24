import React from 'react'

const About = () => {
  return (
    <div id='about' className='slide'>
      <div id='about-text'>
        <h1>Web Developer</h1>
        <p>A detail-oriented MERN Stack (MongoDB, Express, React, Node.js) Web Developer with a curious and imaginative mindset, seeking to leverage expertise in front-end and back-end development to create dynamic and user-friendly web applications.</p>
      </div>

      <div id='about-image'>
        <img src='./picture0.png' alt='Intro Image' />
        {/* <div className='fadeOverlay'></div> */}
      </div>
    </div>
  )
}

export default About