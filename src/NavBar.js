import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const linkStyling = { textDecoration: "none", color: "white" };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="flex-row justify-content-center"
    >
      <Navbar.Brand style={{ marginRight: "auto", paddingLeft: "15px" }}>
        Chores Gallore
      </Navbar.Brand>
      <Nav>
        <Nav.Link>
          <Link to="/" style={linkStyling}>
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/chorelist" style={linkStyling}>
            Chore Table
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/assignchores" style={linkStyling}>
            Assign Chores
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/childrenlist" style={linkStyling}>
            Children
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
