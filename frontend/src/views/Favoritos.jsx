import { useContext, useEffect } from "react";
import Card from "../components/Card/Card";
import Container from "react-bootstrap/esm/Container";
import { MyContext } from "../context/Mycontext";
import axios from "axios";

const Favoritos = () => {
  const { products, favoritos, setFavoritos, usuarios } = useContext(MyContext);
  const url = "http://localhost:3000";
  const token = window.localStorage.getItem('token')

  const getFavoritos = async (token) => {
    const endpoint = `/usuarios/${usuarios.user_id}/favoritos`;
    try {
      if(!token || !usuarios || !usuarios.user_id){
        return;
      }
      const response = await axios.get(url + endpoint, {headers: { Authorization: `Bearer ${token}` },
    });
      const misFavoritos = response.data;
      setFavoritos({ ...misFavoritos });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoritos(token);
  }, []);

  console.log(favoritos);

  const productosFavoritos = products.filter((producto) => {
    if (typeof favoritos === "object" && favoritos !== null) {
      const favoritosValues = Object.values(favoritos);
      return favoritosValues.some(
        (fav) => fav.product_id === producto.product_id
      );
    }
    return false;
  });

  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center mt-5 flex-wrap gap-md-2 gap-5"
      >
        {productosFavoritos.map((producto) => (
          <Card
            id={producto.product_id}
            key={producto.product_id}
            titulo={producto.titulo}
            img={producto.imagen}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </Container>
    </div>
  );
};

export default Favoritos;
