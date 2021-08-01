import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container fluid>
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
    </Container>
  );
}

export default App;
