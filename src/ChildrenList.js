import React, { useState } from "react";
import ChildRow from "./ChildRow";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function ChildrenList({ children, setChildren, chores, setChores }) {
  const [childName, setChildName] = useState("");

  function handleNameInput(e) {
    setChildName(e.target.value);
  }

  function handleNewChild(e) {
    e.preventDefault();
    if (childName === "") {
      alert("Please make sure to fill in a name!");
    } else {
      fetch("http://localhost:9292/children", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: childName }),
      })
        .then((resp) => resp.json())
        .then((newChild) => {
          setChildren([...children, newChild]);
          setChildName("");
        })
        .catch((err) => {
          alert(`Form not submitted. Reason: ${err}. Please try again.`);
        });
    }
  }

  let childrenRows = children.map((child) => {
    return (
      <ChildRow
        key={child.id}
        id={child.id}
        name={child.name}
        children={children}
        setChildren={setChildren}
        chores={chores}
        setChores={setChores}
      />
    );
  });

  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>Manage Children In Your Household</h1>

      <Form onSubmit={handleNewChild}>
        <Form.Label style={{ margin: "20px" }}>
          Enter your child's name to add them.
        </Form.Label>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Control
            type="text"
            value={childName}
            onChange={handleNameInput}
          />
        </Col>
        <Button style={{ margin: "20px" }} size="sm" type="submit">
          Submit
        </Button>
      </Form>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <Table bordered style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>{childrenRows}</tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default ChildrenList;
