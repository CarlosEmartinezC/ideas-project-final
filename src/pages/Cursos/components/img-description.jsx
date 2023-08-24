import React from 'react';

const ImagenDescripcion = ({ img, description }) => {
  return (
    <div className="imagen-descripcion">
      <div className="imagen-container">
        <img src={img} alt="Imagen del grado" />
      </div>
      <div className="descripcion-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImagenDescripcion;
