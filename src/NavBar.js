import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar>
      <Nav className="flex-row justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/chorelist">Chore Table</Nav.Link>
        <Nav.Link href="/assignchores">Assign Chores</Nav.Link>
        <Nav.Link href="/childrenlist">Children</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
