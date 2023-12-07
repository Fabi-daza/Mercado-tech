import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card/Card'
import Container from 'react-bootstrap/esm/Container';
import { MyContext } from '../context/Mycontext';

const Favoritos = () => {
  const { products, favoritos } = useContext(MyContext);
  //usuario de prueba 
  const userID = "1";
  const buscarFavoritos = favoritos.filter(favorito => favorito.user_id === userID);
  const productosFavoritos = products.filter(producto => {
  return buscarFavoritos.some(favorito => favorito.product_id === producto.product_id);
});
  
  
  return (
    <div>
      <Container fluid className='d-flex justify-content-center mt-5 flex-wrap gap-md-2 gap-5' >
        {
          productosFavoritos.map((producto) => (
            <Card 
              id={producto.product_id} 
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

export default Favoritos