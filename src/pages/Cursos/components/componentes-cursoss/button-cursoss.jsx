
import React from "react";

const BotonHeader = ({ text, onClick }) =>{
    return(
        <button className="boton" onClick={onclick}>
            {text}
        </button>
    )
}

export default BotonHeader;