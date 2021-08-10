import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="me-auto">
        <Nav.Link href="/" style={{ marginLeft: "8px" }}>
          <h4>Home</h4>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
