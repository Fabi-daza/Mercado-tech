import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Mycontext";
import { useContext } from "react";
import "./Card.css";

function ProductCard({ id, img, titulo, precio }) {
  const { favoritos } = useContext(MyContext);
  const navigate = useNavigate(); // Obtiene la función de navegación

  const findFav = favoritos.find((element) => element.product_id === id);

  function heartFilled(findFav) {
    return findFav ? "bi bi-heart-fill heart-red" : "bi bi-heart";
  }

  const handleVerDetallesClick = () => {
    navigate(`/DetallesProductos/${id}`);
  };

  return (
    <Card className="product-card">
      <div className="product-image">
        <Card.Img variant="top" className="p-4" src={img} />
        <a href="#" className="favorito">
          <i className={heartFilled(findFav)} id="heartFav"></i>
        </a>  
      </div>
      <Card.Body className="card-body">
        <Card.Title className="text-center titulo">{titulo}</Card.Title>
        <Card.Text>
          <span>$</span>
          {precio}
        </Card.Text>
        <Button variant="primary" onClick={handleVerDetallesClick}>
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
