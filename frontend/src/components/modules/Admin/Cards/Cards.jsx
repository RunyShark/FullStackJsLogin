const Cards = ({ e }) => {
  const { nombre, propietario, email, fecha, sintomas } = e;
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold uppercase text-gray-500">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p>{propietario}</p>
      <p>{email}</p>
      <p>{fecha}</p>
      <p>{sintomas}</p>
    </div>
  );
};

export default Cards;
