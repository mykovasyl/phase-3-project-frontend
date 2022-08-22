import React, { useState } from "react";

function AssignChores({ children, chores, setChores }) {
  const [newChore, setNewChore] = useState({
    name: "",
    due_by: "",
    points: "",
    child_id: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      newChore.name === "" ||
      newChore.due_by === "" ||
      newChore.points === "" ||
      newChore.child_id === ""
    ) {
      alert("Please make sure the form is completely filled out!");
    } else {
      fetch("http://localhost:9292/chores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newChore),
      })
        .then((resp) => resp.json())
        .then((postedChore) => {
          setChores([...chores, postedChore]);
          setNewChore({
            name: "",
            due_by: "",
            points: "",
            child_id: "",
          });
        });
    }
  }

  function handleChange(e) {
    console.log(`name: ${e.target.name}, value: ${e.target.value}`);
    setNewChore({ ...newChore, [e.target.name]: e.target.value });
  }

  let childOptions = children.map((child) => {
    return (
      <option key={child.id} value={child.id}>
        {child.name}
      </option>
    );
  });

  return (
    <div>
      <h1>Assign Chores</h1>
      <p>
        Please fill out this form to assign a chore to a child in your
        household.
      </p>
      <form onSubmit={handleSubmit}>
        <label>Chore name:</label>
        <input
          type="text"
          name="name"
          value={newChore.name}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Due by:</label>
        <input
          type="date"
          name="due_by"
          value={newChore.due_by}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Points awarded upon completion:</label>
        <input
          type="number"
          name="points"
          value={newChore.points}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Assign to child:</label>
        <select name="child_id" onChange={handleChange}>
          <option value="none" selected disabled hidden>
            Select a child
          </option>
          {childOptions}
        </select>
        <br></br>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AssignChores;
