import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {}, []);

  const guardarPaciente = async (paciente) => {
    console.log(paciente);
  };

  return (
    <PacientesContext.Provider value={{ pacientes, guardarPaciente }}>
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesContext;
