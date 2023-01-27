import { Col, Container, Row } from "react-bootstrap";
import Navegacion from "./components/Navegacion";
import Producto from "./components/Producto";
import { CarroProvider } from "./contexts/CarroContext";
import listaProductos from "./listaProductos.json";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <CarroProvider>
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React" />
        <Row>
          {listaProductos.map((producto, index) => {
            return (
              <Col sm={4}>
                <Producto key={index} {...producto} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </CarroProvider>
  );
}

export default App;
