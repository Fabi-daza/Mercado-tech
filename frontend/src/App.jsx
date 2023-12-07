import Header from "./components/Header/Header";
import Tienda from "./views/Tienda/Tienda";
import {Route, Routes} from "react-router-dom"; 
import Favoritos from "./views/Favoritos";
import Perfil from "./views/Perfil/Perfil";
import Login from "./views/Login";
import MisProductos from "./views/MisProductos";
import { MyContext } from "./context/Mycontext";
import { useState, useEffect } from "react";
import Registro from "./views/Registrarte/Registro";
import ModificarDatos from "./views/ModificarDatos";
import PublicarProducto from "./views/PublicarProducto";
import DetallesProductos from "./views/DetallesProductos/DetallesProductos";
import PrivateRoutes from "./utils/PrivateRoutes";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [favoritos, setFavoritos] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const url = 'http://localhost:3000';

  const getData = async () => {
    const endpoint = "/";
    try {
      const response = await axios.get(url + endpoint);
      const productList = response.data;
      setProducts(productList);
    } catch (error) {
      console.log(error);
      console.log(products);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getFavoritos = async () =>{
    const res = await fetch("./favoritos.json");
    let data = await res.json();
    setFavoritos(data);
    console.log(favoritos)
  }
  
  useEffect(() => {
    getFavoritos();
  }, []);


 
  
  return (
    <>
    <MyContext.Provider value={{products, setProducts, favoritos, setFavoritos, usuarios, setUsuarios}}>
    <Header />
    <Routes>
      <Route path='/' element={<Tienda />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Registro' element={<Registro />} />
      <Route path='/DetallesProductos/:productId' element={<DetallesProductos />} />
      <Route path="/Perfil" element={<PrivateRoutes />}>
            <Route element={<Perfil />} path="/Perfil" />
      </Route>
      <Route path="/MisProductos" element={<PrivateRoutes />}>
          <Route path='/MisProductos' element={<MisProductos />} />
      </Route>
      <Route path="/Favoritos" element={<PrivateRoutes />}>
          <Route path='/Favoritos' element={<Favoritos />} />
      </Route>
      <Route path="/ModificarDatos" element={<PrivateRoutes />}>
          <Route path='/ModificarDatos' element={<ModificarDatos />} />
      </Route>
      <Route path="/PublicarProducto" element={<PrivateRoutes />}>
          <Route path='/PublicarProducto' element={<PublicarProducto />} />
      </Route>
        
    </Routes>
    </MyContext.Provider>
    </>
    
  )
}

export default App
