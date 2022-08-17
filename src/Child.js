import React from "react";
import { HiTrash } from "react-icons/hi";

function Child({ childName, handleDelete }) {
  return (
    <div>
      <td>{childName}</td>
      <td>
        <button onClick={handleDelete}>
          <HiTrash />
        </button>
      </td>
    </div>
  );
}

export default Child;
