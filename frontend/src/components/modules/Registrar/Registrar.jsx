import React, { useState } from "react";
import { Link } from "react-router-dom";
const validation = (values) => {
  const errors = {};
  let pattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,30}$$/;
  let regexComments = /^.{1,300}$/;
  let correo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!values.nombre.trim()) {
    errors.nombre = "El campo es requerido";
  } else if (!pattern.test(!values.nombre.trim())) {
    errors.nombre =
      "¡El nombre debe tener entre 3 y 30 caracteres y no acepta valores especiales!";
  }
  if (!values.email.trim()) {
    errors.email = "El campo es requerido";
  } else if (!correo.test(!values.email.trim())) {
    errors.email = "¡Debe de ser un correo valido!";
  }

  if (!values.password.trim()) {
    errors.password = "El campo es requerido";
  }

  if (!values.telefono.trim()) {
    errors.telefono = "El campo es requerido";
  }

  return errors;
};

const Registrar = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordRepit: "",
    telefono: "",
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
          Crea tu cuenta y administra tus
          <span className="text-black"> pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Nombre
              <input
                id="1"
                type="text"
                name="nombre"
                value={form.nombre}
                placeholder="Escribe tu nombre"
                onChange={handleChange}
                onBlur={handleOnblur}
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
              />
              {errors.nombre && (
                <p className="text-red-600 text-sm">{errors.nombre}</p>
              )}
            </label>
          </div>
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
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Contraseña
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Escribe una contraseña"
                onChange={handleChange}
                onBlur={handleOnblur}
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password}</p>
              )}
            </label>
          </div>
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Repite tu contraseña
              <input
                type="password"
                name="passwordRepit"
                value={form.passwordRepit}
                placeholder="Repite tu contraseña"
                onChange={handleChange}
                onBlur={handleOnblur}
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password}</p>
              )}
            </label>
          </div>
          <div>
            <label className="uppercase text-gray-600  block text-xl font-bold mt-3">
              Telefono
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                placeholder="Escribe tu telefono"
                onChange={handleChange}
                onBlur={handleOnblur}
                required
                className="border w-full p-3 mt-3 bg-gray-50 rounded "
              />
              {errors.telefono && (
                <p className="text-red-600 text-sm ">{errors.telefono}</p>
              )}
            </label>
          </div>

          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>

        <nav className="mt-7">
          <Link to="/" className="block text-center my-5 text-gray-500 text-xl">
            ¿Ya tienes cuenta?
            <span className="font-bold text-slate-700 text-lg">
              {" "}
              inicia sesion
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

export default Registrar;
