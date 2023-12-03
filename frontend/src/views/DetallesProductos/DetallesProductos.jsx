import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const DetallesProductos = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // Puedes usar datos de muestra o modificar según tus necesidades
  const product = {
    id: parseInt(productId),
    titulo: "Título del Producto",
    img: "URL de la imagen",
    descripcion: "Descripción del producto",
    precio: 999.99,
  };

  const handleVolverClick = () => {
    // Vuelve a la página principal o a la ruta que desees
    navigate("/");
  };

  return (
    <Card border="primary" className='mx-auto my-5' style={{ width: '600px', height: '70vh', overflowY: 'auto' }}>
      <Card.Body className="card-body">
        <Card.Title className="text-center titulo">{product.titulo}</Card.Title>
        <div className="product-image">
        <Card.Img variant="center" className="p-4" src= "../../assets/img/1666139048-h5-elite-hero-black-86ec8740-b800-4ad5-acb2-9dfad444b9f9-2cdc88e4-01ef-40d7-966d-7ec7fa26dcec.png" />
      </div>
        <Card.Text>
          <span>$</span>
          {product.precio}
        </Card.Text>
        <br />
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius dolores, repudiandae harum magni minus natus nam voluptates molestias velit, repellat dignissimos illo eveniet excepturi accusamus aliquid necessitatibus sapiente! Necessitatibus.
        </Card.Text>
        <br />
        <Button variant="dark" onClick={handleVolverClick}>
          Volver a la Tienda
        </Button>
        <br />
        <Button variant="dark" onClick={handleVolverClick}>
          Agregar al carro
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DetallesProductos;
