import React from "react";
import "./navbar.style.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Navbar className="primary-color" expand="lg">
        <Container>
          <Link className='navbar-brand' to='/'>Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link' to='/concept'>Concept</Link>
              <Link className='nav-link' to='/buy'>Buy</Link>
              <Link className='nav-link' to='/event'>Event</Link>
              <Link className='nav-link' to='/prizes'>Prizes</Link>
              <Link className='nav-link' to='/purpose'>Purpose</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
