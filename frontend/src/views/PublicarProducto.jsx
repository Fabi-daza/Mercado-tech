import React, { useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { MyContext } from '../context/Mycontext';
import axios from "axios";

const PublicarProducto = () => {
  const { products, setProducts} = useContext(MyContext);
  const url = "https://mercadotech.onrender.com";
  const usuarioLocal = JSON.parse(localStorage.getItem('userData'))
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    titulo: '', 
    descripcion: '',
    precio: '',
    imagen: '',
    user_id: usuarioLocal.user_id,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postProduct = async (event) => {
    event.preventDefault();
    const endpoint = "/productos/crear"
    try {
      const response = await axios.post(url + endpoint, formData)
      alert("Producto creado exitosamente")
      const updatedProductList = [...products, formData];
      setProducts(updatedProductList);
      navigate('/')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '400px', backgroundColor: '#0056b3', color: 'white' }}>
        <Card.Body style={{ height: '480px' }}>
          <h2 className='text-center'>Publicar producto</h2>
          <br />
          <Form onSubmit={(event) => postProduct(event)} className='d-flex flex-column'>
            <Form.Group controlId='formProductName'>
              <Form.Label>Nombre del producto:</Form.Label>
              <Form.Control
                type='text'
                name='titulo'
                value={formData.titulo}
                onChange={handleInputChange}
                placeholder='Nombre'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>
            <Form.Group controlId='formDescription'>
              <Form.Label>Descripción del producto:</Form.Label>
              <Form.Control
                type='text'
                name='descripcion'
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder='Describa su producto'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>

            <Form.Group controlId='formPrice'>
              <Form.Label>Precio del producto:</Form.Label>
              <Form.Control
                type='text'
                name='precio'
                value={formData.precio}
                onChange={handleInputChange}
                placeholder='Valor'
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>

            <Form.Group controlId='formImage'>
              <Form.Label>URL de imagen del producto:</Form.Label>
              <Form.Control
                type='text'
                name='imagen'
                value={formData.imagen}
                onChange={handleInputChange}
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
            </Form.Group>

            <Button variant='dark' type='submit' className='mt-3'>
              Subir producto
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PublicarProducto;
