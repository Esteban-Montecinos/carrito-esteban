import React from "react";
import { Card } from "react-bootstrap";
import FichaProducto from "./FichaProducto";

const Producto = (producto) => {
  const { imagen, titulo, descripcion,precio} = producto
  return (
    <Card border="primary" className="mb-4">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text><b>Valor: </b>{precio}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
        <FichaProducto
          {...producto}
        />
      </Card.Body>
    </Card>
  );
};

export default Producto;
