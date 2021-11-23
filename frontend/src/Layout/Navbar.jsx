import React from "react";
import { Link } from "react-router-dom";
import './navbar.style.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Navigation = () => {
  return (
<>
<Navbar className="primary-color" expand="lg">
  <Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/concept">Concept</Nav.Link>
        <Nav.Link href="/buy">Buy</Nav.Link>
        <Nav.Link href="/event">Event</Nav.Link>
        <Nav.Link href="/prizes">Prizes</Nav.Link>
        <Nav.Link href="/purpose">Purpose</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
};
