import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import Navigation from "./NavBar";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid>
        <Route exact path="/" component={Home} />
      </Container>
    </>
  );
}

export default App;
