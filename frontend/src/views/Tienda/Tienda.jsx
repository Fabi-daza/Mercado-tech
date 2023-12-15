import { MyContext } from '../../context/Mycontext'
import { useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Card from '../../components/Card/Card'
import Container from 'react-bootstrap/esm/Container';
import Banner from '../../assets/img/banner3.jpeg'
import './Tienda.css'
import Button from 'react-bootstrap/esm/Button';


const Tienda = () => {
  const { products } = useContext(MyContext);
  const navigate = useNavigate();


  const handleRegistroClick = () => {
    // Redirige a la vista de registro al hacer clic en el botón "Regístrate"
    navigate('/registro'); 
  };
  

  return (
    <div>
      <Container fluid className='banner' style={{ backgroundImage: `url(${Banner})` }}>
        <div className="banner-text">
          <h1>¿Pensando en renovar?</h1>
          <h3>Encuentra todo lo que buscas <br /> para tu nuevo Setup</h3>
          <h2>Compra y vende con nosotros</h2>
          <Button variant="primary" className='fs-4 mt-4 p-2' onClick={handleRegistroClick}>
            Regístrate
          </Button>
        </div>
      </Container>
      <Container fluid className='d-flex justify-content-center mt-5 flex-wrap gap-md-2 gap-5' >
        {products.map((producto) => (
          <Card
            id={producto.product_id}
            key={producto.product_id}
            titulo={producto.titulo}
            img={producto.imagen}
            descripcion={producto.descripcion}
            precio={producto.precio} />
        ))}
      </Container>
    </div>
  )
}

export default Tienda;
