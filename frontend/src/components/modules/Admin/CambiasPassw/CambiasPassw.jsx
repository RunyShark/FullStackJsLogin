import React, { useState, useEffect } from "react";

import AdminNav from "../AdminNav/AdminNav";
import Alerta from "../../../helpers/Alerta";
import useAuth from "../../../../hooks/useAuth";

const CambiasPassw = () => {
  const { guardarPasswor } = useAuth();
  const [alerta, setAlerta] = useState({});

  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  });
  const haldleOnchage = async (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msg: "Debe de tener por los menos 6 caracteres",
        error: true,
      });
      return;
    }

    const respuesta = await guardarPasswor(password);
    setAlerta(respuesta);
  };
  const { msg } = alerta;
  return (
    <div>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambia tu contraseña
      </h2>
      <p className="text-xl  mt-5 mb-10 text-center">
        Modifica tu <span className="text-indigo-600">Contraseña</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Contraseña actual
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_actual"
                value={password.pwd_actual}
                placeholder="Escribe tu contraseña actual"
                onChange={haldleOnchage}
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Nueva contraseña
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_nuevo"
                value={password.pwd_nuevo}
                placeholder="Escribe tu nueva contraseña"
                onChange={haldleOnchage}
              />
            </div>

            <input
              type="submit"
              value="Actualizar contraseña"
              className="bg-indigo-700 py-3 px-10  text-white uppercase font-bold rounded-lg w-full hover:cursor-pointer hover:bg-indigo-800"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CambiasPassw;
