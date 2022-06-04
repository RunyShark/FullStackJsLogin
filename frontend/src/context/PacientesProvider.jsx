import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
  const [paciente, setPaciente] = useState([]);
  useEffect(() => {}, []);

  return (
    <PacientesContext.Provider value={{ paciente }}>
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesContext;
