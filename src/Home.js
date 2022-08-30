import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const linkStyling = { textDecoration: "none" };
  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>Welcome to Chores Gallore!</h1>
      <p>
        This Application was built to encourage children to do their chores
        through a game style level system.
      </p>
      <p>
        Parents can assign chores to their children and assign a point value
        that will be awarded upon completion of the chore.
      </p>
      <p>
        Points help the child unlock "levels" that will allow them to redeem
        their hardwork for prizes.
      </p>
      <p>
        Parents can choose what rewards will be available for different levels
        with the child's input.
      </p>
      <nav>
        <Link style={linkStyling} to="/assignchores">
          <h2>Assign Chores</h2>
        </Link>
      </nav>
      <p>You'll be able to assign a specific chore to your child.</p>
      <p>
        You are able to set the points and due date according to your specific
        needs.
      </p>
      <p>
        If you have multiple children, a drop down is available to choose who
        the chore will be assigned to.
      </p>
      <nav>
        <Link style={linkStyling} to="/childrenlist">
          <h2>Children List</h2>
        </Link>
      </nav>
      <p>
        Here you can add children to your household so they can be assigned
        chores.
      </p>
      <p>Every child's points automatically start at 0.</p>
      <nav>
        <Link style={linkStyling} to="/chorelist">
          <h2>Chore List</h2>
        </Link>
      </nav>
      <p>Two organized tables of all current and completed chores.</p>
      <p>You can edit and delete chores on this page.</p>
    </div>
  );
}

export default Home;
