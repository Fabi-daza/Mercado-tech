import React, { useState, useContext } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { MyContext } from '../context/Mycontext';
import { useNavigate } from 'react-router-dom';

const PublicarProducto = () => {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  // Asegúrate de que 'user' esté definido antes de usar sus propiedades
  const initialUsername = user ? user.username : '';

  const [formData, setFormData] = useState({
    username: initialUsername,
    image: '', // Cambiado a una cadena para almacenar la URL en lugar de un archivo
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
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
          <h2 className='text-center'>Publicar producto</h2>
          <br />
          <Form onSubmit={handleSubmit} className='d-flex flex-column'>
            <Form.Group controlId='formProductName'>
              <Form.Label>Nombre del producto:</Form.Label>
              <Form.Control
                type='text'
                name='productName'
                value={formData.productName}
                onChange={handleInputChange}
                placeholder='Nombre'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>
            <Form.Group controlId='formDescription'>
              <Form.Label>Descripción del producto:</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                placeholder='Describa su producto'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>

            <Form.Group controlId='formPrice'>
              <Form.Label>Precio del producto:</Form.Label>
              <Form.Control
                type='text'
                name='price'
                value={formData.price}
                onChange={handleInputChange}
                placeholder='Valor'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>

            <Form.Group controlId='formImage'>
              <Form.Label>URL de imagen del producto:</Form.Label>
              <Form.Control
                type='text'
                name='image'
                onChange={handleInputChange}
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>

            <Button variant='dark' type='submit' block className='mt-3'>
              Subir producto
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PublicarProducto;
