import React, { useState } from "react";
import { client, q } from "../src/config/db";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";

const NewTrainingPlanForm = () => {
  // declare state and a functon to set the state; default to empty string
  // array destructuring; declare a variable for each element in the array returned from useState
  const [trainingPlanTitle, setTrainingPlanTitle] = useState("");
  const [trainingPlanGoal, setTrainingPlanGoal] = useState("");

  // const state = useState("");
  // const trainingPlanTitle = state[0];
  // const setTrainingPlanTitle = state(1);

  const handleSubmit = (event, trainingPlanTitle, trainingPlanGoal) => {
    event.preventDefault();
    client
      .query(
        q.Create(q.Collection("plans"), {
          data: {
            trainingPlanTitle,
            trainingPlanGoal,
          },
        })
      )
      .then(() => {
        toastr.options = { positionClass: "toast-top-center", timeOut: 2000 };
        toastr["success"]("Plan submitted successfully!");
        setTrainingPlanTitle("");
        setTrainingPlanGoal("");
      })
      .catch((error) => {
        toastr.options = { positionClass: "toast-top-center", timeOut: 2000 };
        toastr["error"]("Oh oh.. something went wrong!");
        setTrainingPlanTitle("");
        setTrainingPlanGoal("");
      });
  };

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
      <Button
        variant="primary"
        type="submit"
        onClick={(event) =>
          handleSubmit(event, trainingPlanTitle, trainingPlanGoal)
        }
      >
        Submit
      </Button>
    </Form>
  );
};

export default NewTrainingPlanForm;
