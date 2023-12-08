import React, { useState, useContext } from 'react';
import { MyContext } from '../context/Mycontext';
import './Login.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const initialForm = {email: 'micheal.jennings@example.com', password: 'contraseña'}
  const navigate = useNavigate()
  const [user, setUser] = useState(initialForm)
  const { setUsuarios } = useContext(MyContext)
  const url = 'http://localhost:3000'

  const handleUser = (event) => setUser({ ...user, [event.target.name]: event.target.value })

  const handleForm = async (event) => {
    event.preventDefault();
  
    if (!user.email.trim() || !user.password.trim()) {
      return window.alert('Email y password obligatorias.');
    }
  
    const endpoint = "/Login";
    try {
      const { data } = await axios.post(url + endpoint, user);
      window.localStorage.setItem('token', data.token);
      const token = window.localStorage.getItem('token');
      window.alert('Usuario identificado con éxito 😀.');
      console.log(data)
      setUsuarios({data});
      navigate('/Perfil');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error(error.response.data);
        window.alert(`${error.response.data.message}`);
      } else {
        console.error(error);
        window.alert('Error en la identificación del usuario 🙁.');
      }
    }
  };
  
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleUser} placeholder="Ingrese su email aquí" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" value={user.password} onChange={handleUser} placeholder="Ingrese su contraseña aquí" />
        </label>
        <br />
        <Button variant='dark' type='submit' block= "true">
  Iniciar sesion
</Button >
      </form>
<br />
<p className="register-text">
        ¿No tienes una cuenta? <Link to="/registro" style={{ color: 'white' }}>Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;

