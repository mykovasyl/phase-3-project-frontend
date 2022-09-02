import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const linkStyling = { color: "white" };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="flex-row justify-content-center"
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{ marginRight: "auto", paddingLeft: "15px" }}
      >
        Chores Gallore
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/" style={linkStyling}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/chores" style={linkStyling}>
          Chores
        </Nav.Link>
        <Nav.Link as={Link} to="/assignchores" style={linkStyling}>
          Assign Chores
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/childrenlist"
          style={{ marginRight: "10px", color: "white" }}
        >
          Children
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
