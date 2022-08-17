import React, { useState } from "react";

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

  return (
    <div>
      <h1>Add Children To Your Household</h1>
      <br></br>
      <p>Type your child's name and click submit</p>
      <form onSubmit={handleNewChild}>
        <input type="text" onChange={handleNameInput} />
        <button type="submit">Submit</button>
      </form>
      <div></div>
    </div>
  );
}

export default AddChildren;
