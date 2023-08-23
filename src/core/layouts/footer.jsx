import './footer.css'
import React from 'react';
import { FaArrowCircleUp, FaHome } from 'react-icons/fa'; // Importar los iconos de los botones (puedes usar otros iconos si lo deseas)

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* Coloca aquí tu logo */}
      </div>
      <div className="footer-info">
        {/* Coloca aquí tu información */}
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
