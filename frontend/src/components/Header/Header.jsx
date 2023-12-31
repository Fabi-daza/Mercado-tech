import { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';
import logo from  '../../assets/img/logo.png'

function Header() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    console.log(token)
  }, [token, navigate]);
  
  return (

    <Navbar expand="lg" className="bg-primary navbar-dark p-0">
      <Container fluid className='p-0'>
        <Navbar.Brand className="ms-4" href="/"> <img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-4'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end me-4 " >
          <NavLink to="/" className={({ isActive }) => isActive ? "bg-dark item-menu" : "bg-primary item-menu" }> Tienda </NavLink>
          <NavLink to="/Favoritos" className={({ isActive }) => isActive ? "bg-dark item-menu" : "bg-primary item-menu" } > Favoritos </NavLink>
          <NavLink to="/Perfil" className={({ isActive }) => isActive ? "bg-dark item-menu" : "bg-primary item-menu" }> Mi Perfil </NavLink>
          {!token ? <NavLink to="/Login" className={({ isActive }) => isActive ? "bg-dark item-menu" : "bg-primary item-menu" }> Login </NavLink> : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;