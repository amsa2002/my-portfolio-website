import React, { useState } from "react";
import "./Projects.css";
import ecommercewebsite from "../../assets/project-1.png"
import youtubeclone from "../../assets/project-2.png"
import { IoCloseOutline } from "react-icons/io5";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: ecommercewebsite,
      title: "E-Commerce Website",
      description: "Shopper is a modern, responsive eCommerce platform designed to provide a seamless shopping experience. It features a user-friendly interface and organized product categories such as Men’s, Women’s, Kids’, Watches, Footwear, and Jewelry. Users can enjoy exclusive sale options, including discounts and coupon codes, while navigating effortlessly across devices due to its fully responsive design. The secure checkout process ensures hassle-free transactions, while the platform integrates Razorpay for reliable payment processing. Built using React.js, Node.js, Express.js, and MongoDB, Shopper utilizes JWT for authentication. The frontend is deployed on Netlify, and the backend is hosted on Render, making it accessible and reliable.",
      technologies:[
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "MongoDB",
        "Razorpay",
        "React",
        "Node.js",
        "Express.js",
        "Netlify",
        "Render",
      ],
      liveLink: "https://dulcet-toffee-9eb7f9.netlify.app/",
      codeLink: "https://github.com/amsa2002/E-commerce-website",
    },
    {
      id: 2,
      image: youtubeclone,
      title: "Youtube Clone",
      description:
        "VidTube is a YouTube-inspired video streaming platform built with ReactJS and the YouTube API. It provides users with the ability to watch videos, search for content using keywords, and enjoy personalized features through user authentication. Designed for an engaging video-watching experience, the platform is continuously updated to improve functionality and usability.",
      technologies:[
        "Javascript",
        "HTML",
        "CSS",
        "Bootstrap",
        "React",
        "Youtube-api",
        "Vercel",
        "Json-server",
      ],
        liveLink: "https://video-tube-five.vercel.app",
      codeLink: "https://github.com/amsa2002/videoTube",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);

  return (
    <div className="projects-container">
      <h1 className="text-center">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt="" srcset="" />
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 150)}...</p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={selectedProject.image} alt="" />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="technologies-used">
              <div className="tech-buttons">
                {selectedProject.technologies.map((tech, index)=>(
                  <button key = {index} className="tech-btn">
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-buttons">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn live-btn"
              >
                Live App
              </a>
              <a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn code-btn"
              >
                View Code
              </a>
            </div>
            <button className="close-btn" onClick={handleClose}>
            <IoCloseOutline />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
