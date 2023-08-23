import './Home.css'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from './carrusel-1.jpg';
import imagen2 from './carrusel-2.jpg';
import imagen3 from './carrusel-3.jpg';

const CarouselComponent = () => {
    return (
      <Carousel
        autoPlay       // Carrusel gira automáticamente
        infiniteLoop   // Bucle infinito
      >
        <div className="carousel-item">
          <img src={imagen1} alt="Imagen 1" />
          <p className="legend">Leyenda 1</p>
        </div>
        <div className="carousel-item">
          <img src={imagen2} alt="Imagen 2" />
          <p className="legend">Leyenda 2</p>
        </div>
        <div className="carousel-item">
          <img src={imagen3} alt="Imagen 3" />
          <p className="legend">Leyenda 3</p>
        </div>
      </Carousel>
    );
  };
  
  export default CarouselComponent;