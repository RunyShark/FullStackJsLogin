import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

const HomeAdmin = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";
  return (
    <>
      <Header />
      {auth?._id ? (
        <main className="conteiner mx-auto mt-20">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </>
  );
};

export default HomeAdmin;
