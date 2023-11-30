import { MyContext } from '../../context/Mycontext'
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import Card from '../../components/Card/Card'
import Container from 'react-bootstrap/esm/Container';
import Banner from '../../assets/img/banner3.jpeg'
import './Tienda.css'
import Button from 'react-bootstrap/esm/Button';

const Tienda = () => {
const { products } = useContext(MyContext)
  return (
    <div>
      <Container fluid className='banner' style={{ backgroundImage: `url(${Banner})`}}>
        <div className="banner-text"> <h1>¿Pensando en renovar?</h1>
        <h3>Encuentra todo lo que buscas <br/>
            para tu nuevo Setup</h3>
        <h2>Compra y vende con nosotros</h2>
        <Button variant="primary" className='fs-4 mt-4 p-2'>Registrate</Button>
      </div>
      </Container>
      <Container fluid className='bg-dark'>
        <h2 className='text-white text-center p-2'>Ultimas publicaciones</h2>
      </Container>
      <Container fluid className='d-flex justify-content-center mt-5 flex-wrap gap-md-2 gap-5' >
      {
        products.map((producto) => (
          <Card 
          id={producto.id} 
          key={producto.id} 
          titulo={producto.titulo} 
          img={producto.imagen} 
          descripcion={producto.descripcion}
          precio={producto.precio}/>
        ))
      }
      </Container>
    </div>
  )
}

export default Tienda