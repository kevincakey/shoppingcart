import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Cancel = () => {
  return (
    <Container className="text-center">
      <h1>Sorry to see you cancelled your Stripe payment!</h1>
      <Link to="/">
        <Button variant="primary">Go to Home</Button>
      </Link>
    </Container>
  );
};

export default Cancel;
