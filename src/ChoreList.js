import React from "react";
import ChoreRow from "./ChoreRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

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
      <h1 style={{ marginTop: "20px" }}>Chore List</h1>

      <br></br>
      <Row>
        <Col>
          <p>Current chores ({currentChores.length}):</p>
          <Table striped hover style={{ marginTop: "20px" }}>
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
          </Table>
        </Col>
        <Col>
          <br></br>
          <p>Completed chores ({completedChores.length}):</p>
          <Table striped hover style={{ marginTop: "20px" }}>
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
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default ChoreList;
