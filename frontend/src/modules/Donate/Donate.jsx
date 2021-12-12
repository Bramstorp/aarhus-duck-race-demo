import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

// Import af billede
import TextLogo from "../../assets/img/stor-and.png";

// Import af styles
import useStyles from './style';

export const Donate = () => {
  const classes = useStyles();
  const [alertVisible, setAlertVisible] = useState(false)

  if (alertVisible) {
    return(
      <Alert className={classes.alert} variant="primary" onClose={() => setAlertVisible(false)} dismissible>
        <Alert.Heading>Her vil du i fremtiden kunne donere</Alert.Heading>
        <p>Funktioner som denne vil komme ind senere...</p>
      </Alert>
    )
  }

  return (
    <div className={classes.content}>
      <p className={classes.title}> 
         Doner til os her!
      </p>
      <div className={classes.underContent}>
        <img src={TextLogo} alt="Error" className={classes.textLogo}/>
        <p className={classes.text}>Ønsker du at doner et beløb til os Kan du gøre det her!</p>
        <form>
          <input className={classes.inputAntal} placeholder="Antal"></input>
          <input className={classes.inputTelefon} placeholder="Skriv telefon nr."></input>
          <button className={classes.buttonMobilePay} onClick={() => setAlertVisible(true)}> Betal med MobilePay</button>
        </form>
      </div>
    </div>
  )
};
