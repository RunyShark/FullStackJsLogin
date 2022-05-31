import { REGISTER } from "../actions";
const initialState = {
  nuevo: [],
  errosBack: "",
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case REGISTER:
      return {
        ...state,
        errosBack: actions.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
