import React, { useContext, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { CarroContext } from "../contexts/CarroContext";
import listaCarrito from "../listaCarrito.json";
const FichaProducto = ({ imagen, titulo, descripcion, precio, stock }) => {
  const [carro, setCarro] = useContext(CarroContext);
  const [show, setShow] = useState(false);
  const [stockInicial, setStockInicial] = useState(stock);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarCarrito = () => {
    setCarro((productosActuales) => {
      return [...productosActuales, { titulo, precio, cantidad: 1 }];
    });
    setStockInicial(stockInicial - 1)
    listaCarrito.push({
      titulo: titulo,
      precio: precio,
    });
    setShow(!show);
  };

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Ver ficha
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={imagen} />
          <p>El detalle del producto seleccionado es el siguiente: </p>
          {descripcion}
          <p>
            Este producto tiene un valor de <b>{precio}</b> pesos
          </p>
          {stockInicial > 0 ?
          <p>
            Hay <b>{stockInicial}</b> unidades de este producto disponibles.
          </p>:
          <p>No hay unidades disponibles</p>}
        </Modal.Body>
        <Modal.Footer>
          {stockInicial > 0 ?
          <Button variant="primary" onClick={agregarCarrito}>
            Agregar a carrito
          </Button> :
          <Button variant="danger" disabled>
            Sin stock
          </Button>}
          <Button variant="secondary" onClick={handleClose}>
            Volver atras
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FichaProducto;
