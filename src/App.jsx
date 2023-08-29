import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa los componentes de react-router-dom
import Header from './core/layouts/header-components/header';
import Carrusel from './pages/Cursos/components/slider';
import Footer from './core/layouts/footer-components/footer';
import Nosotros from './pages/Sobre-nosotros/nosotros';

function App() {
  return (
    <div>
      <Header />
      <Nosotros/>
      <Footer /> {}
    </div>
  );
}

export default App;
