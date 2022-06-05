import usePacientes from "../../../../hooks/usePacientes";

const Cards = ({ e }) => {
  const { putPaciente, eliminarPaciente } = usePacientes();
  const { nombre, propietario, email, fecha, sintomas, _id } = e;

  const formaterFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Paciente:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Email de contacto:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Fecha de alta:{" "}
        <span className="font-normal normal-case text-black">
          {formaterFecha(fecha)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Sintomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>
      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={() => putPaciente(e)}
        >
          Editar paciente
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
          onClick={() => eliminarPaciente(_id)}
        >
          Eliminar paciente
        </button>
      </div>
    </div>
  );
};

export default Cards;
