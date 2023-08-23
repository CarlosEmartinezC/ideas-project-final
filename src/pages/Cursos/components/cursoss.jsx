import React from "react";
import '../components/cursoss.css'
import Buttons from "../../Cursos/components/componentes-cursoss/button-cursoss.jsx"
const Cursoss = () => {
    const handleBotonClick = (ruta) => {
      // Lógica para manejar la redirección
      // Puedes usar react-router-dom para la navegación entre páginas
    };

    return(
        <>
        <div className="cursos">
        
      <Buttons text="Primer Grado" onClick={() => handleBotonClick('/Primer Grado')}  />
      <Buttons text="Segundo Grado" onClick={() => handleBotonClick('/Segundo Grado')} />
      <Buttons text="Tercer Grado" onClick={() => handleBotonClick('/Tercer Grado')} />
      <Buttons text="Cuarto Grado" onClick={() => handleBotonClick('/Cuarto Grado')} />
      <Buttons text="Quinto Grado" onClick={() => handleBotonClick('/Quinto Grado')} />
      
      
        </div>
        </>
    );
};


export default Cursoss;