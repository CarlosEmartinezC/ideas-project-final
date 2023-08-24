import React from 'react';

const DbaEstandares = ({ dba }) => {
  return (
    <div className="dba-estandares">
      <div className="dba-container">
        <h2>DBA</h2>
        <ul>
          {dba.map((tema) => (
            <li key={tema.Id}>{tema.name}</li>
          ))}
        </ul>
      </div>
      <div className="estandares-container">
        <h2>Estandares</h2>
        <ul>
          {dba.map((tema) => (
            <li key={tema.Id}>{/* Renderizar estándares aquí */}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DbaEstandares;

