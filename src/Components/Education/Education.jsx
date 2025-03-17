import React from 'react'
import'./Education.css'
import clg_logo from '../../assets/logo2.jfif'

function Education() {
  return (
    <div className='education-container'>
      <h1>Education</h1>
      <div className='education'>
        <div className='education-details'>
          <div className='education-left'>
            <img src={clg_logo} alt="" />
          </div>
          <div className='education-right'>
            <h4>Theni Kammavar Sangam College of Arts & Science, Koduvilarpatty, Theni, Tamil Nadu 625534</h4>
            <p style={{fontSize:'19px'}}>Bachelor of Science in Computer Science</p>
            <p style={{fontSize:'16px', color:'#fcdae5fa', fontWeight:'400'}}>Jul 2019 - jul 2022</p>
          </div>
        </div>
        <div className='summary'>
          <p style={{color:'#4c535d', fontWeight:'600'}}>CGPA: 7.44 - First Class</p>
          <p>I hold a Bachelor of Science degree in Computer Science from Theni Kammavar Sangam College of Arts & Science, located in Koduvilarpatty, Theni, Tamil Nadu. I pursued my studies from July 2019 to July 2022 and graduated with a CGPA of 7.44, earning First Class honors. Throughout my academic journey, I gained a solid foundation in core computer science principles, programming, and software development. My education also provided me with practical knowledge in areas such as web development, data structures, algorithms, and database management. This academic experience has significantly shaped my problem-solving skills and technical proficiency, equipping me to excel in the field of software development.</p>
        </div>
      </div>
    </div>
  )
}

export default Education