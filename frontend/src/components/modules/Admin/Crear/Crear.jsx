import React, { useState, useEffect } from "react";
import axios from "axios";
import Alerta from "../../../helpers/Alerta";
import usePacientes from "../../../../hooks/usePacientes";

const Crear = () => {
  const { guardarPaciente, pacientee } = usePacientes();
  useEffect(() => {
    if (pacientee?.nombre) {
      setNombre(pacientee.nombre);
      setPropietario(pacientee.propietario);
      setEmail(pacientee.email);
      setFecha(pacientee.fecha);
      setSintomas(pacientee.sintomas);
      setId(pacientee._id);
    }
  }, [pacientee]);

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState({});
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }

    guardarPaciente({ nombre, propietario, email, fecha, sintomas, id });
    setTimeout(() => {
      setAlerta({});
    }, 4000);
    setAlerta({
      msg: "Guardado correctamente",
      error: false,
    });
    setNombre(" ");
    setPropietario(" ");
    setEmail(" ");
    setFecha(" ");
    setSintomas(" ");
    setId(null);
  };
  const { msg } = alerta;
  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Administrador de pacientes
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Añade tus pacientes{" "}
        <span className="text-indigo-600 font-bold">y administralos</span>
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
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre del la persona"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
              id="paciente"
              type="text"
              name="propietario"
              placeholder="Nombre del paciente"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              onChange={(e) => setPropietario(e.target.value)}
              value={propietario}
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
              id="email"
              type="email"
              name="email"
              placeholder="Email del paciente"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              id="fecha"
              type="date"
              name="fecha"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
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
              placeholder="Describe los sintomas del paciente"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              onChange={(e) => setSintomas(e.target.value)}
              value={sintomas}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={id ? "Guardar cambios" : "Agregar paciente"}
          />
        </form>
      </div>
    </>
  );
};

export default Crear;
