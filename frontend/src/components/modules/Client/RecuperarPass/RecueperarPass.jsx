import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../../../helpers/Alerta";

import useAuth from "../../../../hooks/useAuth";

const RecueperarPass = () => {
  const { auth } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recuperar-password`,
        { email }
      );
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setEmail(" ");
      setTimeout(() => {
        setAlerta({});
      }, 5000);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 5000);
    }
  };

  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Recupera tu acceso y no pierdas tus
          <span className="text-black"> pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Correo
              <input
                type="email"
                name="email"
                placeholder="Escribe tu correo"
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <input
            type="submit"
            value="Enviar"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>
        <nav className="mt-7 lg:flex lg:justify-between">
          <Link to="/" className="block text-center my-5 text-gray-500 text-xl">
            ¿Ya tienes cuenta?
            <span className="font-bold text-slate-700 text-lg">
              {" "}
              inicia sesion
            </span>
          </Link>
          <Link
            to="/registrar"
            className="block text-center my-5 text-gray-500 text-xl"
          >
            ¿No tienes una cuenta?
            <span className="font-bold text-slate-700 text-lg">
              {" "}
              Registrate
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default RecueperarPass;
