import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

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
        <button onClick={handleEdit}>
          <FaEdit />
        </button>
        <button>
          <FaTrashAlt onClick={() => handleDelete(id)} />
        </button>
      </td>
    </tr>
  );
}

export default ChoreRow;
