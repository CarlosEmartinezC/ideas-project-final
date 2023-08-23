import './footer.css'
import React from 'react';
import { FaArrowCircleUp, FaHome } from 'react-icons/fa';
import logo from './logo.png';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        {<img src={logo} alt="logo" className="logo" />}
      </div>
      <div className="footer-info">
        {"informacion de la fundacion"}
      </div>
      <div className="footer-buttons">
        <button className="footer-button" onClick={handleScrollToTop}>
          <FaArrowCircleUp /> Ir arriba
        </button>
        <a href="/" className="footer-button">
          <FaHome /> Inicio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
