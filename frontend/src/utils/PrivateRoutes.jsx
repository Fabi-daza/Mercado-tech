import { Navigate, Outlet } from "react-router-dom";
//import { useData } from "../context/Mycontext";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token")

  const isAuthenticated = !!token

  return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoutes;