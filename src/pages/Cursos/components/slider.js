import React from "react";
import '../components/slider.css'
import Imagen1 from "../../../recursos/imagen1.jpg";
import Imagen2 from "../../../recursos/imagen2.jpg";
import Imagen3 from "../../../recursos/imagen3.jpg";

const slider = () => {
    return(
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={Imagen1} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src= {Imagen2} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src= {Imagen3} className="d-block" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default slider