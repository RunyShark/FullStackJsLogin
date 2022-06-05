import React from "react";
import AdminNav from "../AdminNav/AdminNav";
const CambiasPassw = () => {
  return (
    <div>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambia tu contraseña
      </h2>
      <p className="text-xl  mt-5 mb-10 text-center">
        Modifica tu <span className="text-indigo-600">Contraseña</span>
      </p>
    </div>
  );
};

export default CambiasPassw;
