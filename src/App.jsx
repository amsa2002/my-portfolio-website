import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Certifications from './Components/Ceritifications/Certifications'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Intro/>
      <About/>
      <Education/>
      <Certifications/>
      <Skills/>
      <Projects/> */}
      <Navbar />
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default App