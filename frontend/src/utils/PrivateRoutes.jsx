import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("¡Necesitas iniciar sesión para acceder a esta página!");
      navigate("/Login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoutes;