import React from 'react';
import logo from '../../../assets/img/header/LogoHorizontal.png';
import './LogoHeader.scss';


const LogoHeader = () => {
  return (
    <div className="logoHeader" id="LogoHeader" >
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default LogoHeader;