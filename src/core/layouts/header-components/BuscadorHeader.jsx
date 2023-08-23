import React from 'react';
import searchIcon from '../../../assets/img/header/BuscadorIconHeader.png';
import './BuscadorHeader.scss';

const BuscadorHeader = () => {
  return (
    <div className="buscadorHeader">
      <img src={searchIcon} alt="Search" id='IconBuscador' />
      <input type="text" placeholder="Buscar" id='ImputBusHea'/>
    </div>
  );
};

export default BuscadorHeader;