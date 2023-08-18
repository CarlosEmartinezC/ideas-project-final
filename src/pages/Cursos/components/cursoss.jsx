import React from "react";
import Pgrado from "../../../recursos/Pgrado.png";


function Cursoss (){
    return(
        <>
        <div className="Pgrado">
            <h3>Primer Grado</h3>
        <img src={Pgrado} className="img__first"/>
        <div className="Description">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin aliquet tortor vel orci convallis, non dictum leo tempus. 
    Sed cursus libero eget orci lacinia, nec scelerisque mauris efficitur. 
    Nulla facilisi. Vivamus malesuada nibh eget nunc vestibulum ultrices. 
    Sed sollicitudin mauris nec magna commodo, nec rhoncus turpis feugiat. 
    Nunc efficitur, arcu eget hendrerit scelerisque, massa nisl commodo elit, 
    id efficitur quam eros at nisi. Sed eleifend lacinia lorem, a volutpat tortor 
    feugiat ac. Vestibulum ultrices odio vitae eleifend sodales.
  `;
            </p>
        </div>
        </div>
        </>
    );
};

export default Cursoss;