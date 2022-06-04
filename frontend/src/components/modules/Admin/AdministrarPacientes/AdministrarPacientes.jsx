import Pacientes from "../Pacientes/Pacientes";
import Crear from "../Crear/Crear";

const AdministrarPacientes = () => {
  return (
    <div className="flex">
      <div className="md:w-1/2 lg:w-2/5">
        <Crear />
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <Pacientes />
      </div>
    </div>
  );
};

export default AdministrarPacientes;
