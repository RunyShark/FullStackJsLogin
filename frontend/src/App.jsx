import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import HomeAdmin from "./components/home/HomeAdmin";
import Login from "./components/modules/Client/login/Login";
import RecueperarPass from "./components/modules/Client/RecuperarPass/RecueperarPass";
import ConfirmarCuenta from "./components/modules/Client/ConfirmarCuenta/ConfirmarCuenta";
import Registrar from "./components/modules/Client/Registrar/Registrar";
import NewPass from "./components/modules/Client/NewPass/NewPass";
import AdministrarPacientes from "./components/modules/Admin/AdministrarPacientes/AdministrarPacientes";
import Modificar from "./components/modules/Admin/Modificar/Modificar";
import CambiasPassw from "./components/modules/Admin/cambiasPassw/CambiasPassw";
import { AuthProvider } from "./context/AuthProvider";
import { PacientesProvider } from "./context/PacientesProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PacientesProvider>
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
                <Route path="perfil" element={<Modificar />} />
                <Route path="cambiar-pass" element={<CambiasPassw />} />
              </Route>
            </Routes>
          </PacientesProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
