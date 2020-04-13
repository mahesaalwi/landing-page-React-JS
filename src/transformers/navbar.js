import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import '../style/navbar.css';

function Navbars() {
  return (
    <div className="Navbar">
     {/* Navbar STYLE */}
      <Navbar>
        <Navbar.Brand href="#home" className="txt-brand"></Navbar.Brand>
        <Navbar.Brand href="#home" className="txt-brand-circle"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Setting</Nav.Link>
        <Nav.Link href="#home">Feture</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        
        </Nav>
       
        </Navbar.Collapse>
        
        </Navbar>
        <Button color="primary">Download Now</Button>
    </div>
  );
}

export default Navbars;