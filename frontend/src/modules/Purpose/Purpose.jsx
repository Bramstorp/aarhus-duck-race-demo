import React from "react";

// Import af billeder
import FlagLogo from "../../assets/img/page-header-duck.png";

// Import af styles
import useStyles from './style';

export const Purpose = () => {
  const classes = useStyles();
  return(
    <div className={classes.content}>
      <p className={classes.title}>
        <img src={FlagLogo} alt="Error"/> Hvad er Aarhus Duck Race?
      </p>
      <div className={classes.text}>
        <p>
          Udviklings hæmmede børn har svært ved attage til koncerter.
			  </p>
        <p>
          Derfor vil vi gerne bringe musik og underholdning ud på bosteder for udviklings hæmmede børn bor.
			  </p>
        <p>
          Overskuddet at Aarhus duckrace går ubeskåret til dette
			  </p>
        <p>
          Al arbejde i forbindelse med Aarhus duck race er frivillige og ulønnede.
			  </p>
        <p>
          Samtidigt med dette vil vi, udviklings hæmmede gerne holde en fest for jer. Som via jeres skat hverdag hjælper os.
        </p>
        <p className={classes.underText}>
          Tak for det!
        </p>
      </div>
    </div>
  )
};
