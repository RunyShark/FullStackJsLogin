import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import HomeAdmin from "./components/home/HomeAdmin";
import Login from "./components/modules/Client/login/Login";
import RecueperarPass from "./components/modules/Client/RecuperarPass/RecueperarPass";
import ConfirmarCuenta from "./components/modules/Client/ConfirmarCuenta/ConfirmarCuenta";
import Registrar from "./components/modules/Client/Registrar/Registrar";
import NewPass from "./components/modules/Client/NewPass/NewPass";
import AdministrarPacientes from "./components/modules/Admin/AdministrarPacientes/AdministrarPacientes";
import Crear from "./components/modules/Admin/Crear/Crear";
import Modificar from "./components/modules/Admin/Modificar/Modificar";
import Borrar from "./components/modules/Admin/Borrar/Borrar";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="recueperar-pass" element={<RecueperarPass />} />
              <Route path="recueperar-pass/:token" element={<NewPass />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/admin" element={<HomeAdmin />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path="crear" element={<Crear />} />
              <Route path="modificar" element={<Modificar />} />
              <Route path="borrar" element={<Borrar />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
