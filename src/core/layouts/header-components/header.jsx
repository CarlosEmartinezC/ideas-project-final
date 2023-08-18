import React from 'react';
import LogoHeader from './LogoHeader';
import BuscadorHeader from './BuscadorHeader';
import BotonHeader from './BotonHeader';


const Header = () => {
  const handleBotonClick = (ruta) => {
    // Lógica para manejar la redirección
    // Puedes usar react-router-dom para la navegación entre páginas
  };

  return (
    
    <header className="header">
      <LogoHeader />
      <BotonHeader text="Inicio" onClick={() => handleBotonClick('/inicio')} />
      <BotonHeader text="Sobre" onClick={() => handleBotonClick('/sobre')} />
      <BotonHeader text="Temáticas" onClick={() => handleBotonClick('/tematicas')} />
      <BotonHeader text="Cursos" onClick={() => handleBotonClick('/cursos')} />
      <BotonHeader text="Contacto" onClick={() => handleBotonClick('/contacto')} />
      <BuscadorHeader />
    </header>
  );
};

export default Header;