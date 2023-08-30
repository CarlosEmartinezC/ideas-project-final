import React from 'react';
import './BotonHeader.scss';

const BotonHeader = ({ text, onClick }) => {
  return (
    <button className="BotonHeader" onClick={onClick}>
      {text}
    </button>
  );
};

export default BotonHeader;