import './Home.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from './carrusel-1.jpg';
import imagen2 from './carrusel-2.jpg';
import imagen3 from './carrusel-3.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="content-container">
        <div className="image-container">
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false}>
            <div className="carousel-item">
              <img src={imagen1} alt="Imagen 1" />
            </div>
            <div className="carousel-item">
              <img src={imagen2} alt="Imagen 2" />
            </div>
            <div className="carousel-item">
              <img src={imagen3} alt="Imagen 3" />
            </div>
          </Carousel>
        </div>
        <div className="text-container">
          <h1><span className="colored-text2">Tejemos </span> redes que potencian la innovacion, el desarrollo y el <span className="colored-text1">avance social</span> </h1>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
