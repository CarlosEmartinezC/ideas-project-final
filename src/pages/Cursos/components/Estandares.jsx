import React from "react";
import '../components/Estandares.css';
const ESTANTItems = ({ EstantItems }) => {
  return (
        <div className="estandar-items">
            {EstantItems.map((estandar, index) => (
  <div className="estandar-imagen" key={index}>
    {estandar.img && <img src={estandar.img} alt="Imagen" />}
    <p>{estandar.curso} grado</p>
  </div>
        ))}
    </div>
  );
};

export default ESTANTItems;


