import React, { useState } from "react";

function AssignChores({ children, chores, setChores }) {
  const [newChore, setnewChore] = useState({
    name: "",
    dueBy: "",
    points: "",
    childId: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      newChore.name === "" ||
      newChore.dueBy === "" ||
      newChore.points === "" ||
      newChore.childId === ""
    ) {
      alert("Please make sure the form is completely filled out!");
    } else {
      fetch("http://localhost:9292/chores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newChore.name,
          due_by: newChore.dueBy,
          points: newChore.points,
          child_id: newChore.childId,
        }),
      })
        .then((resp) => resp.json())
        .then((postedChore) => {
          setChores([...chores, postedChore]);
        });
    }
  }

  function handleChange(e) {
    console.log(`name: ${e.target.name}, value: ${e.target.value}`);
    setnewChore({ ...newChore, [e.target.name]: e.target.value });
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
          name="dueBy"
          value={newChore.dueBy}
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
        <select name="childId" onChange={handleChange}>
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
