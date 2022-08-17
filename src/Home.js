import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to the Chores Game</h1>
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
      <h2>Assign Chores</h2>
      <p>
        On this page you'll be able to assign a specific chore to your child.
      </p>
      <p>
        You are able to set the points and due date according to your specific
        needs.
      </p>
      <p>
        If you have multiple children, a drop down is available to choose who
        the chore will be assigned to.
      </p>
      <h2>Add Children</h2>
      <p>
        On this page you can add children into the system so they can be
        assigned chores.
      </p>
      <p>Every child's points automatically start at 0.</p>
    </div>
  );
}

export default Home;
