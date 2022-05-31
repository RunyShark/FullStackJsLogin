import axios from "axios";
export const REGISTER = "REGISTER";
export const GETVETERINARIOS = "GETVETERINARIOS";

export const register = (data) => {
  return async (dispatch) => {
    try {
      const reps = await axios.post(
        `http://localhost:4000/api/veterinarios`,
        data
      );
      return reps;
    } catch (error) {
      return dispatch({ type: REGISTER, payload: error.response.data.msg });
    }
  };
};

export const getVeterinaros = () => {};
