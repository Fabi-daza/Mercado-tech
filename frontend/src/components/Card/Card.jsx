import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './Card.css'

function ProductCard({img, titulo, precio}) {
 
  const [heartState, setHeartState] = useState(false);

  const handleClick = () =>{
    setHeartState(heartState => !heartState)
  }
  let heartFilled = heartState ? "bi bi-heart-fill heart-red" : "bi bi-heart heart-white";
  
 
  return (
    <Card className='product-card'>
      <div className="product-image">
      <Card.Img variant="top" className='p-4' src={img} />
      <a href="#" className='favorito' onClick={handleClick} ><i className={heartFilled} id='heartFav'></i></a>
      </div>
      <Card.Body className='card-body'>
        <Card.Title className='text-center titulo'>{titulo}</Card.Title>
        <Card.Text>
            <span>$</span>{precio}
        </Card.Text>
        <Button variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;