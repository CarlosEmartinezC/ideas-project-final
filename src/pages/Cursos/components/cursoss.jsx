import React from "react";
import '../components/cursoss.css';
import Buttons from "../../Cursos/components/componentes-cursoss/button-cursoss.jsx";
import { datos } from '../../../core/services/data';

const MateriaGradoSelector = ({ onSelectGrado }) => {
  const [selectedMateria, setSelectedMateria] = useState(null);

  const handleMateriaSelect = (materia) => {
    setSelectedMateria(materia);
  };

  return (
    <div className="selector-container">
      <div className="selector-materia">
        <button onClick={() => handleMateriaSelect('ciencias')}>Ciencias</button>
        <button onClick={() => handleMateriaSelect('matematicas')}>Matemáticas</button>
      </div>

      {selectedMateria && (
        <div className="selector-grado">
          {Object.keys(datos[selectedMateria]).map((grado) => (
            <button key={grado} onClick={() => onSelectGrado(selectedMateria, grado)}>
              {grado.replace('_', ' ')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MateriaGradoSelector;