import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import LogoHeader from './LogoHeader';
import BuscadorHeader from './BuscadorHeader';
import BotonHeader from './BotonHeader';
import './styleHeader.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" id='header' >
    <Navbar  expand="lg" id="navbarHeader" className="custom-navbar" >
      <LogoHeader id="LogoHeader" />
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/carouselcomponent">
            <BotonHeader text="Inicio" />
          </Link>
          <BotonHeader text="Sobre" />
          <BotonHeader text="Temáticas" />
          <Link to="/contact">
            <BotonHeader text="Contacto" />
          </Link>
        </Nav>
        
      </Navbar.Collapse>

        <Form inline>
          <BuscadorHeader id="BuscadorHeader" />
        </Form>

    </Navbar>
    </header>
  );
};

export default Header;
