import React from "react";
import "./Home.style.css";

import { Calendar } from "./Calendar";

export const Home = () => {
  return (
    <>
      <h1 className="title font-weight-bold text-center">Aarhus duck race</h1>
      <div className="video"></div>
      <div className="d-flex">
        <Calendar />
      </div>
    </>
  );
};
