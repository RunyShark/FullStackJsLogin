import { useState } from "react";
import Pacientes from "../Pacientes/Pacientes";
import Crear from "../Crear/Crear";

const AdministrarPacientes = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <button
        type="button"
        className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
        onClick={() => setMostrarForm(!mostrarForm)}
      >
        {mostrarForm ? "Ocultar formulario" : "Mostrar formulario"}
      </button>
      <div
        className={`${
          mostrarForm ? "block" : "hidden"
        } md:block md:w-1/2 lg:w-2/5 `}
      >
        <Crear />
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <Pacientes />
      </div>
    </div>
  );
};

export default AdministrarPacientes;
