import React, { useState } from 'react';
import MateriaGradoSelector from './MateriaGradoSelector';
import ImagenDescripcion from './ImagenDescripcion';
import DbaEstandares from './Dba';
import { datos } from '../../core/services/data'; //importación de datos js//

const Cursos = () => {
  const [selectedGrado, setSelectedGrado] = useState(null);
  const [selectedMateria, setSelectedMateria] = useState(null);

  const handleGradoSelect = (materia, grado) => {
    setSelectedMateria(materia);
    setSelectedGrado(grado);
  };

  const selectedDba = selectedGrado && datos[selectedMateria][selectedGrado].dba;

  return (
    <div>
      <h1>Selección de Materia y Grado</h1>
      <MateriaGradoSelector onSelectGrado={handleGradoSelect} />

      {selectedGrado && (
        <div>
          <ImagenDescripcion
            img={datos[selectedMateria][selectedGrado].img}
            description={datos[selectedMateria][selectedGrado].description}
          />
        </div>
      )}

      {selectedDba && (
        <div>
          <DbaEstandares dba={selectedDba} />
        </div>
      )}
    </div>
  );
};

export default Cursos;