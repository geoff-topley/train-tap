import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import Navigation from "./NavBar";
import NewTrainingPlanForm from "./NewTrainingPlanForm";
import ExistingTrainingPlan from "./ExistingTrainingPlan";
import Activities from "./Activities";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid>
        <Route exact path="/" component={Home} />
        <Route path="/new-training-plan-form" component={NewTrainingPlanForm} />
        <Route
          path="/existing-training-plan-form"
          component={ExistingTrainingPlan}
        />
        <Route path="/activities/:id" component={Activities} />
      </Container>
    </>
  );
}

export default App;
