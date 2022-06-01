import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/modules/login/Login";
import RecueperarPass from "./components/modules/RecuperarPass/RecueperarPass";
import ConfirmarCuenta from "./components/modules/ConfirmarCuenta/ConfirmarCuenta";
import Registrar from "./components/modules/Registrar/Registrar";
import NewPass from "./components/modules/NewPass/NewPass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="recueperar-pass" element={<RecueperarPass />} />
          <Route path="recueperar-pass/:toke" element={<NewPass />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
