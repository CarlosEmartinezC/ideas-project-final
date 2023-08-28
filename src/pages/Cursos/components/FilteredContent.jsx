import React from "react";

const FilteredContent = ({ filteredData }) => {
  return (
    <div className="filtered-content">
      {filteredData.map((item) => (
        <div key={item.id}>
          <h3>{item.materia}</h3>
          <p>{item.contenido}</p>
          <p>Grado: {item.grado}</p> {/* Asegúrate de tener la propiedad "grado" en tus datos */}
        </div>
      ))}
    </div>
  );
};

export default FilteredContent;