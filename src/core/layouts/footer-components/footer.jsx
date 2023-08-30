import './footer.css'
import React from 'react';
import { FaArrowCircleUp, FaHome } from 'react-icons/fa';
import logo from './logo.png';
import logo1 from './logo-1.png';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        {<img src={logo} alt="logo" className="logo" />}
      </div>
      <div className="footer-logo">
        {<img src={logo1} alt="logo-1" className="logo-1" />}
      </div>
      <div className="footer-info">
        {"direccion@fundaciontejerideas.org"}
      </div>
      <div className="footer-buttons">
      <a href="./src/pages/Home/Home.jsx" className="footer-button">
          <FaHome />
        </a>
        <button className="footer-button" onClick={handleScrollToTop}>
          <FaArrowCircleUp /> Ir arriba
        </button>
      </div>
    </footer>
  );
};

export default Footer;
