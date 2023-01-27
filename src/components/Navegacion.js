import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Carro from "./Carro";

const Navegacion = ({ titulo = "carrito" }) => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">{titulo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>
            <Carro />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
