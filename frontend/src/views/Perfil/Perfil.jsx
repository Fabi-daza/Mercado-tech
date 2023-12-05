import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import { MyContext } from '../../context/Mycontext'
import './Perfil.css'

const Perfil = () => {
  const { usuarios } = useContext(MyContext);
  const userID = "1"; //usuario de prueba
  const miUsuario = usuarios.filter(usuario => usuario.id === userID);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token")
    alert("sesion cerrada con exito")
    navigate("/login")
  }

  return (
    <Container className="w-100 d-flex p-md-5 p-2" >
      <Nav defaultActiveKey="/home" className="flex-column bg-primary sidebar p-md-3">
      <Nav.Link href="/MisProductos" > Publicaciones </Nav.Link>
      <Nav.Link href="/Favoritos" >Favoritos</Nav.Link>
      <Nav.Link href="/PublicarProducto">Publicar producto</Nav.Link>
      <Nav.Link href="/ModificarDatos">Modificar mis datos</Nav.Link>
      <Nav.Link onClick={cerrarSesion}>Cerrar sesión</Nav.Link>
    </Nav>

    {
      miUsuario.map((usuario) =>(
        <Card className="d-flex border-0 p-4 justify-content-center" style={{ width: "65%" }}>
        <Card.Img
        className="imagen-perfil"
        src={usuario.imagen}
      />
      <Card.Body>
        <Card.Text>
          <i className="bi bi-person-circle mx-3"></i> <span>{usuario.nombre}</span>
        </Card.Text>
        <Card.Text>
          <i className="bi bi-envelope mx-3"></i> <span>{usuario.email}</span>
        </Card.Text>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i> <span>{usuario.telefono}</span>
        </Card.Text>
      </Card.Body>
    </Card>
      )
      )
    }
    </Container>
  )
}

export default Perfil