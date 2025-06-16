import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Space Today</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#asteroids">Asteroids</Nav.Link>
            <Nav.Link href="#coming-soon">?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
