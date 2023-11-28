import { MyContext } from '../context/Mycontext'
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card/Card'
import Container from 'react-bootstrap/esm/Container';

const Tienda = () => {
const { products } = useContext(MyContext)
  return (
    <div>
      <Container fluid className='d-flex justify-content-center mt-5'>
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