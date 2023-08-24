import React from "react";

const slider = () => {
    return(
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./recursos/imagen1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="./recursos/imagen2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="./recursos/imagen1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                </div>
                </div>
    )
}

export default slider