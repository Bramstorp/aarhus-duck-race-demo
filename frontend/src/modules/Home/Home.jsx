import React, { useState } from "react";
import "./Home.style.css";
import { LoadingSplash } from "../LoadingSplash/LoadingSplash";
import { useSpring, animated } from "react-spring";

import { Calendar } from "./Calendar";

export const Home = () => {
  const [visible, setVisible] = useState(0);


  
  const animateSplash = useSpring({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
      height: "0px"
    },
    config: {duration: 4000}
  });

  const animateHome = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {duration: 4500}
  });
  
  return (
    <>
    <animated.div style={animateSplash} className="splash">
      <LoadingSplash id="hideMe"/>
    </animated.div>
    <animated.div style={animateHome} className="homePage">
      <h1 className="title font-weight-bold text-center">Aarhus duck race</h1>
      <div className="video"></div>
      <div className="d-flex">
        <Calendar />
      </div>
      </animated.div>
    </>
  );
};
