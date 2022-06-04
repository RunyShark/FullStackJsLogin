import React, { useState } from "react";
import axios from "axios";
import Alerta from "../../../helpers/Alerta";
import usePacientes from "../../../../hooks/usePacientes";

const Crear = () => {
  const { guardarPaciente } = usePacientes();

  const [paciente, setPaciente] = useState({
    nombre: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  });
  const [alerta, setAlerta] = useState({});

  const handleOnchange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    guardarPaciente(paciente);
    setPaciente({
      nombre: "",
      propietario: "",
      email: "",
      fecha: Date.now(),
      sintomas: "",
    });
  };
  const { msg } = alerta;
  return (
    <>
      <p className="text-lg text-center mb-10">
        Añade tu paciente y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <div className="ml-5 bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        {msg && <Alerta alerta={alerta} />}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="persona"
              className="text-gray-700 uppercase font-bold"
            >
              Nombre
            </label>
            <input
              onChange={handleOnchange}
              id="persona"
              name="nombre"
              type="text"
              placeholder="Nombre del la persona"
              value={paciente.nombre}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="paciente"
              className="text-gray-700 uppercase font-bold"
            >
              Nombre Paciente
            </label>
            <input
              onChange={handleOnchange}
              id="paciente"
              type="text"
              name="propietario"
              placeholder="Nombre del paciente"
              value={paciente.propietario}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              onChange={handleOnchange}
              id="email"
              type="email"
              name="email"
              placeholder="Email del paciente"
              value={paciente.email}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="text-gray-700 uppercase font-bold"
            >
              Fecha alta
            </label>
            <input
              onChange={handleOnchange}
              id="fecha"
              type="date"
              name="fecha"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={paciente.fecha}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sintoma"
              className="text-gray-700 uppercase font-bold"
            >
              Sintomas
            </label>
            <textarea
              id="sintoma"
              name="sintomas"
              cols="50"
              rows="5"
              value={paciente.sintomas}
              onChange={handleOnchange}
              placeholder="Describe los sintomas del paciente"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              required
            />
          </div>
          <input
            onChange={handleOnchange}
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value="Agrega paciente"
          />
        </form>
      </div>
    </>
  );
};

export default Crear;
