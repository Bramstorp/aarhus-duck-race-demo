import React from "react";
import { Navigation } from "./Navbar";
import { Sponsors } from '../components/Sponsors/Sponsors';

import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = (props) => (
  <div>
    <div className="container">{props.children}</div>
  </div>
);
