import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewTrainingPlanForm = () => {
  return (
    // controlId ensures accessibility
    <Form style={{ marginTop: "8px", marginLeft: "8px" }}>
      <Form.Group className="mb-3" controlId="formTextTrainingPlanTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter plan title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTextTrainingPlanGoal">
        <Form.Label>Goal</Form.Label>
        <Form.Control type="text" placeholder="Enter goal" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewTrainingPlanForm;
