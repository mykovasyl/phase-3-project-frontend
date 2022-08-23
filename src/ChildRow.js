import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { FaEdit, FaCheck } from "react-icons/fa";

function ChildRow({ id, name, children, setChildren }) {
  const [childName, setChildName] = useState(`${name}`);
  const [isPTag, setIsPTag] = useState(true);

  function handleDelete() {
    const newChildren = children.filter((child) => child.id !== id);
    fetch(`http://localhost:9292/children/${id}`, {
      method: "DELETE",
    });
    setChildren(newChildren);
  }

  function handleEdit() {
    changeButtons();
    setIsPTag(!isPTag);
  }

  function handleNameInput(e) {
    setChildName(e.target.value);
  }

  function handleUpdate() {
    setIsPTag(!isPTag);
    fetch(`http://localhost:9292/children/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: childName }),
    })
      .then((resp) => resp.json())
      .then((updatedChild) => {
        console.log(updatedChild);
      });
  }

  function changeButtons() {
    if (isPTag) {
      return (
        <div>
          <button onClick={handleEdit}>
            <FaEdit />
          </button>
          <button onClick={handleDelete}>
            <HiTrash />
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={handleUpdate}>
          <FaCheck />
        </button>
      );
    }
  }

  return (
    <tr>
      <td>
        {isPTag ? (
          <p>{childName}</p>
        ) : (
          <input
            type="text"
            value={childName}
            onChange={handleNameInput}
          ></input>
        )}
      </td>
      <td>{changeButtons()}</td>
    </tr>
  );
}

export default ChildRow;
