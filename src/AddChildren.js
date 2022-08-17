import React, { useState } from "react";

function AddChildren() {
  const [childName, setChildName] = useState();

  function handleNameInput(e) {
    console.log(childName);
    setChildName(e.target.value);
  }

  function handleNewChild(e) {
    e.preventDefault();
    console.log(childName);
    fetch("http://localhost:9292/children", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(childName),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
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
    </div>
  );
}

export default AddChildren;
