import React from 'react';
import logo from '../assets/img/header/LogoHorizontal';

const LogoHeader = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default LogoHeader;