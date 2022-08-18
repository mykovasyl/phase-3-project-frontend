import React from "react";
import { HiTrash } from "react-icons/hi";

function Child({ id, name, handleDelete }) {
  return (
    <div>
      <td>{name}</td>
      <td>
        <button onClick={handleDelete(id)}>
          <HiTrash />
        </button>
      </td>
    </div>
  );
}

export default Child;
