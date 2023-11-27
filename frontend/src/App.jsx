import Header from "./components/Header";
import Tienda from "./views/Tienda";
import {Route, Routes} from "react-router-dom"; 
import Favoritos from "./views/Favoritos";
import Perfil from "./views/Perfil";
import Login from "./views/Login";
import Carrito from "./views/Carrito"

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Tienda />} />
      <Route path='/Favoritos' element={<Favoritos />} />
      <Route path='/Perfil' element={<Perfil />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Carrito' element={<Carrito />} />
    </Routes>
    </>
    
  )
}

export default App
