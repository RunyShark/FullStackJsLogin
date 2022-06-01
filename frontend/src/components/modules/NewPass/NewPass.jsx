import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../../helpers/Alerta";
const NewPass = () => {
  const { toke } = useParams();
  const [alerta, setAlerta] = useState({});
  const [tokeValido, setTokeValido] = useState(false);
  const [passModi, setPassModi] = useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlerta({
        msg: "Contraseña debe de tener minimo 6 caracteres",
        error: true,
      });
      return;
    }
    try {
      const url = `${
        import.meta.env.VITE_BACKEND_URL
      }/api/recuperar-password/${toke}`;
      const { data } = await axios.post(url, { password });
      setPassModi(true);
      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  useEffect(() => {
    const comprobarToke = async () => {
      try {
        await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/recuperar-password/${toke}`
        );
        setAlerta({
          msg: "Coloca tu nueva contraseña",
          error: false,
        });
        setTokeValido(true);
      } catch (error) {
        setAlerta({
          msg: "Hubo un error, vuelve a intentar",
          error: true,
        });
      }
    };
    comprobarToke();
  }, []);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Restablece tu contraseña y no pierdas acceso a
          <span className="text-black">tus pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {tokeValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
                  Nueva contraseña
                  <input
                    type="password"
                    name="password"
                    placeholder="Escribe una contraseña"
                    required
                    className="border w-full p-3 mt-3 bg-gray-50 rounded"
                    value={password}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Enviar"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
              />
            </form>
          </>
        )}
        {passModi && (
          <Link to="/" className="block text-center my-5 text-gray-500 text-xl">
            <span className="font-bold text-slate-700 text-lg">
              {" "}
              inicia sesion
            </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default NewPass;
