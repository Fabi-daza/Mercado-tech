import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/esm/Container";
import { MyContext } from '../../context/Mycontext'
import './Perfil.css'

const Perfil = () => {
  const { usuarios } = useContext(MyContext);
  return (
    <Container className="w-100 d-flex p-5" >
      <Nav defaultActiveKey="/home" className="flex-column bg-primary sidebar">
      <Nav.Link href="/MisProductos" > Publicaciones </Nav.Link>
      <Nav.Link href="/Favoritos" >Favoritos</Nav.Link>
      <Nav.Link href="/home" >Modificar mis datos</Nav.Link>
    </Nav>
       <Card className="d-flex border-0 p-4 justify-content-center" style={{ width: "65%" }}>
        <Card.Img
        className="imagen-perfil"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i>Some quick example
        </Card.Text>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i>Some quick example
        </Card.Text>
        <Card.Text>
          <i className="bi bi-telephone mx-3"></i>Some quick example
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default Perfil