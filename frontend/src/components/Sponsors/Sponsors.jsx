import React from "react";

import Sponser from "./SponsorData.json";
import Carousel from 'react-bootstrap/Carousel'

export const Sponsors = () => {
  return (
    <Carousel variant="dark" style={{position: "absolute", border: "1px solid black",  bottom: 0, width: "100%"}}
    controls={false}
    indicators={true}
    >

    {Sponser.map(Sponsor => {
      return(
        <Carousel.Item key={Sponsor.id}>
            <img
              className="d-block w-100"
              src={Sponsor.Image}
              alt={Sponsor.id}
              width="100%"
              height="130px"
           />
           <Carousel.Caption>
             <h5>{Sponsor.SponsorNavn}</h5>
             <p>{Sponsor.Info}</p>
           </Carousel.Caption>
        </Carousel.Item>
      )
    })}
    </Carousel>
  )
};
