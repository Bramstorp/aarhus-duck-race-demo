import React from "react";
import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = (props) => (
  <div>
    <Navbar />
    <div className="container theme-swiss">{props.children}</div>
  </div>
);
