import React from "react";
import ChoreRow from "./ChoreRow";

function ChoreList({ chores, setChores, children }) {
  const currentChores = chores.filter((chore) => chore.completed === false);
  const completedChores = chores.filter((chore) => chore.completed === true);

  function handleDelete(id) {
    const choresAfterDelete = chores.filter((chore) => chore.id !== id);
    fetch(`http://localhost:9292/chores/${id}`, {
      method: "DELETE",
    });
    setChores(choresAfterDelete);
  }

  let currentChoreRows = currentChores.map((chore) => {
    return (
      <ChoreRow
        key={chore.id}
        id={chore.id}
        name={chore.name}
        points={chore.points}
        dueBy={chore.due_by}
        children={children}
        childId={chore.child_id}
        handleDelete={handleDelete}
      />
    );
  });

  let completedChoreRows = completedChores.map((chore) => {
    return (
      <ChoreRow
        key={chore.id}
        id={chore.id}
        name={chore.name}
        points={chore.points}
        dueBy={chore.due_by}
        children={children}
        childId={chore.child_id}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div>
      <h1>Chore List</h1>
      <p>Currently assigned chores ({currentChores.length}):</p>
      <table>
        <thead>
          <tr>
            <td>Chore</td>
            <td>Points</td>
            <td>Due By</td>
            <td>Assigned to</td>
            <td>Edit(not available)/Delete</td>
          </tr>
        </thead>
        <tbody>{currentChoreRows}</tbody>
      </table>
      <p>Completed chores ({completedChores.length}):</p>
      <table>
        <thead>
          <tr>
            <td>Chore</td>
            <td>Points</td>
            <td>Due By</td>
            <td>Assigned to</td>
            <td>Edit(not available)/Delete</td>
          </tr>
        </thead>
        <tbody>{completedChoreRows}</tbody>
      </table>
    </div>
  );
}

export default ChoreList;
