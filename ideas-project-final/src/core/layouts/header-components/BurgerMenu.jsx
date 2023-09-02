import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import BotonHeader from './BotonHeader';
import './BurgerMenu.scss';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu-wrapper">
      <div className="menu-button" onClick={handleMenuToggle}>
        <span className="menu-icon">&#9776;</span> {/* Icono de menú hamburguesa */}
      </div>
      
      <Menu isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)} disableAutoFocus>
        
        <Link to="/carouselcomponent">
          <BotonHeader text="Inicio" />
        </Link>
        <Link to="/Nosotros">
          <BotonHeader text="Sobre Nosotros" />
        </Link>
        <Link to="/Curso">
          <BotonHeader text="Temáticas" />
        </Link>
        <Link to="/contact">
          <BotonHeader text="Contacto" />
        </Link>
      </Menu>
    </div>
  );
}

export default BurgerMenu;