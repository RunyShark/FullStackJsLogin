import React, { useState } from "react";
import { Link } from "react-router-dom";

const validation = (values) => {
  const errors = {};
  let pattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,30}$$/;
  let regexComments = /^.{1,300}$/;
  let correo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!values.email.trim()) {
    errors.email = "El campo es requerido";
  } else if (!correo.test(!values.email.trim())) {
    errors.email = "¡Debe de ser un correo valido!";
  }

  return errors;
};

const RecueperarPass = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
  });
  const handleOnblur = (e) => {
    handleChange(e);
    setErrors(validation(form));
  };
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Recupera tu acceso y no pierdas tus
          <span className="text-black"> pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Correo
              <input
                id="2"
                type="email"
                name="email"
                value={form.email}
                placeholder="Escribe tu correo"
                onChange={handleChange}
                onBlur={handleOnblur}
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
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
