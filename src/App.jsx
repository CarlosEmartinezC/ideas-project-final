import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa los componentes de react-router-dom
import Header from './core/layouts/header-components/header';
import Footer from './core/layouts/footer-components/footer';
import Contact from './pages/Contact/Contact';
import CarouselComponent from './pages/Home/Home';
import Nosotros from './pages/Sobre-nosotros/nosotros';
import Curso from './pages/Cursos/Cursos'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/carouselcomponent" element={<CarouselComponent />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Curso' element={<Curso />} />
          <Route path="/contact" element={<Contact />} />
          

          {/* Agrega más rutas para otras páginas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;