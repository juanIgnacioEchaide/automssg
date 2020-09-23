
import React, {useState} from 'react';
import {Navbar,Nav,Button,Form, FormControl} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import {logo} from '../src/asset/logo.png'

const NavBar =(props)=>{
return(
    <>

  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">AutoMssg</Navbar.Brand> <img source={logo}></img>
    <Nav className="mr-auto">
     <Nav.Link as={Link} to="/personalizado" href="#home">Personalizado</Nav.Link>
      <Nav.Link as={Link} to="/plantilla">Plantilla</Nav.Link> 
    </Nav>
  </Navbar>

 
    </>
    );
};
export default NavBar;