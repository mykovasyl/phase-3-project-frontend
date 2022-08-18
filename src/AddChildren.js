import React, { useState } from "react";
import Child from "./Child";

function AddChildren({ children, setChildren }) {
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
      body: JSON.stringify(childName),
    })
      .then((resp) => resp.json())
      .then((newChild) => {
        setChildren([...newChild, children]);
      });
  }

  function handleDelete(id) {
    const newChildren = children.filter((child) => child.id !== id);
    fetch("http://localhost:9292/children/:id", {
      method: "DELETE",
    });
  }

  let childrenRows = children.map((child) => {
    return (
      <tr>
        <Child id={child.id} name={child.name} handleDelete={handleDelete} />
      </tr>
    );
  });

  return (
    <div>
      <h1>Add Children To Your Household</h1>
      <br></br>
      <p>Type your child's name and click submit</p>
      <form onSubmit={handleNewChild}>
        <input type="text" onChange={handleNameInput} />
        <button type="submit">Submit</button>
      </form>
      <table>
        <tr>
          <td>Name</td>
          <td>Edit/Delete</td>
        </tr>
        {childrenRows}
      </table>
    </div>
  );
}

export default AddChildren;
