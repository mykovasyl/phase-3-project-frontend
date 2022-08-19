import React from "react";
import { HiTrash } from "react-icons/hi";

function Child({ id, name, children, setChildren }) {
  function handleDelete() {
    const newChildren = children.filter((child) => child.id !== id);
    fetch(`http://localhost:9292/children/${id}`, {
      method: "DELETE",
    });
    setChildren(newChildren);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <button onClick={handleDelete}>
          <HiTrash />
        </button>
      </td>
    </tr>
  );
}

export default Child;
