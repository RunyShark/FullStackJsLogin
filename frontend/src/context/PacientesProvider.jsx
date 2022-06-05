import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientee, setPacientee] = useState({});
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
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (paciente.id) {
      try {
        const { data } = await axios.put(
          `http://localhost:4000/paciente/modificar/${paciente.id}`,
          paciente,
          config
        );
        const pacienteActualizado = pacientes.map((e) =>
          e._id === data._id ? data : e
        );
        setPacientes(pacienteActualizado);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    } else {
      try {
        const { data } = await axios.post(
          `http://localhost:4000/paciente/crear`,
          paciente,
          config
        );
        const { createdAt, updatedAt, __v, ...pacientesAlmacenados } = data;
        setPacientes([pacientesAlmacenados, ...pacientes]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };
  const putPaciente = (e) => {
    setPacientee(e);
  };

  const eliminarPaciente = async (id) => {
    const confirmar = confirm(
      "¿Confirmas que desas eliminar el siguiente registro ?"
    );
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (confirmar) {
      try {
        const { data } = await axios.delete(
          `http://localhost:4000/paciente/borrar/${id}`,
          config
        );
        const pacienteActualizado = pacientes.filter((e) => e._id !== id);
        setPacientes(pacienteActualizado);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        guardarPaciente,
        putPaciente,
        pacientee,
        eliminarPaciente,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesContext;
