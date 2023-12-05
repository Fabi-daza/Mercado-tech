import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { MyContext } from '../../context/Mycontext';
import "./DetallesProductos.css"

function DetallesProductos() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { products } = useContext(MyContext);
  
  const miProducto = products.filter(producto => producto.id === productId.toString());

  const handleVolverClick = () => {
    // Vuelve a la página principal o a la ruta que desees
    navigate("/");
  };

  return (
    <Container>
      {miProducto.map((producto) => (
        <Card key={producto.id} border="primary" className='mx-auto my-5'>
          <Card.Body className="card-body">
            <Card.Title className="text-center titulo">{producto.titulo}</Card.Title>
            <div className="product-info">
            <div className="product-image-detail">
              <Card.Img variant="center" className="p-4" src={producto.imagen} />
            </div>
            <div className="product-description">
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
            <br />
            <Card.Text className="product-price">
              <span>$</span>
              {producto.precio}
            </Card.Text>
            <div className="product-buttons">
            <Button variant="dark" onClick={handleVolverClick}>
              Volver a la Tienda
            </Button>
            <br />
            <Button variant="dark" onClick="#">
              Contactar al vendedor
            </Button>
            </div>
            </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}


export default DetallesProductos;
