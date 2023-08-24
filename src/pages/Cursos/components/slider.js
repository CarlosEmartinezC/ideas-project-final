import React from "react";
import '../components/slider.css'
import Imagen1 from "../../../recursos/imagen1-06.jpg";
import Imagen2 from "../../../recursos/imagen2-06.jpg";
import Imagen3 from "../../../recursos/imagen3-06.jpg";

const slider = () => {
    return(
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={Imagen1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src= {Imagen2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src= {Imagen3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default slider