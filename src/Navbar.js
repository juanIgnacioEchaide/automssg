import {Navbar} from 'react-bootstrap/Navbar';
import React, {useState} from 'react';

const Navbar=(props)=>{

    return(
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">AutoMessage</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Navbar;