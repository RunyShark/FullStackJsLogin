import React, { useState, useEffect } from "react";

import AdminNav from "../AdminNav/AdminNav";
import Alerta from "../../../helpers/Alerta";
const CambiasPassw = () => {
  const [alerta, setAlerta] = useState({});

  const [password, setPassword] = useState("");
  const haldleOnchage = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="password"
                value={password}
                placeholder="Escribe tu contraseña actual"
                onChange={haldleOnchage}
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Nueva contraseña
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="password"
                value={password}
                placeholder="Escribe tu nueva contraseña"
                onChange={haldleOnchage}
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Comprueba
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="password"
                value={password}
                placeholder="Comprueba tu nueva contraseña"
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
