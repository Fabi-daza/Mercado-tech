import Header from "./components/Header/Header";
import Tienda from "./views/Tienda/Tienda";
import {Route, Routes} from "react-router-dom"; 
import Favoritos from "./views/Favoritos";
import Perfil from "./views/Perfil";
import Login from "./views/Login";
import Carrito from "./views/Carrito"
import MisProductos from "./views/MisProductos";
import { MyContext } from "./context/Mycontext";
import { useState, useEffect } from "react";
import Registro from "./views/Tienda/Registrarte/Registro";

function App() {
  const [products, setProducts] = useState([]);
  const [favoritos, setFavoritos] = useState([])
  const [usuarios, setUsuarios] = useState([])

  const getProducts = async () =>{
    const res = await fetch("./Base_productos.json");
    let data = await res.json();
    setProducts(data);
    console.log(products) 
  }

  useEffect(() => {
    getProducts(); 
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

  const getUsuarios = async () =>{
    const res = await fetch("./Base_usuarios.json");
    let data = await res.json();
    setUsuarios(data);
    console.log(usuarios)
  }
  
  useEffect(() => {
    getUsuarios() ;
  }, []);
  return (
    <>
    <MyContext.Provider value={{products, setProducts, favoritos, setFavoritos, usuarios, setUsuarios}}>
    <Header />
    <Routes>
      <Route path='/' element={<Tienda />} />
      <Route path='/Favoritos' element={<Favoritos />} />
      <Route path='/Perfil' element={<Perfil />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Carrito' element={<Carrito />} />
      <Route path='/MisProductos' element={<MisProductos />} />
      <Route path='/registro' element={<Registro />} />
    </Routes>
    </MyContext.Provider>
    </>
    
  )
}

export default App
