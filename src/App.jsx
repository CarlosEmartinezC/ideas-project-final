import React from 'react';
import './App.css';
import Header from './core/layouts/header-components/header';
import Footer from './core/layouts/footer-components/footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Header />
      {<Home/>}
      <Footer /> 
    </div>
  );
}

export default App;
