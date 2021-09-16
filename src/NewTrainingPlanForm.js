import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewTrainingPlanForm = () => {
  // declare state and a functon to set the state; default to empty string
  // array destructuring; declare a variable for each element in the array returned from useState
  const [trainingPlanTitle, setTrainingPlanTitle] = useState("");
  const [trainingPlanGoal, setTrainingPlanGoal] = useState("");

  // const state = useState("");
  // const trainingPlanTitle = state[0];
  // const setTrainingPlanTitle = state(1);

  return (
    // controlId ensures accessibility
    <Form style={{ marginTop: "8px", marginLeft: "8px" }}>
      <Form.Group className="mb-3" controlId="formTextTrainingPlanTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter plan title"
          value={trainingPlanTitle}
          onChange={(event) => setTrainingPlanTitle(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTextTrainingPlanGoal">
        <Form.Label>Goal</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter goal"
          value={trainingPlanGoal}
          onChange={(event) => setTrainingPlanGoal(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewTrainingPlanForm;
