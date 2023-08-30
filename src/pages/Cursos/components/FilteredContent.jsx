import React, {useState} from "react";
import { Selectorbotton } from "../../Cursos/components/componentes-cursoss/button-materia.jsx";
import '../components/cursoss.css';

const FilteredContent = ({ content, dba }) => {
  const [showDBA, setShowDBA] = useState(true);
  if (!content || content.length === 0) {
    return null; // Manejar el caso de contenidos no válidos o vacíos
  }

  const { description, img } = content[0];
  const dbaItems = content[0].dba;
  console.log(showDBA);
  const EstantItems = content[0].estandares;
  console.log(EstantItems);
  console.log(dbaItems);
  return (
    <>
      <div className="filtered-content">
        <p>Descripción: {description}</p>
          {img && <img src={img} alt="Imagen" />}
      </div>
      <main className="select-buttons">
            <Selectorbotton text="DBA" onClick={() => setShowDBA( true)}/>
            <Selectorbotton text="ESTANDARES" onClick={() => setShowDBA(false)}/>
      </main>
      {showDBA ? (
        <div className="dba-items">
          {dbaItems.map((evidencia, index) => (
            <div key={index}>
              <p>{evidencia.Descripción}</p>
              <ul>
                {evidencia.content.map((item, idx) => (
                  <li key={idx}>
                    {Object.keys(item).map((key) => (
                      <p key={key}>
                        {key}: {item[key]}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="estandar-items">
          {EstantItems.map((estandar, index) => (
            <div key={index}>
              <p>Curso: {estandar.curso}</p>
              {estandar.img && <img src={estandar.img} alt="Imagen" />}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FilteredContent;