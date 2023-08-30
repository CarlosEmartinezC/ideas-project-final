import './footer.css';
import React from 'react';
import { FaArrowCircleUp, FaHome, FaPhone } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from './logo.png';
import logo1 from './logo-1.png';

const Footer = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="footer-logo">
        <img src={logo1} alt="logo-1" className="logo-1" />
      </div>
      <div className="footer-info">
        <p>{"direccion@fundaciontejerideas.org"}</p>
        <p>Fundación Tejer Ideas. Todos los derechos reservados</p>
        <p>©2023</p>
      </div>
      <div className="footer-buttons">
        <RouterLink to="/carouselcomponent" className="footer-button">
          <FaHome className="purple-icon" />
        </RouterLink>
        <button className="footer-button" onClick={handleScrollToTop}>
          <FaArrowCircleUp className="purple-icon" /> 
        </button>
        <RouterLink to="/contact" className="footer-button">
          <FaPhone className="purple-icon" /> 
        </RouterLink>
      </div>
    </footer>
  );
};

export default Footer;