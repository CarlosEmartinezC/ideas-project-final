import React from "react";

const BotonHeader = ({ text, onClick  }) =>{
    return(
        <button className="boton" onClick={onClick} >
            {text}
        </button>
    )
}

export default BotonHeader;