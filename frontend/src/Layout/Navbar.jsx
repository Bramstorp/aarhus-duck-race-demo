import React from "react";
import { Link } from "react-router-dom";
import './navbar.style.css';


export const Navbar = () => {
  return (
    <nav className="navbar primary-color navbar-white navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link  color-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color-white" to="/concept">
                Concept
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color-white" to="/buy">
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color-white" to="/event">
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color-white" to="/prizes">
                Prizes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link color-white" to="/purpose">
                Purpose
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
