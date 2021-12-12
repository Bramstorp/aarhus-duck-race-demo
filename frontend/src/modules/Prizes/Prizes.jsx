import React from "react";

// Bootstrap Import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import af logo
import Logo from "../../assets/img/page-header-duck.png";

// Import af styles
import useStyles from './style';

export const Prizes = () => {
  const classes = useStyles();
  return(
    <div className={classes.content}>
      <p className={classes.title}> 
        <img src={Logo} alt="Error"/> Præmier
      </p>
      <Container>
        <Row>
          <Col className={classes.col}>1 of 3</Col>
        </Row>
        <Row>
          <Col className={classes.col}>1 of 3</Col>
          <Col className={classes.col}>2 of 3</Col>
          <Col className={classes.col}>3 of 3</Col>
        </Row>
        <Row>
          <Col className={classes.col}>1 of 3</Col>
          <Col className={classes.col}>2 of 3</Col>
          <Col className={classes.col}>3 of 3</Col>
        </Row>
        <Row>
          <Col className={classes.col}>1 of 3</Col>
          <Col className={classes.col}>2 of 3</Col>
          <Col className={classes.col}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
