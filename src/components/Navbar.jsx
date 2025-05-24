import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div id='navbar'>
        <div id='navbar-name'>
            PORTFOLIO
        </div>
        <div id='navbar-links'>
            <ul>
                <li><a href='#intro'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}
