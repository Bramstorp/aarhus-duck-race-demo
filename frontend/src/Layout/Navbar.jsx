// Basics Import
import React from "react";
import "./navbar.style.css";

// Billeder
import burgerLogo from "../assets/img/burger-button.png"
import navLogo from "../assets/img/home-button.png"

// React Components import
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Navbar id="navbar" className="primary-color navMain" expand="lg">
        <Container id="container">
          <Link className="navbar-brand homeLogo" to="/" >
            <img
              src={navLogo}
              width="50"
              height="56"
              id="logo"
              className="d-inline-block align-top"
              alt="HomeLogo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img
              src={burgerLogo}
              width="36"
              height="54"
              className="d-inline-block align-top"
              alt="MenuLogo"
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="navCollapse">
            <Nav className="me-auto">
              <Link className="nav-link" to="/concept">Hvad er Århus Duck Race?</Link>
              <Link className="nav-link" to="/buy">Køb din and her</Link>
              <Link className="nav-link" to="/donate">Doner til os her!</Link>
              <Link className="nav-link" to="/event">Hvor foregår det?</Link>
              <Link className="nav-link" to="/prizes">Præmier</Link>
              <Link className="nav-link" to="/purpose">Formål</Link>
              <Link className="nav-link" to="/aboutus">Om os</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
