import React from "react";
import "./navbar.style.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Navigation = () => {
  return (
    <>
      <Navbar className="primary-color" expand="lg">
        <Container>
          <Navbar.Brand href="/aarhus-duck-race-demo">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/aarhus-duck-race-demo">Home</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/concept">Concept</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/buy">Buy</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/event">Event</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/prizes">Prizes</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/purpose">Purpose</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
