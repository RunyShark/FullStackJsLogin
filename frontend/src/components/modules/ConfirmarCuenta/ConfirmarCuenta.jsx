import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Alerta from "../../helpers/Alerta";

const ConfirmarCuenta = () => {
  const { id } = useParams();
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const con = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/confirmar/${id}`;
        const { data } = await axios.get(url);
        console.log(data);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
          error: false,
        });
        return;
      } catch (error) {}
      setCargando(false);
    };
    con();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Confirma tu cuenta y comieza a adminitrar
          <span className="text-black"> tus pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link to="/" className="block text-center my-5 text-gray-500 text-xl">
            Ya esta todo listo 🙌
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

export default ConfirmarCuenta;
