import React from 'react'
import './Certifications.css'
import guvi_logo from '../../assets/guvilogo.webp'
import udemy_logo from '../../assets/udemy.png'

function Certifications() {
  return (
    <div className='certification-container'>
        <h1>Certifications</h1>
        <div className="certifications">
            <div className="row">
                <div className="col md 6 border margin">
                    <div className='certification-details'>
                        <div className='certification-left'>
                            <img src={guvi_logo} alt="" />
                        </div>
                        <div className='certification-right'>
                            <h4>Full Stack Development</h4>
                            <p style={{fontSize:'19px'}}>GUVI GEEK NETWORK PRIVATE LIMITED, IITM Research park, Tharamani, Chennai, Tamil Nadu 600 113</p>
                            <p style={{fontSize:'16px', color:'#fcdae5fa', fontWeight:'400'}}>Oct 2023 - Dec 2023</p>
                        </div>
                    </div>
                    <div className='summary'>
                        <p>During my time at GUVI GEEK NETWORK, I underwent comprehensive training as a MERN Stack Developer, focusing on mastering the MongoDB, Express.js, React.js, and Node.js technologies. Through a blend of theoretical learning and hands-on practical exercises, I acquired a solid understanding of both front-end and back-end development aspects.</p>
                    </div>
                </div>
                <div className="col md 6 border margin">
                    <div className='certification-details'>
                        <div className='certification-left'>
                            <img src={udemy_logo} alt="" />
                        </div>
                        <div className='certification-right'>
                            <h4>The Ultimate React Course 2024: React, Next.js, Redux & More</h4>
                            <p style={{fontSize:'19px'}}>Udemy</p>
                            <p style={{fontSize:'16px', color:'#fcdae5fa', fontWeight:'400'}}>April 30</p>
                        </div>
                    </div>
                    <div className='summary'>
                        <p>Successfully completed The Ultimate React Course 2024: React, Next.js, Redux & More on Udemy, taught by Jonas Schmedtmann. Gained expertise in React, Next.js, Redux, and advanced frontend development techniques, showcasing a commitment to continuous learning and skill enhancement.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certifications