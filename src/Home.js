import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    /* fragment (included with babel 7 via cra) - allows the grouping of children */
    <>
      <Row style={{ marginTop: "16px" }}>
        <Col>
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button
                  variant="success"
                  size="lg"
                  as={Link}
                  to={"/new-training-plan-form"}
                >
                  Create New Training Plan
                </Button>
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  as={Link}
                  to={"/existing-training-plan-form"}
                >
                  Review Existing / Previous Training Plan
                </Button>
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
