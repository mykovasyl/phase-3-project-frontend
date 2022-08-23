import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function Chore({ id, name, points, dueBy, children, childId }) {
  const childName = children.find((child) => child.id === childId).name;

  return (
    <tr>
      <td>{name}</td>
      <td>{points}</td>
      <td>{dueBy}</td>
      <td>{childName}</td>
      <td>
        <button>
          <FaEdit />
        </button>
        <button>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
}

export default Chore;
