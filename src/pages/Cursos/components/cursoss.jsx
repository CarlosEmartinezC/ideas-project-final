import React, {useState,} from "react"; 
import '../components/cursoss.css';
import Buttons from "../../Cursos/components/componentes-cursoss/button-cursoss.jsx";
import { Selectorbotton } from "../../Cursos/components/componentes-cursoss/button-materia.jsx";
import data from '../../../core/services/data.json';
import FilteredContent from "./FilteredContent";
function Cursoss(){
  const [selectedMateria, setselectedMateria] = useState(null);
  const [selectedGrado, setselectedGrado] = useState(null);

  const SelectMateria = (materia) => {
    setselectedMateria(materia);
    //console.log("Select Materia", materia)
    setselectedGrado(null); // clean the select of grade al cambiar la selection
  };
  const selectedMateriaData = data.find((item) => item.materia === selectedMateria);
  const selectedGradoData = selectedMateriaData && selectedMateriaData.grados.find((grado) => grado.grado === selectedGrado);
  const SelectedGrado = (grado) => {
    setselectedGrado(grado);
};
//
const filteredGradoData = selectedMateriaData ? selectedMateriaData.grados : [];
  return(
    <>
      <main className="select-buttons">
        <Selectorbotton text="Matemáticas" onClick={() => SelectMateria( "matematicas")}/>
        <Selectorbotton text="Ciencias" onClick={() => SelectMateria("ciencias")}/>
      </main>
      <div className="cursos">
      {filteredGradoData.map((gradoItem) => (
      <Buttons
        key={gradoItem.grado}
        text={`Grado ${gradoItem.grado}`}
        onClick={() => SelectedGrado(gradoItem.grado)}
      />
        ))}
      </div>
      {selectedMateriaData && selectedGrado !== null && (
        <FilteredContent content={selectedGradoData.content}/>
      )}
    </>
   );
};
export default Cursoss;
