import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    /* fragment (included with babel 7 via cra) - allows the grouping of children */
    <>
      <Row style={{ marginTop: "16px" }}>
        <Col>
          <h2 className="text-center">train-tap</h2>
        </Col>
      </Row>
      <Row style={{ marginTop: "16px" }}>
        <Col>
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="success" size="lg">
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
                <Button variant="primary" size="lg">
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
