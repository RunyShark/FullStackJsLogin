import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const autenteicarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/perfil`,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error.respose.data.msg);
      }
    };
    autenteicarUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
