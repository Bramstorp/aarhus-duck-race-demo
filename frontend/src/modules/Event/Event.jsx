import React from "react";

import WhereLogo from "../../assets/img/where-is-it-page-header.png"
import Location from "../../assets/img/PlaceholderEmmet.png"

// Import af styles
import useStyles from './style';

export const Event = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <p className={classes.title}> 
        <img src={WhereLogo} alt="Error"/> Hvor foregår racet?
      </p>
      <div>
        <img src={Location} alt="Error" className={classes.location}/>
        <p><br/>
          Vore ænder skal tilbageligge den krævende
          strækning fra Vester Alle til Immervad.
        </p>
        <p>
          Alt efter omstændighederne tager det
          ænderne ca 45 minutter at tilbagelægge
          strækningen. Her tages dog forbehold for
          strøm, vind, drone, tang og
          andre vanskeligheder.
        </p>
        <p>
          Samtidigt med dette vil der i Mølleparken
          være en scene med live musik
          og andre former for underholdning.
          Så Rab Rab afsted!
        </p>
        </div>
    </div>
  )
};
