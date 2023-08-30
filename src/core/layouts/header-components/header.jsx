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
      <BotonHeader  text="Sobre"/>
      <BotonHeader  text="Temáticas" />
      <Link to="/contact">
      <BotonHeader  text="Contacto" />
      </Link>
      <BuscadorHeader id="BuscadorHeader" />
    </header>
  );
};

export default Header;