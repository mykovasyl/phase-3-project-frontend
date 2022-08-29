import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function ChoreRow({
  id,
  name,
  points,
  dueBy,
  children,
  childId,
  handleDelete,
}) {
  const childName = children.find((child) => child.id === childId).name;

  function handleEdit() {}

  return (
    <tr>
      <td>{name}</td>
      <td>{points}</td>
      <td>{dueBy}</td>
      <td>{childName}</td>
      <td>
        <Button variant="danger" onClick={handleEdit}>
          <FaEdit />
        </Button>
        <Button variant="warning">
          <FaTrashAlt onClick={() => handleDelete(id)} />
        </Button>
      </td>
    </tr>
  );
}

export default ChoreRow;
