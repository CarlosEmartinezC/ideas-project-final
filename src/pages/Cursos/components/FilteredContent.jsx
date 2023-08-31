import React, {useState} from "react";
import { Selectorbotton } from "../../Cursos/components/componentes-cursoss/button-materia.jsx";
import '../components/cursoss.css';
import '../components/FilteredContent.css';
import DBAItems from "../components/dba";
import ESTANTItems from "../components/Estandares.jsx";

const FilteredContent = ({ content, dba }) => {
  const [showDBA, setShowDBA] = useState(true);
  if (!content || content.length === 0) {
    return null;
  }

  const { description, img, info } = content[0];
  const dbaItems = content[0].dba;
  const EstantItems = content[0].estandares;
  return (
    <>
      <div className="filtered-content">
      {img && <img className="filtered-content-image" src={img} alt={info}/>}
        <p className="filtered-content ">{description}</p>
      </div>
      <main className="select-buttons inter">
            <Selectorbotton text="DBA" onClick={() => setShowDBA( true)}/>
            <Selectorbotton text="ESTANDARES" onClick={() => setShowDBA(false)}/>
      </main>
      {showDBA ? (
        <DBAItems dbaItems={dbaItems}  />
      ) : (
        <ESTANTItems EstantItems={EstantItems} />
      )}
    </>
  );
};

export default FilteredContent;