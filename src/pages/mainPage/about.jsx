import React from 'react'

const About = () => {
  return (
    <div id='about' className='slide'>
      <div id='about-text'>
        <h1>Welcome to the Main Page</h1>
        <h3>Welcome to the Main Page</h3>
        <p>This is the introduction section of the main page.</p>
        <p>Here you can find various information and links to other sections.</p>
        <p>Feel free to explore!</p>
      </div>

      <div id='about-image'>
        <img src='./jiji_the_cat.jpg' alt='Intro Image' />
      </div>
    </div>
  )
}

export default About