import React from 'react';
import './App.css';
import Header from './core/layouts/header-components/header';
import Footer from './core/layouts/footer-components/footer';
import Cursos from './pages/Cursos/Cursos'
import slider from './pages/Cursos/components/slider';

function App() {
  return (
    <div>
      <Header />
      <slider/>
      <Cursos/>
      <Footer /> {}
    </div>
  );
}

export default App;
