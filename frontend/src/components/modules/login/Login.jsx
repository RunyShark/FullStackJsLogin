import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Alerta from "../../helpers/Alerta";
import axios from "axios";

const Login = () => {
  const { auth } = useAuth();

  const [alerta, setAlerta] = useState({});

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });

      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/login`,
        { email, password }
      );

      localStorage.setItem("token", data.token);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Inicia sesion y administra a tus
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
                id="2"
                type="email"
                name="email"
                value={email}
                placeholder="Escribe tu correo"
                onChange={(e) => setEmail(e.target.value)}
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
              />
            </label>
          </div>
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Contraseña
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Escribe una contraseña"
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Iniciar sesion"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>
        <nav className="mt-7 lg:flex lg:justify-between">
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

          <Link
            to="/recueperar-pass"
            className="block text-center my-5 text-gray-500 text-xl"
          >
            Recuperar contraseña
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
