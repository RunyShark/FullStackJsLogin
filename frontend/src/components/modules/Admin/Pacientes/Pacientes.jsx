import usePacientes from "../../../../hooks/usePacientes";
import Cards from "../Cards/Cards";
const Pacientes = () => {
  const { pacientes } = usePacientes();
  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de paciente
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus pacientes{" "}
            <span className="text-indigo-600 font-bold">y citas</span>
          </p>
          {pacientes.map((e) => (
            <Cards key={e._id} e={e} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default Pacientes;
