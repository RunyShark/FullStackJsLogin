import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { register } from "../../../store/actions";
import Alerta from "../../helpers/Alerta";

const validation = (values) => {
  const errors = {};
  let pattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,30}$$/;
  let regexComments = /^.{1,300}$/;
  let correo = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!values.nombre.trim()) {
    errors.nombre = "El campo es requerido";
  } else if (!pattern.test(!values.nombre.trim())) {
    errors.nombre =
      "¡El nombre debe tener entre 3 y 30 caracteres y no acepta valores especiales!";
  }
  if (!values.email.trim()) {
    errors.email = "El campo es requerido";
  }

  if (!values.password.trim()) {
    errors.password = "El campo es requerido";
  } else if (values.password.length < 5) {
    errors.password = "Constraseña muy corta";
  }
  if (!values.passwordRepit.trim()) {
    errors.passwordRepit = "El campo es requerido";
  } else if (values.passwordRepit !== values.password) {
    errors.passwordRepit = "Las contraseñas no coinciden";
  }

  if (!values.telefono.trim()) {
    errors.telefono = "El campo es requerido";
  }

  return errors;
};

const Registrar = () => {
  //const dispatch = useDispatch();
  //const { errosBack } = useSelector((state) => state);
  const [errors, setErrors] = useState({});
  const [alerta, setAlerta] = useState({});
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/api/veterinarios`, form);
      setAlerta({
        msg: "Revisa tu email para confirmar la cuenta",
        error: false,
      });
      setForm({
        nombre: "",
        email: "",
        password: "",
        passwordRepit: "",
        telefono: "",
      });
      setTimeout(() => {
        setAlerta({});
      }, 4000);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 5000);
    }
    // dispatch(register(form));
    // if (!errosBack) {
    //   setAlerta({
    //     msg: "Revisa tu email para confirmar la cuenta",
    //     error: false,
    //   });
    //   setTimeout(() => {
    //     setAlerta({});
    //   }, 3000);
    // } else {
    //   setAlerta({
    //     msg: errosBack,
    //     error: true,
    //   });
    //   setTimeout(() => {
    //     setAlerta({});
    //     window.location.reload(alert(errosBack));
    //   }, 5000);
    // }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-indigo-600  font-black text-6xl">
          Crea tu cuenta y administra tus
          <span className="text-black"> pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
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
              {errors.passwordRepit && (
                <p className="text-red-600 text-sm">{errors.passwordRepit}</p>
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
            value="Enviar registro"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
            disabled={
              form.password === ""
                ? true
                : false || form.nombre === ""
                ? true
                : false || form.email === ""
                ? true
                : false || form.passwordRepit === ""
                ? true
                : false || form.telefono === ""
                ? true
                : false
            }
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
