import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HomeAdmin = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <h1>Admin</h1>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-12 p-5 ">
        <Outlet />
      </main>
    </>
  );
};

export default HomeAdmin;
