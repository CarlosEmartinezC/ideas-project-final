import React from 'react';
import './App.css';
import Header from './core/layouts/header-components/header';
import Carrusel from './pages/Cursos/components/slider';
import Footer from './core/layouts/footer-components/footer';
import Nosotros from './pages/Sobre-nosotros/nosotros';


function App() {
  return (
    <div>
      <Header />
      <Carrusel />
      <Nosotros/>
      <Footer /> {}
    </div>
  );
}

export default App;
