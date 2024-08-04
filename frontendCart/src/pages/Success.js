import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Success = () => {
  return (
    <Container className="text-center">
      <h1>Thank You for your payment!</h1>
      <Link to="/">
        <Button variant="primary">Go to Home</Button>
      </Link>
    </Container>
  );
};

export default Success;
