import React from 'react';
import searchIcon from '../../../assets/img/header/BuscadorIconHeader.png';

const BuscadorHeader = () => {
  return (
    <div className="buscador">
      <img src={searchIcon} alt="Search" />
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default BuscadorHeader;