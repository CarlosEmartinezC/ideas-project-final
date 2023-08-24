import React from 'react';
import './App.css';
import Header from './core/layouts/header-components/header';
import Footer from './core/layouts/footer-components/footer';
import Cursos from './pages/Cursos/Cursos'

function App() {
  return (
    <div>
      <Header />
      <Cursos/>
      <Footer /> {}
    </div>
  );
}

export default App;
