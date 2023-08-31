import React from "react";

const DBAItems = ({ dbaItems }) => {
  return (
    <div className="dba-items">
      {dbaItems.map((evidencia, index) => (
        <div key={index}>
          <p>{evidencia.Descripción}</p>
          <ul>
            {evidencia.content.map((item, idx) => (
              <li key={idx}>
                {Object.keys(item).map((key) => (
                  <p key={key}>
                    <b>Evidencia </b> : {item[key]}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DBAItems;