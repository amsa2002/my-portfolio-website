import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-cta">
                <h3>Let's Build Something Amazing Together!</h3>
                <a href="#contact" className="cta-button">Get in Touch</a>
            </div>
            <div className="footer-grid">
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <a href="tel:+918056786613" className="footer-link"><i><IoIosCall/></i> +91 8056786613</a>
                    <a href="mailto:amsa.ramanujam@gmail.com" className="footer-link">📧 amsa.ramanujam@gmail.com</a>
                </div>
                <div className="footer-section">
                    <h4>Social Links</h4>
                    <a href="https://www.linkedin.com/in/amsa-ramanujam/" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <i className="fab fa-linkedin"><FaLinkedin/></i> LinkedIn
                    </a>
                    <a href="https://github.com/amsa2002" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <i className="fab fa-github">< FaGithub/></i> GitHub
                    </a>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <a href="#about" className="footer-link">About Me</a>
                    <a href="#projects" className="footer-link">Projects</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </div>
            </div>
            <div className="footer-text">
                <p>© <span id="current-year">{new Date().getFullYear()}</span> Amsaramaujam. All Rights Reserved.</p>
            </div>
            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑ 
            </button>
        </div>
</footer>

  )
}

export default Footer