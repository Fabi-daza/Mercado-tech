import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Mycontext";
import axios from "axios";
import "./Card.css";

function ProductCard({ id, img, titulo, precio }) {
  const { favoritos, setFavoritos } = useContext(MyContext);
  const navigate = useNavigate();
  const url = "https://mercadotech.onrender.com";
  const usuarioLocal = JSON.parse(localStorage.getItem('userData'))

  const getFavoritos = async () => {
    try {
      if (!usuarioLocal || !usuarioLocal.user_id ) {
        return;
      }
      const endpoint = `/usuarios/${usuarioLocal.user_id}/favoritos`;
      const response = await axios.get(url + endpoint);
      const misFavoritos = response.data;
      setFavoritos({ ...misFavoritos });
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleFavorito = async () => {
    try {
      console.log(favoritos);
      const findFav = Object.values(favoritos).find((element) => element.product_id === id);
      const endpoint = '/favoritos';
      const userEndpoint = `/${usuarioLocal.user_id}/${id}`;
  
      if (!findFav) {
        console.log("no favorito");
        const response = await axios.post(url + endpoint, {
          user_id: usuarioLocal.user_id,
          product_id: id
        });
        console.log(response);
      } else {
        const response = await axios.delete(url + endpoint + userEndpoint);
        console.log(response.data);
      }
      getFavoritos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoritos();
  }, []);



  const findFav = !usuarioLocal ? null : Object.values(favoritos).find((element) => element.product_id === id);

  const heartFilled = findFav ? "bi bi-heart-fill heart-red" : "bi bi-heart";

  const handleVerDetallesClick = () => {
    navigate(`/DetallesProductos/${id}`);
  };

  return (
    <Card className="product-card">
      <div className="product-image">
        <Card.Img variant="top" className="p-4" src={img} />
        <Link className="favorito" onClick={handleFavorito}>
          <i className={heartFilled} id="heartFav"></i>
        </Link>
        
      </div>
      <Card.Body className="card-body">
        <Card.Title className="text-center titulo">{titulo}</Card.Title>
        <Card.Text>
          <span>$</span>
          {precio}
        </Card.Text>
        <Button variant="primary" onClick={handleVerDetallesClick}>
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;