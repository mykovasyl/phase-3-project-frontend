import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function AssignChores({ children, chores, setChores }) {
  const [newChore, setNewChore] = useState({
    name: "",
    due_by: "",
    points: "",
    child_id: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      newChore.name === "" ||
      newChore.due_by === "" ||
      newChore.points === "" ||
      newChore.child_id === ""
    ) {
      alert("Please make sure the form is completely filled out!");
    } else {
      fetch("http://localhost:9292/chores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newChore),
      })
        .then((resp) => resp.json())
        .then((postedChore) => {
          alert("Submitted successfully! New chore added to the Chore Table.");
          setChores([...chores, postedChore]);
          setNewChore({
            name: "",
            due_by: "",
            points: "",
            child_id: "",
          });
        })
        .catch((err) => {
          alert(`Form not submitted. Reason: ${err}. Please try again.`);
        });
    }
  }

  function handleChange(e) {
    setNewChore({ ...newChore, [e.target.name]: e.target.value });
  }

  let childOptions = children.map((child) => {
    return (
      <option key={child.id} value={child.id}>
        {child.name}
      </option>
    );
  });

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ marginTop: "20px" }}>Assign Chores</h1>
          <p style={{ marginBottom: "20px" }}>
            Please fill out the form to assign a chore to a child<br></br> in
            your household.
          </p>
        </Col>
      </Row>
      <Row lg={2} className="justify-content-md-center">
        <Col>
          <Form className="mb-3" onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md={8} className="mb-3">
                <Form.Label>Chore name:</Form.Label>
                <Form.Control
                  className="mb-3"
                  type="text"
                  name="name"
                  value={newChore.name}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-3">
                <Form.Label>Due by:</Form.Label>
                <Form.Control
                  type="date"
                  name="due_by"
                  value={newChore.due_by}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md={4} className="mb-3">
                <Form.Label>Points awarded:</Form.Label>
                <Form.Control
                  type="number"
                  name="points"
                  value={newChore.points}
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Assign to child:</Form.Label>
                <Form.Select
                  name="child_id"
                  value={newChore.child_id}
                  onChange={handleChange}
                >
                  <option value="">Select a child</option>
                  {childOptions}
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AssignChores;
