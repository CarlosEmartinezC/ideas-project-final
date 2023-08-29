import React from "react";
import '../components/slider.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Imagen1 from "../../../recursos/imagen1-06.jpg";
import Imagen2 from "../../../recursos/imagen2-06.jpg";
import Imagen3 from "../../../recursos/imagen3-06.jpg";

const CarouselComponent = () => {
    return (
        <div className="carousel-container">
            <div className="content-container">
                <div className="image-container">
                    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false}>
                        <div className="container">
                            <img src={Imagen1} alt="" />
                        </div>
                        <div className="container">
                            <img src={Imagen2} alt="" />
                        </div>
                        <div className="container">
                            <img src={Imagen3} alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CarouselComponent;

