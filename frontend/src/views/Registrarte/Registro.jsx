import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Registro = () => {
  const url = "https://mercadotech.onrender.com";
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    password: '',
    imagen: '', 
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postRegistro = async (event) => {
    event.preventDefault();
    const endpoint = "/usuarios/registro"
    try {
      const response = await axios.post(url + endpoint, formData)
      alert("Usuario registrado exitosamente")
      navigate("/Login")
      console.log(response.data)
    } catch (error) {
      alert("Error en el registro 😔, por favor intente nuevamente")
      console.log(error)
    }
  };

  return (
    <Container fluid className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '400px', backgroundColor: '#0056b3', color: 'white' }}>
        <Card.Body style={{ height: '480px' }}>
          <h2 className='text-center'>Registro</h2>
          <Form onSubmit={(event) => postRegistro(event)} className='d-flex flex-column'>
            <Form.Group controlId='formNombre'>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type='text'
                name='nombre'
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formTelefono'>
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control
                type='text'
                name='telefono'
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='formImagen'>
              <Form.Label>URL de imagen de perfil:</Form.Label>
              <Form.Control
                type='text'
                name='imagen'
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant='dark' type='submit' className='m-3'>
              Registrarse
            </Button>
          </Form>

          <p className='text-center mt-3'>
            ¿Ya tienes una cuenta? <Link to='/login' style={{ color: 'white' }}>Iniciar sesión</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;
