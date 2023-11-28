import Header from "./components/Header/Header";
import Tienda from "./views/Tienda";
import {Route, Routes} from "react-router-dom"; 
import Favoritos from "./views/Favoritos";
import Perfil from "./views/Perfil";
import Login from "./views/Login";
import Carrito from "./views/Carrito"
import { MyContext } from "./context/Mycontext";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () =>{
    const res = await fetch("./Base_productos.json");
    let data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts(); 
  }, []);
  return (
    <>
    <MyContext.Provider value={{products, setProducts}}>
    <Header />
    <Routes>
      <Route path='/' element={<Tienda />} />
      <Route path='/Favoritos' element={<Favoritos />} />
      <Route path='/Perfil' element={<Perfil />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Carrito' element={<Carrito />} />
    </Routes>
    </MyContext.Provider>
    </>
    
  )
}

export default App
