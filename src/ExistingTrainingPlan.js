import React, { useState, useEffect } from "react";
import { client, q } from "../src/config/db";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ExistingTrainingPlan = () => {
  const [planData, setPlanData] = useState([]);

  useEffect(() => {
    getAllExpenses.then((planData) => {
      setPlanData(planData);
    });
    // eslint-disable-next-line
  }, []);

  const getAllExpenses = client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_plans"))))
    .then((response) => {
      const expenseRef = response.data;
      const getAllDataQuery = expenseRef.map((ref) => {
        return q.Get(ref);
      });
      return client.query(getAllDataQuery).then((data) => data);
    })
    .catch((error) => console.error("Error: ", error.message));

  return (
    <>
      <Row style={{ marginTop: "16px" }}>
        <Col style={{ backgroundColor: "#d3d3d4" }}></Col>
        <Col md={6}>
          {" "}
          {planData.map((plan) => {
            return (
              <Row style={{ marginTop: "16px" }} key={plan.ts}>
                <Col>
                  <Card className="text-center">
                    <Card.Header>{plan.data.trainingPlanTitle}</Card.Header>
                    <Card.Body>
                      <div className="d-grid gap-2">
                        <Card.Text>{plan.data.trainingPlanGoal}</Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to={`/activities/${plan.ts}`}
                        >
                          Activities
                        </Button>
                      </div>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col style={{ backgroundColor: "#d3d3d4" }}></Col>
      </Row>
    </>
  );
};

export default ExistingTrainingPlan;
