import React from 'react';
import LogoHeader from './LogoHeader';
import BuscadorHeader from './BuscadorHeader';
import BotonHeader from './BotonHeader';
import './styleHeader.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    
    <header className="header" id='header' >
      <LogoHeader id="LogoHeader" />
      <Link to="/carouselcomponent">
      <BotonHeader  text="Inicio"/>
      </Link>
      <Link to="/Nosotros">
      <BotonHeader  text="Sobre Nosotros"/>
      </Link>
      <Link to="/Curso">
      <BotonHeader  text="Temáticas" />
      </Link>
      <Link to="/contact">
      <BotonHeader  text="Contacto" />
      </Link>
      <BuscadorHeader id="BuscadorHeader" />
    </header>
  );
};

export default Header;