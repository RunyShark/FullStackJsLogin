import { CONFIRMARCUENTA } from "../actions";
const initialState = {
  cuenta: {},
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CONFIRMARCUENTA:
      return {
        ...state,
        cuenta: actions.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
