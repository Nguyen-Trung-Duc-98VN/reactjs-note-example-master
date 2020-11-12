import React from "react";

import Menu from "./Menu/Menu";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";

function Header(props) {

  return (
    <header className="bg-primary">
      <Container>
        <Row>
          <Col md={12}>
            <Menu/>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
