import React, {useState} from "react"; 
import '../components/cursoss.css'
import Buttons from "../../Cursos/components/componentes-cursoss/button-cursoss.jsx"
import { Selectorbotton } from "../../Cursos/components/componentes-cursoss/button-materia.jsx"
import data from '../../../core/services/data.json';
import FilteredContent from "./FilteredContent";
function Cursoss(){
  const [selectedMateria, setselectedMateria] = useState(null);
  const [selectedGrado, setselectedGrado] = useState(null);

  const SelectMateria = (materia) => {
    setselectedMateria(materia);
  };
  const filteredData = data.filter((item) => {
    if(!selectedMateria) {
      return true; //no hay filtro, mostrar todos los datos
    }else{
      console.log(item.materia, selectedMateria);
     return item.materia === selectedMateria;
    }
  });
  const SelectedGrado = (grado) => {
    setselectedGrado(grado);
  };
  const filteredBygrado = filteredData.filter((item) => {
    if (!selectedGrado) {
      return true;
    } else {
      console.log(item.grado, selectedGrado);
      return item.grado === selectedGrado; // Suponiendo que el objeto tiene una propiedad "grado"
    }
  });
    return(
        <>
          <main className="select-buttons">
            <Selectorbotton text="Matemáticas" onClick={() => SelectMateria('matematicas')}/>
            <Selectorbotton text="Ciencias" onClick={() => SelectMateria('ciencias')}/>
          </main>

        <div className="cursos">
      <Buttons text="Primer Grado" onClick={() => selectedGrado('/primero')}  />
      <Buttons text="Segundo Grado" onClick={() => selectedGrado('/segundo')} />
      <Buttons text="Tercer Grado" onClick={() => selectedGrado('/Tercer')} />
      <Buttons text="Cuarto Grado" onClick={() => selectedGrado('/Cuarto')} />
      <Buttons text="Quinto Grado" onClick={() => selectedGrado('/Quinto')} />
        </div>
        <FilteredContent filteredData={filteredData} />
        </>
    );
};
export default Cursoss;
