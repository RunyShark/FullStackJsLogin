import axios from "axios";
export const CONFIRMARCUENTA = "CONFIRMARCUENTA";

export const crCuenta = () => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        method: "GET",
      });
      return dispatch({ type: CONFIRMARCUENTA, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
};
