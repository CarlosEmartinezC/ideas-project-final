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
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        <div className="carousel-item">
          <img src={imagen1} alt="Imagen 1" />
          <div className="image-overlay">
            <div className="image-overlay-text">
              La Fundacion Tejer Ideas es parte del Colectivo Nacional de Educación
              STEM-CONASTEM. Desarrollamos un curso virtual certificado para docentes,
              directivos y demas interesados. Tambien participamos con una organización
              I Congreso Nacional de...
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagen2} alt="Imagen 2" />
          <div className="image-overlay">
            <div className="image-overlay-text">
              Texto para la imagen 2
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagen3} alt="Imagen 3" />
          <div className="image-overlay">
            <div className="image-overlay-text">
              Texto para la imagen 3
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
