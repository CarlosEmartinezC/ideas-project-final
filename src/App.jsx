import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa los componentes de react-router-dom
import Header from './core/layouts/header-components/header';
import Footer from './core/layouts/footer-components/footer';
import Cursos from './pages/Cursos/Cursos';
import Contact from './pages/Contact/Contact';
import CarouselComponent from './pages/Home/Home';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carouselcomponent" element={<CarouselComponent />} />
          {/* Agrega más rutas para otras páginas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;