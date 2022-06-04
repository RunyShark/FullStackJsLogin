import React from "react";

const Crear = () => {
  return (
    <>
      <p className="text-lg text-center mb-10">
        Añade tu paciente y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="ml-10 bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="mb-5">
          <label
            htmlFor="persona"
            className="text-gray-700 uppercase font-bold"
          >
            Nombre Paciente
          </label>
          <input
            id="persona"
            type="text"
            placeholder="Nombre del la persona"
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
            placeholder="Nombre del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">
            Fecha alta
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
            placeholder="Describe los sintomas del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agrega paciente"
        />
      </form>
    </>
  );
};

export default Crear;
