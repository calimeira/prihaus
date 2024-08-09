import React from 'react';
import '../styles/css/components/Footer.css';
import linkedinIcon from '../styles/icons/linkedin.svg';
import logo from '../styles/img/logos/logo2.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-divider"></div> {/* Línea divisoria */}
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Tu Empresa" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">WHAT WE DO?</a></li>
            <li><a href="/">HOW WE DO IT?</a></li>
            <li><a href="/">WHY WE DO IT?</a></li>
            <li><a href="/">WHO WE ARE?</a></li>
          </ul>
        </nav>
        <div className="social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Prihaus. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
