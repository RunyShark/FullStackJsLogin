import axios from "axios";
export const REGISTER = "REGISTER";
export const GETVETERINARIOS = "GETVETERINARIOS";

export const register = (data) => {
  console.log(data);
  return async () => {
    const reps = await axios.post(
      `http://localhost:4000/api/veterinarios`,
      data
    );
    return reps;
  };
};

export const getVeterinaros = () => {};
