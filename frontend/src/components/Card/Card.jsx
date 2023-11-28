import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function ProductCard({img, titulo, precio}) {
  return (
    <Card className='product-card'>
      <Card.Img variant="top" className='p-4' src={img} />
      <Card.Body>
        <Card.Title className='text-center'>{titulo}</Card.Title>
        <Card.Text>
            <span>$</span>{precio}
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;