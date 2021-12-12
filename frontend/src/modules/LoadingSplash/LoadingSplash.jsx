import React from "react";

// Import af billeder
import Title from "../../assets/img/splash-logo.png"
import Logo from "../../assets/img/aarhustech-logo.png"

// Import af styles
import useStyles from './style';

export const LoadingSplash = () => {
  const classes = useStyles();
  return (
    <div className={classes.splashBody}>
        <div className={classes.image}>
            <img alt="Not loaded" src={Title} />
        </div>
        <p className={classes.credit}>Made by AARHUS TECH <img className={classes.ATLogo} alt="Not loaded" src={Logo} /></p>
    </div>
  )
};
