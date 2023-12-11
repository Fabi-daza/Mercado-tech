import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import { MyContext } from '../../context/Mycontext'
import './Perfil.css'

const Perfil = () => {
  const { usuarios, setUsuarios } = useContext(MyContext);
  const navigate = useNavigate(); 

  const url = 'https://mercadotech.onrender.com'

  const cerrarSesion = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userData")
    alert("sesion cerrada con exito")
    navigate("/login")
  }

  const getUserData = async () => {
    try {
      const endpoint = "/usuarios";
      const token = window.localStorage.getItem('token');
      if (token) {
        const response = await axios.get(url + endpoint, { headers: { Authorization: `Bearer ${token}` } });
        const user = response.data;
        console.log(user)
        setUsuarios({ ...user });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (usuarios) {
      localStorage.setItem('userData', JSON.stringify(usuarios));
    }
  }, [usuarios]);

  return (
    <Container className="w-100 d-flex p-md-5 p-2" >
      <Nav defaultActiveKey="/home" className="flex-column bg-primary sidebar p-md-3">
      <Nav.Link to="/MisProductos" > Publicaciones </Nav.Link>
      <Nav.Link to="/Favoritos" >Favoritos</Nav.Link>
      <Nav.Link to="/PublicarProducto">Publicar producto</Nav.Link>
      <Nav.Link to="/ModificarDatos">Modificar mis datos</Nav.Link>
      <Nav.Link onClick={cerrarSesion}>Cerrar sesión</Nav.Link>
    </Nav>

    
        <Card className="d-flex border-0 p-4 justify-content-center" style={{ width: "65%" }}>
        <Card.Img
        className="imagen-perfil"
        src={usuarios?.imagen}
      />
      <Card.Body>
        <Card.Text>
          <i className="bi bi-person-circle mx-3"></i> <span>{usuarios?.nombre}</span>
        </Card.Text>
        <Card.Text>
          <i className="bi bi-envelope mx-3"></i> <span>{usuarios?.email}</span>
        </Card.Text>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i> <span>{usuarios?.telefono}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default Perfil