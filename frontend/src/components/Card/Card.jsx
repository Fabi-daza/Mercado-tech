import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MyContext } from "../../context/Mycontext";
import { useContext } from "react";
import "./Card.css";

function ProductCard({ id, img, titulo, precio }) {
  const { products, favoritos } = useContext(MyContext);

  const findFav = favoritos.find((element) => element.product_id === id);
  
  function heartFilled(findFav) {
    if (findFav) {
      return "bi bi-heart-fill heart-red";
    } else {
      return "bi bi-heart";
    }
  }

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
        <Button variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
