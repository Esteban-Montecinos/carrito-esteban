import { useContext } from 'react';
import { Badge, Button, OverlayTrigger, Popover, Table } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { CarroContext } from '../contexts/CarroContext';
import listaCarrito  from "../listaCarrito.json";
const Carro = () => {
  const [cart, setCart] = useContext(CarroContext)

  const cantidad = cart.reduce((acumulador, actual) =>{return acumulador + actual.cantidad},0)
  const precio = cart.reduce((acumulador, actual) =>{return acumulador += actual.precio},0)
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Cartera de compras</Popover.Header>
      <Popover.Body>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>    
          {listaCarrito ? listaCarrito.map(
            (lista, index)=>{
              return(
                <tr key={index}>
                  <td>{index += 1}</td>
                  <td>{lista.titulo}</td>
                  <td>{lista.precio}</td>
                </tr>
              )
            }
          ): ""}
          </tbody>
          <tfoot>
            <td>Total</td>
            <td></td>
            <td>{precio} CLP</td>
          </tfoot>
        </Table>
      </Popover.Body>
    </Popover>
  );
  return (
<OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant='info'>
        <span><FaShoppingCart/></span>
        <Badge variant="secondary">{cantidad}</Badge>
      </Button>
      </OverlayTrigger>
    
  )
}

export default Carro
