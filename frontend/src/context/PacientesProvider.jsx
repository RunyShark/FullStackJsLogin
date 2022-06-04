import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {
    const obtenerPAcientes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(
          `http://localhost:4000/paciente/obtener`,
          config
        );

        setPacientes(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    obtenerPAcientes();
  }, []);

  const guardarPaciente = async (paciente) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:4000/paciente/crear`,
        paciente,
        config
      );
      const { createdAt, updatedAt, __v, _id, ...pacientesAlmacenados } = data;
      setPacientes([pacientesAlmacenados, ...pacientes]);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <PacientesContext.Provider value={{ pacientes, guardarPaciente }}>
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesContext;
