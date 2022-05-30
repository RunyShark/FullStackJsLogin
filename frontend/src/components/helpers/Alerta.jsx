const Alerta = ({ alerta }) => {
  return (
    <div>
      <p className="text-red-600 text-sm">{alerta.msg}</p>
    </div>
  );
};

export default Alerta;
