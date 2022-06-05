const Cards = ({ e }) => {
  const { nombre, propietario, email, fecha, sintomas } = e;

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
    </div>
  );
};

export default Cards;
