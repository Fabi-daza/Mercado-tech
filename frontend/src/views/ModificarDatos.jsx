import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";

const ModificarDatos = () => {
  const usuarioLocal = JSON.parse(localStorage.getItem('userData'))
  const url = "https://mercadotech.onrender.com";
  const [formData, setFormData] = useState({
    user_id: usuarioLocal.user_id,
    password: '',
    imagen: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const pathUsuario = async (event) => {
    event.preventDefault();
    const endpoint = "/usuarios/modificar"
    try {
      const response = await axios.patch(url + endpoint, formData)
      alert("Usuario actualizado exitosamente")
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '400px', backgroundColor: '#0056b3', color: 'white' }}>
        <Card.Body style={{ height: '480px' }}>
          <h2 className='text-center'>Editar Perfil</h2>
          <br />
          <Form onSubmit={(event) => pathUsuario(event)} className='d-flex flex-column'>
            <Form.Group controlId='formPassword'>
              <Form.Label>Cambiar Contraseña:</Form.Label>
              <Form.Control
                type='text'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Nueva contraseña'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>
            <Form.Group controlId='formImage'>
              <Form.Label>Cambiar Imagen:</Form.Label>
              <Form.Control
                type='ftext'
                name='imagen'
                onChange={handleInputChange}
                accept='image/*'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>
            <br />
            <Button variant='dark' type='submit' className='mt-3'>
              Guardar Cambios!
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ModificarDatos;
