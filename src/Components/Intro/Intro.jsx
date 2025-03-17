import React, { useEffect, useRef } from "react";
import './Intro.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import resume from '../../assets/Amsa-resume.pdf'

function Intro() {

  const [text] =  useTypewriter({
    words: ['Full Stack Developer', 'Mern Stck Developer', 'Web Developer','Frontend Developer', 'Backend Developer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className='intro'>
        <h1>Hi, I'm Amsa</h1>
        <h3>I'm a {' '}
          <span className="typing-text">
            {text}
          </span>
          <span>
            <Cursor cursorStyle='|'/>
          </span>
        </h3> 
        <p>I'm a full-stack developer from chennai, Tamilnadu with a passion for building robust and scalable web applications, I have honed my skills across various technologies and frameworks to deliver high-quality solutions.
        </p>
        <div className='intro-action'>
            <div className='intro-connect'>
              <a
                href="https://github.com/amsa2002"
                target="_blank"
                rel="noopener noreferrer"
                className='intro-connect'
              >
                Github Profile
              </a>
            </div>
            <div className='intro-resume'>
              <button>
                <a href={resume} download="Amsa-resume.pdf">My Resume</a>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Intro