import React, { useState } from "react";
import ChildRow from "./ChildRow";

function ChildrenList({ children, setChildren }) {
  const [childName, setChildName] = useState();

  function handleNameInput(e) {
    setChildName(e.target.value);
  }

  function handleNewChild(e) {
    e.preventDefault();
    fetch("http://localhost:9292/children", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: childName }),
    })
      .then((resp) => resp.json())
      .then((newChild) => {
        setChildren([...children, newChild]);
        setChildName("");
      });
  }

  let childrenRows = children.map((child) => {
    return (
      <ChildRow
        key={child.id}
        id={child.id}
        name={child.name}
        children={children}
        setChildren={setChildren}
      />
    );
  });

  return (
    <div>
      <h1>Add Children To Your Household</h1>
      <br></br>
      <p>Type your child's name and click submit</p>
      <form onSubmit={handleNewChild}>
        <input type="text" value={childName} onChange={handleNameInput} />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Current Children</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Edit/Delete</td>
          </tr>
          {childrenRows}
        </tbody>
      </table>
    </div>
  );
}

export default ChildrenList;
