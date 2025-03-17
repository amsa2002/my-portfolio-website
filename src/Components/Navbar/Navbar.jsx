import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <h1>
        Amsa
      </h1>
      <ul className='nav-menu'>
        {/* <li>About</li>
        <li>Education</li>
        <li>Certifications</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li> */}
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>

      </ul>
      <div className='nav-connect'>
        <a href="#contact">Connect with me</a>
      </div>
    </div>
  )
}

export default Navbar