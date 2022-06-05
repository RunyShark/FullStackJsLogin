import React, { useState, useEffect } from "react";
import AdminNav from "../AdminNav/AdminNav";
import useAuth from "../../../../hooks/useAuth";
import Alerta from "../../../helpers/Alerta";

const Modificar = () => {
  const { auth, actualizarPerfil } = useAuth();
  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});
  const haldleOnchage = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email } = perfil;
    if ([nombre, email].includes("")) {
      setAlerta({
        msg: "Nombre y email son campos obligatorios",
        error: true,
      });
    }
    actualizarPerfil(perfil);
  };
  const { msg } = alerta;
  return (
    <div>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">Editar perfil</h2>
      <p className="text-xl  mt-5 mb-10 text-center">
        Modifica tu <span className="text-indigo-600">informacion aqui</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={haldleOnchage}
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Sitio web
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="web"
                value={perfil.web || ""}
                onChange={haldleOnchage}
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">
                Telefono
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="telefono"
                value={perfil.telefono || ""}
                onChange={haldleOnchage}
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-700">Email</label>
              <input
                type="email"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="email"
                value={perfil.email || ""}
                onChange={haldleOnchage}
              />
            </div>
            <input
              type="submit"
              value="Guardar cambios"
              className="bg-indigo-700 py-3 px-10  text-white uppercase font-bold rounded-lg w-full hover:cursor-pointer hover:bg-indigo-800"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modificar;
