import React, {useState,} from "react"; 
import '../components/cursoss.css';
import Buttons from "../../Cursos/components/componentes-cursoss/button-cursoss.jsx";
import { Selectorbotton } from "../../Cursos/components/componentes-cursoss/button-materia.jsx";
import data from '../../../core/services/data.json';
import FilteredContent, {dbaItems, EstantItems}   from "./FilteredContent";
import '../components/FilteredContent.css';

function Cursoss(){
  const [selectedMateria, setselectedMateria] = useState(null);
  const [selectedGrado, setselectedGrado] = useState(null);

  const SelectMateria = (materia) => {
    setselectedMateria(materia);
    setselectedGrado(null); 
  };
  const selectedMateriaData = data.find((item) => item.materia === selectedMateria);
  const selectedGradoData = selectedMateriaData && selectedMateriaData.grados.find((grado) => grado.grado === selectedGrado);
  const SelectedGrado = (grado) => {
    setselectedGrado(grado);
};

const filteredGradoData = selectedMateriaData ? selectedMateriaData.grados : [];

const [ActiveButton, SetActiveButton] = useState(null);
const handleButtonNClick = (index) => {
  SetActiveButton(index)
  console.log(ActiveButton);
}
  return(
    <>
      <main className="select-buttons">
        <Selectorbotton id="matematica" text="Matemáticas" onClick={() => SelectMateria( "matematicas")}/>
        <Selectorbotton id="cienci" text="Ciencias" onClick={() => SelectMateria("ciencias")}/>
      </main>
      <setion>
      <article className="cursos">
      <header>
      {filteredGradoData.map((gradoItem, index) => (
      <Buttons key={gradoItem.grado} text={`Grado ${gradoItem.grado}`} onClick={() => {SelectedGrado(gradoItem.grado); handleButtonNClick(index);}}
      className={ActiveButton === index ? "colorBlack": "ColorWhite"}/>
        ))}
      </header>
      </article>
      {selectedMateriaData && selectedGrado !== null && (
        <FilteredContent content={selectedGradoData.content}/>
      )}
      </setion>
    </>
   );
};
export default Cursoss;
