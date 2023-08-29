import React from "react";

const FilteredContent = ({ content, dba }) => {
  if (!content || content.length === 0) {
    return null; // Manejar el caso de contenidos no válidos o vacíos
  }

  const { description, img } = content[0];
  const dbaItems = content[0].dba;

  return (
    <div className="filtered-content">
      <p>Descripción: {description}</p>
      {img && <img src={img} alt="Imagen" />}

      {/* Renderizar las evidencias DBA */}
      {dbaItems.map((evidencia, index) => (
        <div key={index}>
          <p>{evidencia.Descripción}</p>
          {/* Renderizar otras propiedades del objeto de evidencia según sea necesario */}
        </div>
      ))}
    </div>
  );
};

export default FilteredContent;