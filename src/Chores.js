import React from "react";
import ChoreRow from "./ChoreRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Chores({ chores, setChores, children }) {
  const currentChores = chores.filter((chore) => chore.completed === false);
  const completedChores = chores.filter((chore) => chore.completed === true);

  // function handleMistake() {
  //   fetch(`http://localhost:9292/chores/${id_to_delete}`, {
  //     method: "DELETE",
  //   });
  // }

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
        completed={chore.completed}
        children={children}
        child={chore.child}
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
        completed={chore.completed}
        children={children}
        child={chore.child}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div>
      {/* <p>{handleMistake()}</p> */}
      <h1 style={{ marginTop: "20px" }}>Chores</h1>

      <br></br>
      <Row>
        <Col md={6}>
          <h5>Current chores ({currentChores.length}):</h5>
          <Table striped hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <td>Chore</td>
                <td>Points</td>
                <td>Due By</td>
                <td>Assigned to</td>
                <td>Edit/Delete</td>
              </tr>
            </thead>
            <tbody>{currentChoreRows}</tbody>
          </Table>
        </Col>
        <Col md={6}>
          <h5>Completed chores ({completedChores.length}):</h5>
          <Table striped hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <td>Chore</td>
                <td>Points</td>
                <td>Due By</td>
                <td>Completed by</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>{completedChoreRows}</tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Chores;
