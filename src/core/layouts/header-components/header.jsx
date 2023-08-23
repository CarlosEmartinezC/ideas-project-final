import React from 'react';
import LogoHeader from './LogoHeader';
import BuscadorHeader from './BuscadorHeader';
import BotonHeader from './BotonHeader';
import './styleHeader.scss';

const Header = () => {
  const handleBotonClick = (ruta) => {
    // Lógica para manejar la redirección
    // Puedes usar react-router-dom para la navegación entre páginas
  };

  return (
    
    <header className="header" id='header' >
      <LogoHeader id="LogoHeader" />
      <BotonHeader  text="Inicio" onClick={() => handleBotonClick('/inicio')} />
      <BotonHeader  text="Sobre" onClick={() => handleBotonClick('/sobre')} />
      <BotonHeader  text="Temáticas" onClick={() => handleBotonClick('/tematicas')} />
      <BotonHeader  text="Cursos" onClick={() => handleBotonClick('/cursos')} />
      <BotonHeader  text="Contacto" onClick={() => handleBotonClick('/contacto')} />
      <BuscadorHeader id="BuscadorHeader" />
    </header>
  );
};

export default Header;