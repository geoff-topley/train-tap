import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import Navigation from "./NavBar";
import NewTrainingPlanForm from "./NewTrainingPlanForm";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid>
        <Route exact path="/" component={Home} />
        <Route path="/new-training-plan-form" component={NewTrainingPlanForm} />
      </Container>
    </>
  );
}

export default App;
