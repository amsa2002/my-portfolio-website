import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Amsa.jpeg'

function About() {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
              <img src={profile_img} alt="" />
            </div>
            <div className='about-right'>  
              <div className='about-para'>
                <p>As a passionate MERN stack developer, I am committed to delivering high-quality code and continuously expanding my knowledge. With a positive attitude and an eagerness to embrace new challenges, I thrive in dynamic environments where I can learn and grow. My dedication to effective time management ensures that I meet deadlines without compromising on the quality of my work.</p>
                <p>As a fresher, I am excited to contribute my skills and energy to meaningful projects, always striving to exceed expectations and bring innovative solutions to the table. Driven by a love for technology and a relentless pursuit of excellence, I am ready to make a positive impact in the tech world.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About