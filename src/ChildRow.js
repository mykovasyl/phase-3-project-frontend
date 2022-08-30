import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { FaEdit, FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function ChildRow({ id, name, children, setChildren, chores, setChores }) {
  const [childName, setChildName] = useState(`${name}`);
  const [isPTag, setIsPTag] = useState(true);

  function handleDelete() {
    const newChildren = children.filter((child) => child.id !== id);
    const choreToDelete = chores.find((chore) => chore.child_id === id);
    const newChores = chores.filter((chore) => chore.child_id !== id);
    fetch(`http://localhost:9292/children/${id}`, {
      method: "DELETE",
    });
    fetch(`http://localhost:9292/chores/${choreToDelete.id}`, {
      method: "DELETE",
    });
    setChildren(newChildren);
    setChores(newChores);
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
          <Button variant="warning" onClick={handleEdit}>
            <FaEdit />
          </Button>{" "}
          <Button variant="danger" onClick={handleDelete}>
            <HiTrash />
          </Button>
        </div>
      );
    } else {
      return (
        <Button variant="success" onClick={handleUpdate}>
          <FaCheck />
        </Button>
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
        <td></td>
      </td>
      <td>{changeButtons()}</td>
    </tr>
  );
}

export default ChildRow;
