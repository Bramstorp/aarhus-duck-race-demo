import React from "react";

// Import af billeder
import FlagLogo from "../../assets/img/page-header-duck.png";

// Import af styles
import useStyles from './style';

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <p className={classes.title}>
        <img src={FlagLogo} alt="Error"/> Om os
      </p>
      <div className={classes.text}>
        <p>
          Foreningen ”Aarhus duck Race” er
          en forening som ene og alene
          på 100 % frivillig basis at afholde
          dette løb og folkefest.
        </p>
        <p>
          Samtidigt med at gøre det.
          Har vi det skide sjovt. 
          Det er jo altid sjovt at
          gøre noget godt for andre.
        </p>
        <p>
          Så har du lyst til at være frivillig.
          Er du meget velkommen til at blive
          medhjælper, og medlem af foreningen.
        </p>
      </div>
    </div>
  )
};
