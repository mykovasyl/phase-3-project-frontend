import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navigation">
      <Link to="/">Home</Link>
      <Link to="/chorelist">Chore Table</Link>
      <Link to="/assignchores">Assign Chores</Link>
      <Link to="/childrenlist">Children</Link>
    </nav>
  );
}

export default NavBar;
