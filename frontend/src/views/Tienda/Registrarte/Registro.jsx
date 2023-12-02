import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Registro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', formData);
    // Aquí deberías enviar los datos a tu backend para el registro
  };

  return (
    <Container fluid className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <h2 className='text-center'>Registro</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId='formUsername'>
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type='text'
                name='username'
                value={formData.username}
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

            <Form.Group controlId='formImage'>
              <Form.Label>Subir imagen:</Form.Label>
              <Form.Control type='file' name='image' onChange={handleImageChange} accept='image/*' />
            </Form.Group>

            <Button variant='primary' type='submit' block>
              Registrarse
            </Button>
          </Form>

          <p className='text-center mt-3'>
            ¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;
