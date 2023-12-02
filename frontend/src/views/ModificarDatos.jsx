import React, { useState, useContext } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { MyContext } from '../context/Mycontext';
import { useNavigate } from 'react-router-dom';

const ModificarDatos = () => {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  // Asegúrate de que 'user' esté definido antes de usar sus propiedades
  const initialUsername = user ? user.username : '';

  const [formData, setFormData] = useState({
    username: initialUsername,
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos enviados:', formData);
    // Simula una redirección
    navigate('/Perfil');
  };

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '400px', backgroundColor: '#0056b3', color: 'white' }}>
        <Card.Body style={{ height: '480px' }}>
          <h2 className='text-center'>Editar Perfil</h2>
          <br />
          <Form onSubmit={handleSubmit} className='d-flex flex-column'>
            <Form.Group controlId='formUsername'>
              <Form.Label>Cambiar Nombre de Usuario:</Form.Label>
              <Form.Control
                type='text'
                name='username'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Nuevo nombre de usuario'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>
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
                type='file'
                name='image'
                onChange={handleImageChange}
                accept='image/*'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>
            <br />
            <Button variant='dark' type='submit' block className='mt-3'>
              Guardar Cambios!
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ModificarDatos;
