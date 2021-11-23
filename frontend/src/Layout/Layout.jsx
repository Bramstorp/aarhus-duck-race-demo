import React from "react";
import { Navigation } from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = (props) => (
  <div>
    <Navigation />
    <div className="container">{props.children}</div>
  </div>
);
