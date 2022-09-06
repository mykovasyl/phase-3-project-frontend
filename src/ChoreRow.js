import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function ChoreRow({ id, name, points, dueBy, completed, child, handleDelete }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    points: points,
    due_by: dueBy,
  });

  function handleChange(e) {
    console.log(e);
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit() {
    setEditing(!editing);
  }

  function handleUpdate() {
    setEditing(!editing);
    fetch(`http://localhost:9292/chores/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedChore) => {
        console.log(updatedChore);
        setFormData({ ...formData, updatedChore });
      });
  }

  function tableDataOrInputs() {
    if (!editing) {
      return (
        <>
          <td>{formData.name}</td>
          <td>{formData.points}</td>
          <td>{formData.due_by}</td>
          <td>{child.name}</td>
          <td>
            {completed ? null : (
              <Button variant="warning" onClick={handleEdit}>
                <FaEdit />
              </Button>
            )}
            <Button variant="danger">
              <FaTrashAlt onClick={() => handleDelete(id)} />
            </Button>
          </td>
        </>
      );
    } else {
      return (
        <>
          <td>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="points"
              value={formData.points}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="due_by"
              value={formData.due_by}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>{child.name}</td>
          <td>
            <Button variant="success" onClick={handleUpdate}>
              <FaCheck />
            </Button>
          </td>
        </>
      );
    }
  }

  return <tr>{tableDataOrInputs()}</tr>;
}

export default ChoreRow;
