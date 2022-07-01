import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar">
      <Container fluid>
        <Navbar.Brand to="/" as={Link} className="nav-brand">
          adaeo's Dashboard
        </Navbar.Brand>
        <Navbar.Toggle className="nav-toggle" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link eventKey="home-link" to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="devtest-link" to="/devtest" as={Link}>
              Devtest
            </Nav.Link>
            <Nav.Link eventKey="missing-link" to="/missingpage" as={Link}>
              Missing
            </Nav.Link>
            <Nav.Link eventKey="login-link" to="/login" as={Link}>
              Login
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
