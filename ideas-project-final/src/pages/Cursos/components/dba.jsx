import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import '../components/dba.css';

const DBAItems = ({ dbaItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(new Array(dbaItems.length).fill(true));
  const handleClick = (index) => {
    const newIsCollapsed = [...isCollapsed];
    newIsCollapsed[index] = !newIsCollapsed[index];
    setIsCollapsed(newIsCollapsed);
  };
  return (
    <div className="dba-items">
      {dbaItems.map((evidencia, index) => (
        <button onClick={() => handleClick(index)} key={index} className="collapse">
        {isCollapsed[index] ? <span><b className="dba-number">{index+1} </b> {evidencia.Descripción.substring(0, 30)}... <BsFillCaretDownFill className="icono" ></BsFillCaretDownFill> </span>
        :
        <span><b className="dba-number" id="number">{index+1} </b> {evidencia.Descripción}</span>
        }
        <div  className="dba-items evidence" style={{ display: isCollapsed[index] ? "none" : "flex" }}>
          <ul className="evidence">
            {evidencia.content.map((item, idx) => (
              <li key={idx} className="collapse-content">
                {Object.keys(item).map((key) => (
                  <p key={key}>
                    <b id="number1">{idx+1} </b>  {item[key]}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>  
        </button>
      ))}
    </div>
  );
};
export default DBAItems;