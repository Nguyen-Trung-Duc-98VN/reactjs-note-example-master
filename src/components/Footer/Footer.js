import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer(props) {

  return (
    <footer>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <a href="https://viblo.asia/p/authorization-voi-jwt-trong-reactredux-app-GrLZD8nOZk0" target="blank">© Copyright 2020</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
