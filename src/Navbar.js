
import React, {useState} from 'react';
import {Navbar,Nav,Button,Form, FormControl} from 'react-bootstrap';
import {Link } from 'react-router-dom';


const NavBar =(props)=>{
return(
    <>

  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">AutoMssg</Navbar.Brand> 
    <Nav className="mr-auto">
     <Nav.Link as={Link} to="/personalizado" href="#home">Mensajes</Nav.Link>
     </Nav>
  </Navbar>

 
    </>
    );
};
export default NavBar;