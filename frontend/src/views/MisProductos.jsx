import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card/Card'
import Container from 'react-bootstrap/esm/Container';
import { MyContext } from '../context/Mycontext'

const MisProductos = () => {

  const { products} = useContext(MyContext);
  const usuarioLocal = JSON.parse(localStorage.getItem('userData'))

  const userID = usuarioLocal.user_id
  const productosPublicados = products.filter(producto => producto.user_id === userID)
  
  return (
    <div>
    <Container fluid className='d-flex justify-content-center mt-5 flex-wrap gap-md-2 gap-5' >
      {
        productosPublicados.map((producto) => (
          <Card 
            id={producto.id} 
            key={producto.product_id}
            titulo={producto.titulo} 
            img={producto.imagen} 
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))
      }
    </Container>
  </div>
  )
}

export default MisProductos