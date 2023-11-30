import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card/Card'
import Container from 'react-bootstrap/esm/Container';
import { MyContext } from '../context/Mycontext';

const Favoritos = () => {
  const { products, favoritos } = useContext(MyContext);

  // Verificar si los productos y favoritos se están obteniendo correctamente
  //console.log("Productos:", products);
  //console.log("Favoritos:", favoritos);

  // Filtrar los productos favoritos basados en sus IDs
  const productosFavoritos = products.filter(producto => favoritos.map(fav => fav.product_id).includes(producto.id));
  //console.log("Productos favoritos:", productosFavoritos);
  
  return (
    <div>
      <Container fluid className='d-flex justify-content-center mt-5 flex-wrap gap-md-2 gap-5' >
        {
          productosFavoritos.map((producto) => (
            <Card 
              id={producto.id} 
              key={producto.id} 
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