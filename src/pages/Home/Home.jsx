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
        showThumbs={false} // ocultar imagenes en miniatura
      >
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
    );
  };
  
  export default CarouselComponent;