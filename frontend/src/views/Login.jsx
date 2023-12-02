import React, { useState, useContext } from 'react';
import { MyContext } from '../context/Mycontext';
import './Login.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const { usuarios } = useContext(MyContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación.
    // Puedes comparar los datos del formulario con tus datos de usuario.

    const user = usuarios.find((user) => user.username === formData.username && user.password === formData.password);

    if (user) {
      // Usuario autenticado, aquí podrías redirigir a otra página o realizar alguna acción.
      console.log('Inicio de sesión exitoso');
    } else {
      // Usuario no autenticado, puedes mostrar un mensaje de error.
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Usuario:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Ingrese su usuario aquí" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Ingrese su contraseña aquí" />
        </label>
        <br />
        <Button variant='dark' type='submit' block>
  Iniciar sesion
</Button>
      </form>
<br />
<p className="register-text">
        ¿No tienes una cuenta? <Link to="/registro" style={{ color: 'white' }}>Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;

