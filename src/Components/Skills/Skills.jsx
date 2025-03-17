// import React from 'react'
// import './Skills.css'

// function Skills() {
//   return (
//     <div className='skills-container'>
//         <h1>Skills</h1>
//     </div>
//   )
// }

// export default Skills

import React from "react";
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { DiJavascript1, DiSass, DiJqueryLogo, DiMongodb } from "react-icons/di";
import { SiRedux, SiGithub, SiExpress } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Skills",
      skills: [
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "React", icon: <FaReact /> },
        {name:"Redux", icon: <SiRedux />},
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "jQuery", icon: <DiJqueryLogo /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "SASS", icon: <DiSass /> },
        
      ],
    },
    {
      title: "Backend Skills",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <DiMongodb /> },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Git", icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">My Skills</h1>
      <div className="row">
        {skillCategories.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="text-center">
              <h5 className="mb-4">{category.title}</h5>
              <ul className="list-unstyled">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="d-flex align-items-center justify-content-start mb-3">
                    <span style={{ fontSize: "1.8rem", marginRight: "10px" }}>
                      {skill.icon}
                    </span>
                    <span style={{ fontWeight: "500", fontSize: "1rem" }}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
