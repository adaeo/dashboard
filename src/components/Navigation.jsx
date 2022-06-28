import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

export default function Navigation(props) {
  return (
    <div className="nav-bar">
      <Navbar dark>
        <NavbarBrand to="/" tag={Link}>
          adaeo's Dashboard
        </NavbarBrand>
        <Nav className="nav">
          <NavItem>
            <NavLink to="/" tag={Link}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/one" tag={Link}>
              One
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/two" tag={Link}>
              Two
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/devtest" tag={Link}>
              DevTest
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
