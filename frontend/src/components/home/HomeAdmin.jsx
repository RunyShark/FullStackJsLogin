import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HomeAdmin = () => {
  const { auth, cargando } = useAuth();
  console.log(auth);
  if (cargando) return "Cargando...";
  return (
    <>
      <h1>Admin</h1>
      {auth?._id ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default HomeAdmin;
